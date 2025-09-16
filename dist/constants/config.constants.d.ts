export declare const SERVICE_CONFIG: {
    readonly DEFAULT_TIMEOUT: 30000;
    readonly MAX_RETRIES: 3;
    readonly RETRY_DELAY: 1000;
    readonly CIRCUIT_BREAKER_THRESHOLD: 5;
    readonly CIRCUIT_BREAKER_TIMEOUT: 60000;
    readonly HEALTH_CHECK_INTERVAL: 30000;
    readonly METRICS_COLLECTION_INTERVAL: 10000;
    readonly LOG_LEVEL: "info";
};
export declare const STORAGE_CONFIG: {
    readonly DEFAULT_BUCKET: "cvplus-media";
    readonly TEMP_BUCKET: "cvplus-media-temp";
    readonly CDN_DOMAIN: "cdn.cvplus.app";
    readonly MAX_CONCURRENT_UPLOADS: 5;
    readonly CHUNK_SIZE: number;
    readonly MULTIPART_THRESHOLD: number;
    readonly SIGNED_URL_EXPIRY: 3600;
    readonly CACHE_CONTROL: "public, max-age=31536000";
    readonly METADATA_CACHE_TTL: 300;
};
export declare const PROCESSING_CONFIG: {
    readonly DEFAULT_QUALITY: 0.8;
    readonly MAX_CONCURRENT_JOBS: 10;
    readonly JOB_TIMEOUT: 300000;
    readonly PROGRESS_UPDATE_INTERVAL: 1000;
    readonly TEMP_DIR_CLEANUP_INTERVAL: 3600000;
    readonly MAX_TEMP_FILE_AGE: 7200000;
    readonly ENABLE_PERFORMANCE_MONITORING: true;
    readonly ENABLE_DETAILED_LOGGING: false;
};
export declare const CDN_CONFIG: {
    readonly ENABLE_CDN: true;
    readonly CDN_BASE_URL: "https://cdn.cvplus.app";
    readonly CACHE_HEADERS: {
        readonly 'Cache-Control': "public, max-age=31536000";
        readonly Expires: string;
    };
    readonly COMPRESSION_ENABLED: true;
    readonly GZIP_COMPRESSION_LEVEL: 6;
    readonly WEBP_SUPPORT_CHECK: true;
    readonly RESPONSIVE_IMAGES: true;
};
export declare const SECURITY_CONFIG: {
    readonly ENABLE_FILE_VALIDATION: true;
    readonly SCAN_FOR_MALWARE: true;
    readonly BLOCK_SUSPICIOUS_FILES: true;
    readonly MAX_FILE_NAME_LENGTH: 255;
    readonly ALLOWED_CHARACTERS: RegExp;
    readonly STRIP_METADATA: true;
    readonly WATERMARK_PROTECTION: false;
    readonly CONTENT_TYPE_VALIDATION: true;
};
export declare const ANALYTICS_CONFIG: {
    readonly ENABLE_ANALYTICS: true;
    readonly TRACK_PROCESSING_METRICS: true;
    readonly TRACK_USAGE_METRICS: true;
    readonly TRACK_ERROR_METRICS: true;
    readonly RETENTION_PERIOD_DAYS: 90;
    readonly AGGREGATION_INTERVAL: 3600000;
    readonly EXPORT_METRICS_FORMAT: "json";
};
export declare const NOTIFICATION_CONFIG: {
    readonly ENABLE_NOTIFICATIONS: true;
    readonly WEBHOOK_TIMEOUT: 10000;
    readonly MAX_WEBHOOK_RETRIES: 3;
    readonly EMAIL_NOTIFICATIONS: false;
    readonly SLACK_NOTIFICATIONS: false;
    readonly DISCORD_NOTIFICATIONS: false;
    readonly CUSTOM_WEBHOOKS: true;
};
export declare const ENVIRONMENT_CONFIG: {
    readonly DEVELOPMENT: {
        readonly LOG_LEVEL: "debug";
        readonly ENABLE_DETAILED_LOGGING: true;
        readonly CIRCUIT_BREAKER_THRESHOLD: 10;
        readonly ENABLE_ANALYTICS: false;
    };
    readonly STAGING: {
        readonly LOG_LEVEL: "info";
        readonly ENABLE_DETAILED_LOGGING: false;
        readonly CIRCUIT_BREAKER_THRESHOLD: 7;
        readonly ENABLE_ANALYTICS: true;
    };
    readonly PRODUCTION: {
        readonly LOG_LEVEL: "warn";
        readonly ENABLE_DETAILED_LOGGING: false;
        readonly CIRCUIT_BREAKER_THRESHOLD: 5;
        readonly ENABLE_ANALYTICS: true;
    };
};
export declare const FEATURE_FLAGS: {
    readonly ENABLE_BATCH_PROCESSING: true;
    readonly ENABLE_AI_OPTIMIZATION: false;
    readonly ENABLE_BACKGROUND_REMOVAL: false;
    readonly ENABLE_VIDEO_TRANSCODING: true;
    readonly ENABLE_AUDIO_ENHANCEMENT: false;
    readonly ENABLE_SMART_CROPPING: false;
    readonly ENABLE_DUPLICATE_DETECTION: true;
    readonly ENABLE_AUTO_TAGGING: false;
};
export declare const API_CONFIG: {
    readonly BASE_URL: "https://api.cvplus.app";
    readonly API_VERSION: "v1";
    readonly TIMEOUT: 30000;
    readonly MAX_REQUEST_SIZE: number;
    readonly ENABLE_COMPRESSION: true;
    readonly ENABLE_CACHING: true;
    readonly CACHE_TTL: 300;
    readonly CORS_ENABLED: true;
    readonly CORS_ORIGINS: readonly ["https://cvplus.app", "https://www.cvplus.app"];
};
export declare const DEFAULT_MULTIMEDIA_ENVIRONMENT: "production";
export declare const SUPPORTED_ENVIRONMENTS: readonly ["development", "staging", "production"];
export type MultimediaEnvironment = typeof SUPPORTED_ENVIRONMENTS[number];
//# sourceMappingURL=config.constants.d.ts.map