/**
 * Enhanced Analytics Types
 *
 * Analytics and tracking types for enhanced CV features.
 * Extracted from enhanced-models.ts to maintain <200 line compliance.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
/**
 * Public CV profile data
 */
export interface PublicCVProfile {
    id: string;
    userId: string;
    jobId: string;
    slug: string;
    isPublic: boolean;
    seoTitle?: string;
    seoDescription?: string;
    metaTags?: Record<string, string>;
    customDomain?: string;
    publicUrl?: string;
    allowContactForm?: boolean;
    showAnalytics?: boolean;
    contactEmail?: string;
    parsedCV?: any;
    features?: Record<string, any>;
    template?: string;
    qrCodeUrl?: string;
    analytics: PublicProfileAnalytics;
    socialSharing: {
        enabled: boolean;
        platforms: string[];
        customMessage?: string;
    };
    privacySettings?: {
        enabled?: boolean;
        level?: 'public' | 'private' | 'restricted';
        maskingRules?: {
            maskEmail?: boolean;
            maskPhone?: boolean;
            maskAddress?: boolean;
            name?: boolean;
        };
        publicEmail?: boolean;
        publicPhone?: boolean;
    };
    additionalInfo?: {
        availabilityCalendar?: any;
        testimonials?: any[];
        personalityProfile?: any;
        skillsVisualization?: any;
        certifications?: any[];
        contactEmail?: string;
    };
    createdAt: Date;
    updatedAt: Date;
    lastViewedAt?: Date;
}
/**
 * Public CV Profile analytics (summary level)
 */
export interface PublicProfileAnalytics {
    totalViews: number;
    uniqueVisitors: number;
    averageTimeOnPage: number;
    bounceRate: number;
    featureUsage: Record<string, number>;
    conversionRate: number;
    lastAnalyticsUpdate: Date;
    views?: number;
    qrScans?: number;
    contactSubmissions?: number;
    lastViewedAt?: Date | null;
}
/**
 * Feature analytics tracking (detailed interactions)
 */
export interface FeatureAnalytics {
    jobId: string;
    featureId: string;
    userId?: string;
    interactions: FeatureInteraction[];
    aggregates: {
        totalInteractions: number;
        uniqueUsers: number;
        averageEngagementTime: number;
        lastInteraction: Date;
    };
    totalViews?: number;
    uniqueVisitors?: number;
    averageTimeOnPage?: number;
    bounceRate?: number;
    featureUsage?: Record<string, number>;
    conversionRate?: number;
    lastAnalyticsUpdate?: Date;
    views?: number;
    qrScans?: number;
    contactSubmissions?: number;
}
/**
 * Feature interaction tracking
 */
export interface FeatureInteraction {
    type: string;
    timestamp: Date;
    duration?: number;
    metadata?: Record<string, any>;
    userAgent?: string;
    ipHash?: string;
    featureId?: string;
    userId?: string;
    jobId?: string;
    interactionType?: 'view' | 'click' | 'download' | 'share' | 'contact';
}
/**
 * Contact form submission data
 */
export interface ContactFormSubmission {
    id: string;
    jobId: string;
    name: string;
    email: string;
    subject?: string;
    message: string;
    phoneNumber?: string;
    company?: string;
    linkedinUrl?: string;
    interestedServices?: string[];
    preferredContactMethod: 'email' | 'phone' | 'linkedin';
    isRead: boolean;
    isReplied: boolean;
    submittedAt: Date;
    ipAddress?: string;
    userAgent?: string;
    source: 'cv' | 'qr' | 'direct';
    timestamp?: Date;
    status?: string;
}
/**
 * QR code scan tracking
 */
export interface QRCodeScan {
    id: string;
    jobId: string;
    qrType: 'primary' | 'contact' | 'chat' | 'menu';
    scannedAt: Date;
    ipAddress?: string;
    userAgent?: string;
    location?: {
        country: string;
        city: string;
        coordinates?: {
            lat: number;
            lng: number;
        };
    };
    device: {
        type: 'mobile' | 'tablet' | 'desktop';
        os?: string;
        browser?: string;
    };
    converted: boolean;
    conversionType?: 'view' | 'contact' | 'chat' | 'download';
    scanId?: string;
    timestamp?: Date;
}
//# sourceMappingURL=enhanced-analytics.d.ts.map