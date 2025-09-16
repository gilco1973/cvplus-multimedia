// @ts-ignore - Export conflictsimport { HttpsError, CallableRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';
import * as admin from 'firebase-admin';
// Import from local types for multimedia module autonomy
import { AuthenticatedUser, requireGoogleAuth } from '../../types';
// Import local admin types to avoid dependency violations
import { AdminRole, AdminLevel, AdminPermissions } from '../../types/admin.types';


export interface AuthenticatedRequest extends CallableRequest {
  auth: {
    uid: string;
    token: admin.auth.DecodedIdToken;
  };
  acceptsStreaming?: boolean;
}

export const requireAuth = async (request: CallableRequest): Promise<AuthenticatedRequest> => {
  try {
    // Use core authentication utility for proper validation
    const user = await requireGoogleAuth(request);
    
    logger.info('Authentication successful', {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      hasCalendarPermissions: user.hasCalendarPermissions
    });

    return {
      ...request,
      auth: { 
        uid: user.uid, 
        token: request.auth!.token
      }
    } as AuthenticatedRequest;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error('Authentication failed', { 
      error: errorMessage,
      hasAuth: !!request.auth,
      uid: request.auth?.uid
    });
    
    throw new HttpsError('unauthenticated', errorMessage);
  }
};

/**
 * Enhanced authentication middleware that also validates job ownership
  */
export const requireAuthWithJobOwnership = async (
  request: CallableRequest, 
  jobId: string
): Promise<AuthenticatedRequest> => {
  const authenticatedRequest = await requireAuth(request);
  const { uid } = authenticatedRequest.auth;

  try {
    // Verify job exists and belongs to the authenticated user
    const jobDoc = await admin.firestore()
      .collection('jobs')
      .doc(jobId)
      .get();

    if (!jobDoc.exists) {
      logger.error('Job not found', { jobId, uid });
      throw new HttpsError('not-found', 'Job not found');
    }

    const jobData = jobDoc.data();
    if (jobData?.userId !== uid) {
      logger.error('Job ownership verification failed', {
        jobId,
        requestUid: uid,
        jobUserId: jobData?.userId
      });
      throw new HttpsError('permission-denied', 'Access denied: Job belongs to different user');
    }

    logger.info('Job ownership verified', { jobId, uid });
    return authenticatedRequest;

  } catch (error) {
    if (error instanceof HttpsError) {
      throw error;
    }
    
    logger.error('Job ownership validation failed', { 
      error: error instanceof Error ? error.message : error,
      jobId, 
      uid 
    });
    throw new HttpsError('internal', 'Failed to validate job ownership');
  }
};

/**
 * Utility to extract user information from authenticated request
  */
export const getUserInfo = async (request: AuthenticatedRequest): Promise<AuthenticatedUser> => {
  // Re-use core authentication for consistent user info
  return await requireGoogleAuth(request);
};

/**
 * Enhanced admin authentication with role-based access control
  */
export interface AdminAuthenticatedRequest extends AuthenticatedRequest {
  admin: {
    role: AdminRole;
    level: AdminLevel;
    permissions: AdminPermissions;
    profile: any;
  };
}

/**
 * Check if user has administrative privileges (legacy)
  */
export const isAdmin = (request: AuthenticatedRequest): boolean => {
  // SECURITY IMPROVEMENT: Use environment variables for admin emails
  const adminEmailsEnv = process.env.ADMIN_EMAILS || 'gil.klainert@gmail.com,admin@cvplus.ai';
  const adminEmails = adminEmailsEnv.split(',').map(email => email.trim());
  
  return adminEmails.includes(request.auth.token.email || '');
};

/**
 * Enhanced admin authentication with Firebase Custom Claims
  */
export const requireAdmin = async (request: CallableRequest, minLevel: AdminLevel = AdminLevel.L1_SUPPORT): Promise<AdminAuthenticatedRequest> => {
  const authenticatedRequest = await requireAuth(request);
  const { uid, token } = authenticatedRequest.auth;

  try {
    // Check for admin custom claims in Firebase token
    const customClaims = token.admin || null;
    
    if (!customClaims) {
      // Fallback to email-based admin check for migration period
      const isLegacyAdmin = isAdmin(authenticatedRequest);
      if (isLegacyAdmin) {
        logger.warn('Using legacy admin email check - custom claims needed', {
          uid,
          email: token.email
        });
        
        // Return with default super admin privileges for legacy admins
        return {
          ...authenticatedRequest,
          admin: {
            role: AdminRole.SUPER_ADMIN,
            level: AdminLevel.L4_SUPER_ADMIN,
            permissions: getDefaultAdminPermissions(AdminLevel.L4_SUPER_ADMIN),
            profile: null
          }
        } as AdminAuthenticatedRequest;
      }
      
      logger.error('Admin access denied: No admin privileges', {
        uid,
        email: token.email,
        hasCustomClaims: !!customClaims
      });
      throw new HttpsError('permission-denied', 'Admin access required');
    }

    // Validate admin level meets minimum requirement
    const userLevel = customClaims.level || AdminLevel.L1_SUPPORT;
    if (userLevel < minLevel) {
      logger.error('Admin access denied: Insufficient admin level', {
        uid,
        email: token.email,
        userLevel,
        minLevel
      });
      throw new HttpsError('permission-denied', `Admin level ${minLevel} or higher required`);
    }

    // Get admin profile from Firestore
    const adminProfile = await getAdminProfile(uid);
    
    logger.info('Admin authentication successful', {
      uid,
      email: token.email,
      role: customClaims.role,
      level: userLevel
    });

    return {
      ...authenticatedRequest,
      admin: {
        role: customClaims.role,
        level: userLevel,
        permissions: customClaims.permissions || getDefaultAdminPermissions(userLevel),
        profile: adminProfile
      }
    } as AdminAuthenticatedRequest;

  } catch (error) {
    if (error instanceof HttpsError) {
      throw error;
    }
    
    logger.error('Admin authentication failed', { 
      error: error instanceof Error ? error.message : error, 
      uid,
      errorStack: error instanceof Error ? error.stack : undefined
    });
    throw new HttpsError('internal', 'Admin authentication validation failed');
  }
};

/**
 * Check specific admin permission
  */
export const requireAdminPermission = async (
  request: CallableRequest, 
  permission: keyof AdminPermissions
): Promise<AdminAuthenticatedRequest> => {
  const adminRequest = await requireAdmin(request, AdminLevel.L1_SUPPORT);
  
  if (!adminRequest.admin.permissions[permission]) {
    logger.error('Admin permission denied', {
      uid: adminRequest.auth.uid,
      permission,
      role: adminRequest.admin.role,
      level: adminRequest.admin.level
    });
    throw new HttpsError('permission-denied', `Admin permission '${permission}' required`);
  }

  return adminRequest;
};

/**
 * Get admin profile from Firestore
  */
const getAdminProfile = async (uid: string) => {
  try {
    const adminDoc = await admin.firestore()
      .collection('adminProfiles')
      .doc(uid)
      .get();

    if (!adminDoc.exists) {
      logger.warn('Admin profile not found in Firestore', { uid });
      return null;
    }

    return adminDoc.data();
  } catch (error) {
    logger.error('Failed to fetch admin profile', {
      error: error instanceof Error ? error.message : error,
      uid
    });
    return null;
  }
};

/**
 * Get default permissions based on admin level
  */
const getDefaultAdminPermissions = (level: AdminLevel): AdminPermissions => {
  const basePermissions = {
    canAccessDashboard: true,
    canManageUsers: false,
    canModerateContent: false,
    canMonitorSystem: false,
    canViewAnalytics: false,
    canAuditSecurity: false,
    canManageSupport: false,
    canManageBilling: false,
    canConfigureSystem: false,
    canManageAdmins: false,
    canExportData: false,
    canManageFeatureFlags: false,
    userManagement: {
      canViewUsers: false,
      canEditUsers: false,
      canSuspendUsers: false,
      canDeleteUsers: false,
      canImpersonateUsers: false,
      canManageSubscriptions: false,
      canProcessRefunds: false,
      canMergeAccounts: false,
      canExportUserData: false,
      canViewUserAnalytics: false
    },
    contentModeration: {
      canReviewContent: false,
      canApproveContent: false,
      canRejectContent: false,
      canFlagContent: false,
      canHandleAppeals: false,
      canConfigureFilters: false,
      canViewModerationQueue: false,
      canAssignModerators: false,
      canExportModerationData: false
    },
    systemAdministration: {
      canViewSystemHealth: false,
      canManageServices: false,
      canConfigureFeatures: false,
      canViewLogs: false,
      canManageIntegrations: false,
      canDeployUpdates: false,
      canManageBackups: false,
      canConfigureSecurity: false
    },
    billing: {
      canViewBilling: false,
      canProcessPayments: false,
      canProcessRefunds: false,
      canManageSubscriptions: false,
      canViewFinancialReports: false,
      canConfigurePricing: false,
      canManageDisputes: false,
      canExportBillingData: false
    },
    analytics: {
      canViewBasicAnalytics: false,
      canViewAdvancedAnalytics: false,
      canExportAnalytics: false,
      canConfigureAnalytics: false,
      canViewCustomReports: false,
      canCreateCustomReports: false,
      canScheduleReports: false,
      canViewRealTimeData: false
    },
    security: {
      canViewSecurityEvents: false,
      canManageSecurityPolicies: false,
      canViewAuditLogs: false,
      canExportAuditData: false,
      canManageAccessControl: false,
      canConfigureCompliance: false,
      canInvestigateIncidents: false,
      canManageSecurityAlerts: false
    }
  };

  // Apply permissions based on admin level
  switch (level) {
    case AdminLevel.L5_SYSTEM_ADMIN:
      return {
        ...basePermissions,
        canManageUsers: true,
        canModerateContent: true,
        canMonitorSystem: true,
        canViewAnalytics: true,
        canAuditSecurity: true,
        canManageSupport: true,
        canManageBilling: true,
        canConfigureSystem: true,
        canManageAdmins: true,
        canExportData: true,
        canManageFeatureFlags: true,
        userManagement: { ...basePermissions.userManagement, canViewUsers: true, canEditUsers: true, canSuspendUsers: true, canDeleteUsers: true, canImpersonateUsers: true, canManageSubscriptions: true, canProcessRefunds: true, canMergeAccounts: true, canExportUserData: true, canViewUserAnalytics: true },
        contentModeration: { ...basePermissions.contentModeration, canReviewContent: true, canApproveContent: true, canRejectContent: true, canFlagContent: true, canHandleAppeals: true, canConfigureFilters: true, canViewModerationQueue: true, canAssignModerators: true, canExportModerationData: true },
        systemAdministration: { ...basePermissions.systemAdministration, canViewSystemHealth: true, canManageServices: true, canConfigureFeatures: true, canViewLogs: true, canManageIntegrations: true, canDeployUpdates: true, canManageBackups: true, canConfigureSecurity: true },
        billing: { ...basePermissions.billing, canViewBilling: true, canProcessPayments: true, canProcessRefunds: true, canManageSubscriptions: true, canViewFinancialReports: true, canConfigurePricing: true, canManageDisputes: true, canExportBillingData: true },
        analytics: { ...basePermissions.analytics, canViewBasicAnalytics: true, canViewAdvancedAnalytics: true, canExportAnalytics: true, canConfigureAnalytics: true, canViewCustomReports: true, canCreateCustomReports: true, canScheduleReports: true, canViewRealTimeData: true },
        security: { ...basePermissions.security, canViewSecurityEvents: true, canManageSecurityPolicies: true, canViewAuditLogs: true, canExportAuditData: true, canManageAccessControl: true, canConfigureCompliance: true, canInvestigateIncidents: true, canManageSecurityAlerts: true }
      };
      
    case AdminLevel.L4_SUPER_ADMIN:
      return {
        ...basePermissions,
        canManageUsers: true,
        canModerateContent: true,
        canMonitorSystem: true,
        canViewAnalytics: true,
        canAuditSecurity: true,
        canManageSupport: true,
        canManageBilling: true,
        canExportData: true,
        userManagement: { ...basePermissions.userManagement, canViewUsers: true, canEditUsers: true, canSuspendUsers: true, canDeleteUsers: true, canManageSubscriptions: true, canProcessRefunds: true, canExportUserData: true, canViewUserAnalytics: true },
        contentModeration: { ...basePermissions.contentModeration, canReviewContent: true, canApproveContent: true, canRejectContent: true, canFlagContent: true, canHandleAppeals: true, canViewModerationQueue: true, canAssignModerators: true },
        billing: { ...basePermissions.billing, canViewBilling: true, canProcessPayments: true, canProcessRefunds: true, canManageSubscriptions: true, canViewFinancialReports: true, canManageDisputes: true },
        analytics: { ...basePermissions.analytics, canViewBasicAnalytics: true, canViewAdvancedAnalytics: true, canExportAnalytics: true, canViewCustomReports: true, canCreateCustomReports: true, canViewRealTimeData: true },
        security: { ...basePermissions.security, canViewSecurityEvents: true, canViewAuditLogs: true, canExportAuditData: true, canInvestigateIncidents: true }
      };
      
    case AdminLevel.L3_ADMIN:
      return {
        ...basePermissions,
        canManageUsers: true,
        canModerateContent: true,
        canMonitorSystem: true,
        canViewAnalytics: true,
        canManageSupport: true,
        userManagement: { ...basePermissions.userManagement, canViewUsers: true, canEditUsers: true, canSuspendUsers: true, canManageSubscriptions: true, canViewUserAnalytics: true },
        contentModeration: { ...basePermissions.contentModeration, canReviewContent: true, canApproveContent: true, canRejectContent: true, canFlagContent: true, canViewModerationQueue: true },
        analytics: { ...basePermissions.analytics, canViewBasicAnalytics: true, canViewAdvancedAnalytics: true, canViewCustomReports: true },
        security: { ...basePermissions.security, canViewSecurityEvents: true, canViewAuditLogs: true }
      };
      
    case AdminLevel.L2_MODERATOR:
      return {
        ...basePermissions,
        canModerateContent: true,
        canViewAnalytics: true,
        canManageSupport: true,
        userManagement: { ...basePermissions.userManagement, canViewUsers: true },
        contentModeration: { ...basePermissions.contentModeration, canReviewContent: true, canApproveContent: true, canRejectContent: true, canViewModerationQueue: true },
        analytics: { ...basePermissions.analytics, canViewBasicAnalytics: true }
      };
      
    case AdminLevel.L1_SUPPORT:
    default:
      return {
        ...basePermissions,
        canManageSupport: true,
        userManagement: { ...basePermissions.userManagement, canViewUsers: true }
      };
  }
};

/**
 * Rate limiting wrapper for authenticated functions
  */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute per user

export const withRateLimit = (maxRequests = RATE_LIMIT_MAX, windowMs = RATE_LIMIT_WINDOW) => {
  return (handler: (request: AuthenticatedRequest) => Promise<any>) => {
    return async (request: AuthenticatedRequest) => {
      const { uid } = request.auth;
      const now = Date.now();
      const key = uid;

      // Clean up expired entries
      for (const [k, v] of rateLimitMap.entries()) {
        if (now > v.resetTime) {
          rateLimitMap.delete(k);
        }
      }

      // Check rate limit
      const userLimit = rateLimitMap.get(key);
      if (userLimit) {
        if (now < userLimit.resetTime) {
          if (userLimit.count >= maxRequests) {
            logger.warn('Rate limit exceeded', { 
              uid, 
              count: userLimit.count, 
              maxRequests,
              resetTime: userLimit.resetTime 
            });
            throw new HttpsError('resource-exhausted', 'Too many requests. Please try again later.');
          }
          userLimit.count++;
        } else {
          // Reset window
          rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
        }
      } else {
        rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
      }

      return handler(request);
    };
  };
};