/**
 * CVPlus Multimedia Module - Main Entry Point (Minimal Build)
 *
 * Basic multimedia types and utilities for the CVPlus platform.
 *
 * @author Gil Klainert
 * @version 1.0.0
 * @license PROPRIETARY
 */
export type { MediaType, MediaFile, ProcessedMedia, QualityLevel, FileFormat, ImageFormat, VideoFormat, AudioFormat, ProcessingStatus } from './types/media.types';
export type { ProcessedImage, ImageProcessingOptions } from './types/image.types';
export type { ProcessedVideo, VideoProcessingOptions } from './types/video.types';
export type { ProcessedAudio, AudioProcessingOptions } from './types/audio.types';
export type { StorageProvider, CDNProvider, } from './types/storage.types';
export type { ProcessingMode, ProcessingJobType, ProcessingStage, ProcessingPriority } from './types/processing.types';
export * from './constants';
export { FileUtils, MediaUtils } from './utils';
export type { MediaMetadata, MediaValidationRules } from './utils';
export declare const VERSION = "1.0.0";
export declare const MODULE_NAME = "@cvplus/multimedia";
export declare const MODULE_INFO: {
    readonly name: "@cvplus/multimedia";
    readonly version: "1.0.0";
    readonly description: "CVPlus Multimedia - Basic media types and utilities";
    readonly author: "Gil Klainert";
    readonly license: "PROPRIETARY";
};
//# sourceMappingURL=index.d.ts.map