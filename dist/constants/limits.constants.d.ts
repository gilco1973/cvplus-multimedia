export declare const SIZE_UNITS: {
    readonly bytes: 1;
    readonly kb: 1024;
    readonly mb: number;
    readonly gb: number;
    readonly tb: number;
};
export declare const FILE_SIZE_LIMITS: {
    readonly IMAGE: {
        readonly FREE_TIER: number;
        readonly PREMIUM: number;
        readonly ENTERPRISE: number;
    };
    readonly VIDEO: {
        readonly FREE_TIER: number;
        readonly PREMIUM: number;
        readonly ENTERPRISE: number;
    };
    readonly AUDIO: {
        readonly FREE_TIER: number;
        readonly PREMIUM: number;
        readonly ENTERPRISE: number;
    };
};
export declare const DIMENSION_LIMITS: {
    readonly IMAGE: {
        readonly MIN_WIDTH: 50;
        readonly MIN_HEIGHT: 50;
        readonly MAX_WIDTH_FREE: 4096;
        readonly MAX_HEIGHT_FREE: 4096;
        readonly MAX_WIDTH_PREMIUM: 8192;
        readonly MAX_HEIGHT_PREMIUM: 8192;
        readonly MAX_WIDTH_ENTERPRISE: 16384;
        readonly MAX_HEIGHT_ENTERPRISE: 16384;
    };
    readonly VIDEO: {
        readonly MIN_WIDTH: 240;
        readonly MIN_HEIGHT: 180;
        readonly MAX_WIDTH_FREE: 1920;
        readonly MAX_HEIGHT_FREE: 1080;
        readonly MAX_WIDTH_PREMIUM: 3840;
        readonly MAX_HEIGHT_PREMIUM: 2160;
        readonly MAX_WIDTH_ENTERPRISE: 7680;
        readonly MAX_HEIGHT_ENTERPRISE: 4320;
    };
};
export declare const DURATION_LIMITS: {
    readonly VIDEO: {
        readonly MIN_DURATION: 1;
        readonly MAX_DURATION_FREE: 300;
        readonly MAX_DURATION_PREMIUM: 1800;
        readonly MAX_DURATION_ENTERPRISE: 7200;
    };
    readonly AUDIO: {
        readonly MIN_DURATION: 1;
        readonly MAX_DURATION_FREE: 600;
        readonly MAX_DURATION_PREMIUM: 3600;
        readonly MAX_DURATION_ENTERPRISE: 14400;
    };
};
export declare const PROCESSING_LIMITS: {
    readonly CONCURRENT_JOBS: {
        readonly FREE_TIER: 2;
        readonly PREMIUM: 5;
        readonly ENTERPRISE: 20;
    };
    readonly DAILY_PROCESSING: {
        readonly FREE_TIER: 50;
        readonly PREMIUM: 500;
        readonly ENTERPRISE: 10000;
    };
    readonly MONTHLY_STORAGE: {
        readonly FREE_TIER: number;
        readonly PREMIUM: number;
        readonly ENTERPRISE: number;
    };
};
export declare const RATE_LIMITS: {
    readonly REQUESTS_PER_MINUTE: {
        readonly FREE_TIER: 30;
        readonly PREMIUM: 120;
        readonly ENTERPRISE: 600;
    };
    readonly REQUESTS_PER_HOUR: {
        readonly FREE_TIER: 300;
        readonly PREMIUM: 2000;
        readonly ENTERPRISE: 20000;
    };
    readonly REQUESTS_PER_DAY: {
        readonly FREE_TIER: 1000;
        readonly PREMIUM: 10000;
        readonly ENTERPRISE: 100000;
    };
};
export declare const BATCH_LIMITS: {
    readonly MAX_BATCH_SIZE: {
        readonly FREE_TIER: 10;
        readonly PREMIUM: 50;
        readonly ENTERPRISE: 500;
    };
    readonly MAX_BATCH_SIZE_MB: {
        readonly FREE_TIER: number;
        readonly PREMIUM: number;
        readonly ENTERPRISE: number;
    };
};
export declare const QUALITY_LIMITS: {
    readonly MAX_UPSCALE_FACTOR: {
        readonly FREE_TIER: 2;
        readonly PREMIUM: 4;
        readonly ENTERPRISE: 8;
    };
    readonly MIN_QUALITY_SETTING: 0.1;
    readonly MAX_QUALITY_SETTING: 1;
    readonly DEFAULT_QUALITY_SETTING: 0.8;
};
export declare const VALIDATION_THRESHOLDS: {
    readonly MIN_IMAGE_PIXELS: 2500;
    readonly MAX_ASPECT_RATIO: 20;
    readonly MIN_ASPECT_RATIO: 0.05;
    readonly MAX_COLOR_DEPTH: 16;
    readonly MIN_COLOR_DEPTH: 1;
    readonly MAX_FRAME_RATE: 120;
    readonly MIN_FRAME_RATE: 1;
};
//# sourceMappingURL=limits.constants.d.ts.map