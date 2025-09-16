export declare const IMAGE_QUALITY: {
    readonly LOW: 0.3;
    readonly MEDIUM: 0.6;
    readonly HIGH: 0.8;
    readonly MAXIMUM: 0.95;
};
export type ImageQuality = typeof IMAGE_QUALITY[keyof typeof IMAGE_QUALITY];
export declare const VIDEO_QUALITY: {
    readonly SD: {
        readonly width: 640;
        readonly height: 480;
        readonly bitrate: 1000000;
        readonly quality: "sd";
    };
    readonly HD: {
        readonly width: 1280;
        readonly height: 720;
        readonly bitrate: 2500000;
        readonly quality: "hd";
    };
    readonly FULL_HD: {
        readonly width: 1920;
        readonly height: 1080;
        readonly bitrate: 5000000;
        readonly quality: "full_hd";
    };
    readonly '4K': {
        readonly width: 3840;
        readonly height: 2160;
        readonly bitrate: 15000000;
        readonly quality: "4k";
    };
};
export declare const AUDIO_QUALITY: {
    readonly LOW: {
        readonly bitrate: 64000;
        readonly sampleRate: 22050;
        readonly quality: "low";
    };
    readonly MEDIUM: {
        readonly bitrate: 128000;
        readonly sampleRate: 44100;
        readonly quality: "medium";
    };
    readonly HIGH: {
        readonly bitrate: 192000;
        readonly sampleRate: 48000;
        readonly quality: "high";
    };
    readonly LOSSLESS: {
        readonly bitrate: 0;
        readonly sampleRate: 48000;
        readonly quality: "lossless";
    };
};
export declare const COMPRESSION_RATIOS: {
    readonly NONE: 1;
    readonly LIGHT: 0.8;
    readonly MEDIUM: 0.6;
    readonly AGGRESSIVE: 0.4;
    readonly MAXIMUM: 0.2;
};
export type CompressionRatio = typeof COMPRESSION_RATIOS[keyof typeof COMPRESSION_RATIOS];
export declare const QUALITY_PRESETS: {
    readonly WEB_OPTIMIZED: {
        readonly image: 0.6;
        readonly video: {
            readonly width: 1280;
            readonly height: 720;
            readonly bitrate: 2500000;
            readonly quality: "hd";
        };
        readonly audio: {
            readonly bitrate: 128000;
            readonly sampleRate: 44100;
            readonly quality: "medium";
        };
        readonly compression: 0.6;
    };
    readonly PRINT_QUALITY: {
        readonly image: 0.95;
        readonly video: {
            readonly width: 1920;
            readonly height: 1080;
            readonly bitrate: 5000000;
            readonly quality: "full_hd";
        };
        readonly audio: {
            readonly bitrate: 192000;
            readonly sampleRate: 48000;
            readonly quality: "high";
        };
        readonly compression: 0.8;
    };
    readonly MOBILE_OPTIMIZED: {
        readonly image: 0.6;
        readonly video: {
            readonly width: 640;
            readonly height: 480;
            readonly bitrate: 1000000;
            readonly quality: "sd";
        };
        readonly audio: {
            readonly bitrate: 64000;
            readonly sampleRate: 22050;
            readonly quality: "low";
        };
        readonly compression: 0.4;
    };
    readonly ARCHIVE_QUALITY: {
        readonly image: 0.95;
        readonly video: {
            readonly width: 3840;
            readonly height: 2160;
            readonly bitrate: 15000000;
            readonly quality: "4k";
        };
        readonly audio: {
            readonly bitrate: 0;
            readonly sampleRate: 48000;
            readonly quality: "lossless";
        };
        readonly compression: 1;
    };
};
export declare const QUALITY_METRICS: {
    readonly PSNR_THRESHOLDS: {
        readonly EXCELLENT: 40;
        readonly GOOD: 35;
        readonly ACCEPTABLE: 30;
        readonly POOR: 25;
    };
    readonly SSIM_THRESHOLDS: {
        readonly EXCELLENT: 0.95;
        readonly GOOD: 0.9;
        readonly ACCEPTABLE: 0.8;
        readonly POOR: 0.7;
    };
    readonly FILE_SIZE_REDUCTION_TARGETS: {
        readonly AGGRESSIVE: 0.3;
        readonly BALANCED: 0.5;
        readonly CONSERVATIVE: 0.7;
    };
};
//# sourceMappingURL=quality.constants.d.ts.map