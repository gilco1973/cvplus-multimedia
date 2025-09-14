/**
 * CVPlus Multimedia Module - Type Definitions (Minimal Build)
 * 
 * Basic type exports without external dependencies.
 * 
 * @author Gil Klainert
 * @version 1.0.0
 */

// Base media types - export first to avoid conflicts
export type MediaType = 'image' | 'video' | 'audio' | 'application/octet-stream' | 'unknown';
export type QualityLevel = 'source' | 'high' | 'medium' | 'low' | 'thumbnail';
export type ProcessingStage = 'validation' | 'upload' | 'preprocessing' | 'processing' | 'postprocessing' | 'optimization' | 'delivery' | 'complete' | 'error';
export type ProcessingPriority = 1 | 2 | 3 | 4 | 5;

// Re-export key types from each module
export type {
  MediaFile,
  ProcessedMedia,
  FileFormat,
  ImageFormat,
  VideoFormat,
  AudioFormat,
  ProcessingStatus
} from './media.types';

export type {
  ProcessedImage,
  ImageProcessingOptions
} from './image.types';

export type {
  ProcessedVideo,
  VideoProcessingOptions,
  VideoTranscodingOptions,
  VideoAnalysisResult,
  VideoThumbnailOptions
} from './video.types';

export type {
  ProcessedAudio,
  AudioProcessingOptions
} from './audio.types';

export type {
  StorageProvider,
  CDNProvider,
  StorageClass,
  UploadResult,
  UploadProgress,
  MediaMetadata
} from './storage.types';

export type {
  ProcessingMode,
  ProcessingJobType,
  ProcessingOptions,
  ProcessingResult,
  CircuitBreakerConfig,
  RetryConfig,
  ServiceConfig
} from './processing.types';

// Config types
export type {
  MultimediaModuleConfig as MultimediaConfig,
  VideoOptimizationConfig as VideoConfig,
  AudioOptimizationConfig as AudioConfig,
  ImageOptimizationConfig as ImageConfig,
  StorageModuleConfig as StorageConfig,
  ProcessingModuleConfig as ProcessingConfig,
  CDNModuleConfig as CDNConfig
} from './config.types';

// Error types
export type {
  MultimediaError,
  ProcessingError,
  ValidationError,
  StorageError
} from './error.types';

// Job types
export type {
  QueueStatus as JobStatus
} from './job.types';

export type {
  ProcessingJobType as JobType,
  ProcessingJob as Job,
  ProcessingJobResult as JobResult
} from './processing.types';

// Auth types (local definitions for multimedia module autonomy)
export interface AuthenticatedUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  hasCalendarPermissions?: boolean;
  displayName?: string;
  photoURL?: string;
  role?: string;
}

// Auth utility functions
import { HttpsError, CallableRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';

export const requireGoogleAuth = async (request: CallableRequest): Promise<AuthenticatedUser> => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }

  try {
    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(request.auth.token);
    
    // Get user record for additional information
    const userRecord = await admin.auth().getUser(decodedToken.uid);
    
    return {
      uid: decodedToken.uid,
      email: decodedToken.email || '',
      emailVerified: decodedToken.email_verified || false,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      hasCalendarPermissions: false // Default, can be enhanced based on custom claims
    };
  } catch (error) {
    throw new HttpsError('unauthenticated', 'Invalid authentication token');
  }
};