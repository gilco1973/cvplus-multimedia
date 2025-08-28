/**
 * Media processing constants for CVPlus multimedia module
 */
import { MediaType } from '../types';
export declare const MEDIA_TYPES: Record<string, MediaType>;
export declare const SUPPORTED_IMAGE_FORMATS: readonly ["jpeg", "jpg", "png", "webp", "avif", "gif", "svg", "bmp", "tiff", "heic", "heif"];
export declare const SUPPORTED_VIDEO_FORMATS: readonly ["mp4", "webm", "avi", "mov", "mkv", "flv", "m4v", "ogv", "3gp", "wmv"];
export declare const SUPPORTED_AUDIO_FORMATS: readonly ["mp3", "aac", "ogg", "wav", "flac", "m4a", "wma", "opus", "aiff", "alac"];
export declare const QUALITY_LEVELS: {
    readonly SOURCE: "source";
    readonly HIGH: "high";
    readonly MEDIUM: "medium";
    readonly LOW: "low";
    readonly THUMBNAIL: "thumbnail";
};
export declare const QUALITY_SCORES: {
    readonly source: 100;
    readonly high: 85;
    readonly medium: 70;
    readonly low: 50;
    readonly thumbnail: 30;
};
export declare const IMAGE_MIME_TYPES: {
    readonly jpeg: "image/jpeg";
    readonly jpg: "image/jpeg";
    readonly png: "image/png";
    readonly webp: "image/webp";
    readonly avif: "image/avif";
    readonly gif: "image/gif";
    readonly svg: "image/svg+xml";
    readonly bmp: "image/bmp";
    readonly tiff: "image/tiff";
    readonly heic: "image/heic";
    readonly heif: "image/heif";
};
export declare const IMAGE_QUALITY_SETTINGS: {
    readonly source: {
        readonly quality: 100;
        readonly progressive: false;
    };
    readonly high: {
        readonly quality: 90;
        readonly progressive: true;
    };
    readonly medium: {
        readonly quality: 80;
        readonly progressive: true;
    };
    readonly low: {
        readonly quality: 65;
        readonly progressive: true;
    };
    readonly thumbnail: {
        readonly quality: 50;
        readonly progressive: false;
    };
};
export declare const RESPONSIVE_BREAKPOINTS: {
    readonly MOBILE: {
        readonly width: 480;
        readonly name: "mobile";
    };
    readonly TABLET: {
        readonly width: 768;
        readonly name: "tablet";
    };
    readonly DESKTOP: {
        readonly width: 1024;
        readonly name: "desktop";
    };
    readonly LARGE: {
        readonly width: 1440;
        readonly name: "large";
    };
    readonly XLARGE: {
        readonly width: 1920;
        readonly name: "xlarge";
    };
};
export declare const THUMBNAIL_SIZES: {
    readonly SMALL: {
        readonly width: 150;
        readonly height: 150;
    };
    readonly MEDIUM: {
        readonly width: 300;
        readonly height: 300;
    };
    readonly LARGE: {
        readonly width: 600;
        readonly height: 600;
    };
};
export declare const VIDEO_MIME_TYPES: {
    readonly mp4: "video/mp4";
    readonly webm: "video/webm";
    readonly avi: "video/x-msvideo";
    readonly mov: "video/quicktime";
    readonly mkv: "video/x-matroska";
    readonly flv: "video/x-flv";
    readonly m4v: "video/x-m4v";
    readonly ogv: "video/ogg";
    readonly '3gp': "video/3gpp";
    readonly wmv: "video/x-ms-wmv";
};
export declare const VIDEO_CODECS: {
    readonly H264: "h264";
    readonly H265: "h265";
    readonly VP8: "vp8";
    readonly VP9: "vp9";
    readonly AV1: "av1";
    readonly XVID: "xvid";
};
export declare const AUDIO_CODECS: {
    readonly AAC: "aac";
    readonly MP3: "mp3";
    readonly OPUS: "opus";
    readonly VORBIS: "vorbis";
    readonly AC3: "ac3";
    readonly FLAC: "flac";
};
export declare const VIDEO_RESOLUTIONS: {
    readonly SD_480P: {
        readonly width: 854;
        readonly height: 480;
        readonly name: "480p";
    };
    readonly HD_720P: {
        readonly width: 1280;
        readonly height: 720;
        readonly name: "720p";
    };
    readonly FHD_1080P: {
        readonly width: 1920;
        readonly height: 1080;
        readonly name: "1080p";
    };
    readonly QHD_1440P: {
        readonly width: 2560;
        readonly height: 1440;
        readonly name: "1440p";
    };
    readonly UHD_4K: {
        readonly width: 3840;
        readonly height: 2160;
        readonly name: "4K";
    };
};
export declare const VIDEO_BITRATES: {
    readonly low: {
        readonly '480p': 1000000;
        readonly '720p': 2500000;
        readonly '1080p': 5000000;
    };
    readonly medium: {
        readonly '480p': 1500000;
        readonly '720p': 4000000;
        readonly '1080p': 8000000;
    };
    readonly high: {
        readonly '480p': 2000000;
        readonly '720p': 6000000;
        readonly '1080p': 12000000;
    };
};
export declare const VIDEO_FRAME_RATES: {
    readonly CINEMATIC: 24;
    readonly STANDARD: 30;
    readonly SMOOTH: 60;
    readonly GAMING: 120;
};
export declare const AUDIO_MIME_TYPES: {
    readonly mp3: "audio/mpeg";
    readonly aac: "audio/aac";
    readonly ogg: "audio/ogg";
    readonly wav: "audio/wav";
    readonly flac: "audio/flac";
    readonly m4a: "audio/mp4";
    readonly wma: "audio/x-ms-wma";
    readonly opus: "audio/opus";
    readonly aiff: "audio/aiff";
    readonly alac: "audio/x-alac";
};
export declare const AUDIO_BITRATES: {
    readonly low: {
        readonly mp3: 128000;
        readonly aac: 96000;
        readonly ogg: 112000;
    };
    readonly medium: {
        readonly mp3: 192000;
        readonly aac: 128000;
        readonly ogg: 160000;
    };
    readonly high: {
        readonly mp3: 320000;
        readonly aac: 256000;
        readonly ogg: 256000;
    };
};
export declare const AUDIO_SAMPLE_RATES: {
    readonly PHONE: 8000;
    readonly AM_RADIO: 11025;
    readonly VOICE: 22050;
    readonly CD_QUALITY: 44100;
    readonly DVD_QUALITY: 48000;
    readonly STUDIO: 96000;
    readonly HIGH_RES: 192000;
};
export declare const AUDIO_CHANNELS: {
    readonly MONO: 1;
    readonly STEREO: 2;
    readonly SURROUND_5_1: 6;
    readonly SURROUND_7_1: 8;
};
export declare const COMPRESSION_ALGORITHMS: {
    readonly GZIP: "gzip";
    readonly BROTLI: "brotli";
    readonly DEFLATE: "deflate";
    readonly LZ4: "lz4";
    readonly ZSTD: "zstd";
};
export declare const COMPRESSION_LEVELS: {
    readonly NONE: 0;
    readonly FAST: 1;
    readonly BALANCED: 6;
    readonly BEST: 9;
};
export declare const CACHE_DURATIONS: {
    readonly VERY_SHORT: 300;
    readonly SHORT: 1800;
    readonly MEDIUM: 3600;
    readonly LONG: 86400;
    readonly VERY_LONG: 604800;
    readonly PERMANENT: 31536000;
};
export declare const CACHE_KEYS: {
    readonly PROCESSED_IMAGE: "processed:image:";
    readonly PROCESSED_VIDEO: "processed:video:";
    readonly PROCESSED_AUDIO: "processed:audio:";
    readonly THUMBNAIL: "thumbnail:";
    readonly METADATA: "metadata:";
    readonly WAVEFORM: "waveform:";
};
export declare const FILE_SIZE_UNITS: {
    readonly BYTES: "bytes";
    readonly KB: "kb";
    readonly MB: "mb";
    readonly GB: "gb";
    readonly TB: "tb";
};
export declare const FILE_SIZE_MULTIPLIERS: {
    readonly bytes: 1;
    readonly kb: 1024;
    readonly mb: number;
    readonly gb: number;
    readonly tb: number;
};
export declare const PROCESSING_STAGES: {
    readonly VALIDATION: "validation";
    readonly PREPROCESSING: "preprocessing";
    readonly PROCESSING: "processing";
    readonly POSTPROCESSING: "postprocessing";
    readonly OPTIMIZATION: "optimization";
    readonly OUTPUT: "output-generation";
    readonly CLEANUP: "cleanup";
};
export declare const PROCESSING_STATUS: {
    readonly QUEUED: "queued";
    readonly PROCESSING: "processing";
    readonly COMPLETED: "completed";
    readonly FAILED: "failed";
    readonly CANCELLED: "cancelled";
};
export declare const COLOR_SPACES: {
    readonly SRGB: "srgb";
    readonly RGB: "rgb";
    readonly CMYK: "cmyk";
    readonly LAB: "lab";
    readonly GREY16: "grey16";
    readonly REC2020: "rec2020";
    readonly P3: "p3";
};
export declare const COLOR_PROFILES: {
    readonly SRGB: "sRGB IEC61966-2.1";
    readonly ADOBE_RGB: "Adobe RGB (1998)";
    readonly PROPHOTO_RGB: "ProPhoto RGB";
    readonly REC2020: "Rec. 2020";
    readonly DCI_P3: "DCI-P3";
};
export declare const EXIF_ORIENTATIONS: {
    readonly 1: "Normal";
    readonly 2: "Flip horizontal";
    readonly 3: "Rotate 180°";
    readonly 4: "Flip vertical";
    readonly 5: "Rotate 90° CW + flip horizontal";
    readonly 6: "Rotate 90° CW";
    readonly 7: "Rotate 90° CCW + flip horizontal";
    readonly 8: "Rotate 90° CCW";
};
export declare const GPS_COORDINATE_FORMATS: {
    readonly DECIMAL: "decimal";
    readonly DMS: "degrees-minutes-seconds";
    readonly DM: "degrees-minutes";
};
export declare const STREAMING_PROTOCOLS: {
    readonly HLS: "hls";
    readonly DASH: "dash";
    readonly SMOOTH: "smooth";
    readonly PROGRESSIVE: "progressive";
};
export declare const STREAMING_SEGMENT_DURATIONS: {
    readonly SHORT: 2;
    readonly STANDARD: 6;
    readonly LONG: 10;
};
export declare const DEVICE_PIXEL_RATIOS: {
    readonly STANDARD: 1;
    readonly RETINA: 2;
    readonly SUPER_RETINA: 3;
    readonly ULTRA_RETINA: 4;
};
export declare const TIME_UNITS: {
    readonly MILLISECONDS: "ms";
    readonly SECONDS: "s";
    readonly MINUTES: "min";
    readonly HOURS: "h";
    readonly DAYS: "d";
};
export declare const TIME_MULTIPLIERS: {
    readonly ms: 1;
    readonly s: 1000;
    readonly min: number;
    readonly h: number;
    readonly d: number;
};
export declare const PROCESSING_PRIORITIES: {
    readonly LOW: 1;
    readonly NORMAL: 5;
    readonly HIGH: 8;
    readonly URGENT: 10;
};
export declare const QUEUE_PRIORITIES: {
    readonly BACKGROUND: 1;
    readonly STANDARD: 3;
    readonly INTERACTIVE: 5;
    readonly REALTIME: 8;
    readonly CRITICAL: 10;
};
export declare const RETRY_DELAYS: {
    readonly IMMEDIATE: 0;
    readonly VERY_SHORT: 1000;
    readonly SHORT: 5000;
    readonly MEDIUM: 30000;
    readonly LONG: 300000;
};
export declare const MAX_RETRY_ATTEMPTS: {
    readonly NETWORK: 3;
    readonly PROCESSING: 2;
    readonly STORAGE: 3;
    readonly TRANSIENT: 5;
    readonly PERMANENT: 0;
};
export declare const MAGIC_NUMBERS: {
    readonly JPEG: readonly [255, 216, 255];
    readonly PNG: readonly [137, 80, 78, 71];
    readonly GIF87A: readonly [71, 73, 70, 56, 55, 97];
    readonly GIF89A: readonly [71, 73, 70, 56, 57, 97];
    readonly WEBP: readonly [82, 73, 70, 70];
    readonly BMP: readonly [66, 77];
    readonly MP4: readonly [0, 0, 0, 24, 102, 116, 121, 112];
    readonly AVI: readonly [82, 73, 70, 70];
    readonly MOV: readonly [0, 0, 0, 20, 102, 116, 121, 112];
    readonly WEBM: readonly [26, 69, 223, 163];
    readonly MP3: readonly [73, 68, 51];
    readonly MP3_FRAME: readonly [255, 251];
    readonly WAV: readonly [82, 73, 70, 70];
    readonly OGG: readonly [79, 103, 103, 83];
    readonly FLAC: readonly [102, 76, 97, 67];
};
export declare const HTTP_STATUS_CODES: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly ACCEPTED: 202;
    readonly NO_CONTENT: 204;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly METHOD_NOT_ALLOWED: 405;
    readonly CONFLICT: 409;
    readonly PAYLOAD_TOO_LARGE: 413;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly UNPROCESSABLE_ENTITY: 422;
    readonly TOO_MANY_REQUESTS: 429;
    readonly INTERNAL_SERVER_ERROR: 500;
    readonly NOT_IMPLEMENTED: 501;
    readonly BAD_GATEWAY: 502;
    readonly SERVICE_UNAVAILABLE: 503;
    readonly GATEWAY_TIMEOUT: 504;
};
export declare const PROCESSING_EVENTS: {
    readonly JOB_CREATED: "job:created";
    readonly JOB_STARTED: "job:started";
    readonly JOB_PROGRESS: "job:progress";
    readonly JOB_COMPLETED: "job:completed";
    readonly JOB_FAILED: "job:failed";
    readonly JOB_CANCELLED: "job:cancelled";
    readonly STAGE_STARTED: "stage:started";
    readonly STAGE_COMPLETED: "stage:completed";
    readonly STAGE_FAILED: "stage:failed";
    readonly UPLOAD_STARTED: "upload:started";
    readonly UPLOAD_PROGRESS: "upload:progress";
    readonly UPLOAD_COMPLETED: "upload:completed";
    readonly UPLOAD_FAILED: "upload:failed";
    readonly DOWNLOAD_STARTED: "download:started";
    readonly DOWNLOAD_PROGRESS: "download:progress";
    readonly DOWNLOAD_COMPLETED: "download:completed";
    readonly DOWNLOAD_FAILED: "download:failed";
};
export declare const DEFAULT_VALUES: {
    readonly PROCESSING_TIMEOUT: 300000;
    readonly CHUNK_SIZE: number;
    readonly MAX_CONCURRENT_OPERATIONS: 3;
    readonly DEFAULT_QUALITY: "medium";
    readonly MIN_QUALITY_SCORE: 50;
    readonly MAX_QUALITY_SCORE: 100;
    readonly DEFAULT_CACHE_TTL: 3600;
    readonly DEFAULT_RETRY_ATTEMPTS: 3;
    readonly DEFAULT_RETRY_DELAY: 5000;
    readonly MAX_FILE_SIZE: number;
    readonly MAX_IMAGE_DIMENSION: 8192;
    readonly MAX_VIDEO_DURATION: 3600;
    readonly MAX_AUDIO_DURATION: 7200;
    readonly MAX_PROCESSING_JOBS: 10;
    readonly MAX_QUEUE_SIZE: 1000;
    readonly WORKER_TIMEOUT: 600000;
    readonly THUMBNAIL_SIZE: {
        readonly width: 300;
        readonly height: 300;
    };
    readonly THUMBNAIL_QUALITY: 80;
    readonly DEFAULT_VIDEO_BITRATE: 2500000;
    readonly DEFAULT_FRAME_RATE: 30;
    readonly DEFAULT_RESOLUTION: {
        readonly width: 1280;
        readonly height: 720;
        readonly name: "720p";
    };
    readonly DEFAULT_AUDIO_BITRATE: 192000;
    readonly DEFAULT_SAMPLE_RATE: 44100;
    readonly DEFAULT_AUDIO_CHANNELS: 2;
};
export declare const FEATURE_FLAGS: {
    readonly ENABLE_GPU_ACCELERATION: "enable_gpu_acceleration";
    readonly ENABLE_ML_OPTIMIZATION: "enable_ml_optimization";
    readonly ENABLE_ADVANCED_PROCESSING: "enable_advanced_processing";
    readonly ENABLE_REAL_TIME_PROCESSING: "enable_real_time_processing";
    readonly ENABLE_BATCH_PROCESSING: "enable_batch_processing";
    readonly ENABLE_CDN_INTEGRATION: "enable_cdn_integration";
    readonly ENABLE_STREAMING: "enable_streaming";
    readonly ENABLE_ANALYTICS: "enable_analytics";
    readonly ENABLE_MONITORING: "enable_monitoring";
    readonly ENABLE_CACHING: "enable_caching";
};
export declare const ENVIRONMENTS: {
    readonly DEVELOPMENT: "development";
    readonly STAGING: "staging";
    readonly PRODUCTION: "production";
    readonly TESTING: "testing";
};
export declare const LOG_LEVELS: {
    readonly DEBUG: "debug";
    readonly INFO: "info";
    readonly WARN: "warn";
    readonly ERROR: "error";
    readonly FATAL: "fatal";
};
//# sourceMappingURL=media.constants.d.ts.map