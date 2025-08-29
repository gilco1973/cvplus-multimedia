/**
 * Utilities Index
 *
 * Exports all utility functions and classes for the CVPlus Multimedia Module.
 *
 * @author Gil Klainert
 * @version 1.0.0 - CVPlus Multimedia Module
 */
export { FileUtils } from './FileUtils';
export { MediaUtils } from './MediaUtils';
export type { MediaMetadata, MediaValidationRules } from './MediaUtils';
export declare const UTIL_CONSTANTS: {
    readonly MAX_FILE_SIZE: {
        readonly IMAGE: number;
        readonly VIDEO: number;
        readonly AUDIO: number;
        readonly DOCUMENT: number;
    };
    readonly MAX_DIMENSIONS: {
        readonly WIDTH: 8000;
        readonly HEIGHT: 8000;
    };
    readonly MIN_DIMENSIONS: {
        readonly WIDTH: 1;
        readonly HEIGHT: 1;
    };
    readonly MAX_VIDEO_DURATION: 7200;
    readonly MIN_VIDEO_DURATION: 1;
    readonly MAX_AUDIO_DURATION: 14400;
    readonly MIN_AUDIO_DURATION: 1;
    readonly QUALITY_LEVELS: {
        readonly LOW: 60;
        readonly MEDIUM: 80;
        readonly HIGH: 95;
        readonly LOSSLESS: 100;
    };
    readonly THUMBNAIL_SIZES: {
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
    readonly SUPPORTED_FORMATS: {
        readonly IMAGE: readonly ["jpeg", "jpg", "png", "webp", "avif", "gif", "svg", "bmp", "tiff"];
        readonly VIDEO: readonly ["mp4", "webm", "avi", "mov", "mkv", "flv", "m4v", "ogv"];
        readonly AUDIO: readonly ["mp3", "aac", "ogg", "wav", "flac", "m4a", "wma", "opus"];
    };
    readonly ASPECT_RATIOS: {
        readonly SQUARE: 1;
        readonly FOUR_THREE: number;
        readonly SIXTEEN_NINE: number;
        readonly TWENTY_ONE_NINE: number;
        readonly THREE_FOUR: number;
        readonly NINE_SIXTEEN: number;
    };
    readonly BIT_RATES: {
        readonly VIDEO: {
            readonly LOW: 500000;
            readonly MEDIUM: 2000000;
            readonly HIGH: 8000000;
            readonly ULTRA: 25000000;
        };
        readonly AUDIO: {
            readonly LOW: 64000;
            readonly MEDIUM: 128000;
            readonly HIGH: 320000;
            readonly LOSSLESS: 1411200;
        };
    };
};
/**
 * Create a comprehensive file validation configuration
 */
export declare function createValidationConfig(mediaType: 'image' | 'video' | 'audio'): {
    maxSize: number;
    allowedExtensions: readonly ["mp4", "webm", "avi", "mov", "mkv", "flv", "m4v", "ogv"];
    maxWidth: 8000;
    maxHeight: 8000;
    maxDuration: 7200;
    minDuration: 1;
    minSize: number;
} | {
    maxSize: number;
    allowedExtensions: readonly ["mp3", "aac", "ogg", "wav", "flac", "m4a", "wma", "opus"];
    maxDuration: 14400;
    minDuration: 1;
    minSize: number;
} | {
    maxWidth: 8000;
    maxHeight: 8000;
    minWidth: 1;
    minHeight: 1;
    maxSize: number;
    minSize: number;
    allowedExtensions: readonly ["jpeg", "jpg", "png", "webp", "avif", "gif", "svg", "bmp", "tiff"];
};
/**
 * Get recommended settings for media optimization
 */
export declare function getOptimizationSettings(mediaType: 'image' | 'video' | 'audio', quality?: 'low' | 'medium' | 'high' | 'lossless'): {
    targetBitRate: 500000 | 8000000 | 2000000 | 25000000;
    format: string;
    codec: string;
    maxFrameRate: number;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    targetBitRate: 320000 | 128000 | 64000 | 1411200;
    format: string;
    sampleRate: number;
    channels: number;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    format: string;
    maxWidth: number;
    maxHeight: number;
    generateResponsive: boolean;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
};
/**
 * Check if a file meets the requirements for a specific use case
 */
export declare function validateForUseCase(file: {
    name: string;
    size: number;
    type: string;
}, useCase: 'avatar' | 'banner' | 'thumbnail' | 'document' | 'video-upload' | 'audio-upload'): any;
/**
 * Generate processing options based on target platform
 */
export declare function getProcessingOptionsForPlatform(platform: 'web' | 'mobile' | 'email' | 'social' | 'print', mediaType: 'image' | 'video' | 'audio'): {
    targetBitRate: 500000 | 8000000 | 2000000 | 25000000;
    format: string;
    codec: string;
    maxFrameRate: number;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    targetBitRate: 320000 | 128000 | 64000 | 1411200;
    format: string;
    sampleRate: number;
    channels: number;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    format: string;
    maxWidth: number;
    maxHeight: number;
    generateResponsive: boolean;
    quality: 100 | 80 | 60 | 95;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    quality: 80;
    maxWidth: number;
    maxHeight: number;
    targetBitRate: 2000000;
    format: string;
    codec: string;
    maxFrameRate: number;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    quality: 80;
    maxWidth: number;
    maxHeight: number;
    targetBitRate: 2000000;
    format: string;
    sampleRate: number;
    channels: number;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    quality: 80;
    maxWidth: number;
    maxHeight: number;
    targetBitRate: 2000000;
    format: string;
    generateResponsive: boolean;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    quality: 60;
    maxWidth: number;
    maxHeight: number;
    format: string;
    targetBitRate: 500000 | 8000000 | 2000000 | 25000000;
    codec: string;
    maxFrameRate: number;
    stripMetadata: boolean;
    progressive: boolean;
} | {
    quality: 60;
    maxWidth: number;
    maxHeight: number;
    format: string;
    targetBitRate: 320000 | 128000 | 64000 | 1411200;
    sampleRate: number;
    channels: number;
    stripMetadata: boolean;
    progressive: boolean;
};
//# sourceMappingURL=index.d.ts.map