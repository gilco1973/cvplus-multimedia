/**
 * CVPlus Multimedia Module - Type Definitions (Minimal Build)
 * 
 * Basic type exports without external dependencies.
 * 
 * @author Gil Klainert
 * @version 1.0.0
 */

// Base media types - export first to avoid conflicts
export type MediaType = 'image' | 'video' | 'audio';
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
  VideoProcessingOptions
} from './video.types';

export type {
  ProcessedAudio,
  AudioProcessingOptions
} from './audio.types';

export type {
  StorageProvider,
  CDNProvider
} from './storage.types';

export type {
  ProcessingMode,
  ProcessingJobType
} from './processing.types';