// @ts-ignore - Export conflicts/**
 * CVPlus Multimedia Module - Constants Export
 * 
 * Main export file for multimedia processing constants.
 * 
 * @author Gil Klainert
 * @version 1.0.0
 */

// Export constants but not types to avoid conflicts with types/index.ts
export {
  MEDIA_TYPES,
  SUPPORTED_IMAGE_FORMATS,
  SUPPORTED_VIDEO_FORMATS,
  SUPPORTED_AUDIO_FORMATS,
  QUALITY_LEVELS,
  QUALITY_SCORES,
  IMAGE_MIME_TYPES,
  IMAGE_QUALITY_SETTINGS,
  RESPONSIVE_BREAKPOINTS,
  THUMBNAIL_SIZES,
  VIDEO_MIME_TYPES,
  VIDEO_CODECS,
  AUDIO_CODECS,
  VIDEO_RESOLUTIONS,
  VIDEO_BITRATES,
  VIDEO_FRAME_RATES,
  AUDIO_MIME_TYPES,
  AUDIO_BITRATES,
  AUDIO_SAMPLE_RATES,
  AUDIO_CHANNELS,
  COMPRESSION_ALGORITHMS,
  COMPRESSION_LEVELS,
  CACHE_DURATIONS,
  CACHE_KEYS,
  FILE_SIZE_UNITS,
  FILE_SIZE_MULTIPLIERS,
  PROCESSING_STAGES,
  PROCESSING_STATUS,
  COLOR_SPACES,
  COLOR_PROFILES,
  EXIF_ORIENTATIONS,
  GPS_COORDINATE_FORMATS,
  STREAMING_PROTOCOLS,
  STREAMING_SEGMENT_DURATIONS,
  DEVICE_PIXEL_RATIOS,
  TIME_UNITS,
  TIME_MULTIPLIERS,
  PROCESSING_PRIORITIES,
  QUEUE_PRIORITIES,
  RETRY_DELAYS,
  MAX_RETRY_ATTEMPTS,
  MAGIC_NUMBERS,
  HTTP_STATUS_CODES,
  PROCESSING_EVENTS,
  DEFAULT_VALUES,
  FEATURE_FLAGS,
  ENVIRONMENTS,
  LOG_LEVELS,
} from './media.constants';

export * from './processing.constants';
export * from './quality.constants';
export * from './formats.constants';
export * from './limits.constants';
export * from './errors.constants';
export * from './config.constants';