/**
 * Media Utilities
 *
 * Utilities for working with multimedia files including metadata extraction,
 * format detection, and media-specific operations.
 *
 * @author Gil Klainert
 * @version 1.0.0 - CVPlus Multimedia Module
 */
import { MediaFile } from '../types/media.types';
export interface MediaMetadata {
    width?: number;
    height?: number;
    duration?: number;
    bitRate?: number;
    frameRate?: number;
    channels?: number;
    sampleRate?: number;
    format?: string;
    colorSpace?: string;
    hasAudio?: boolean;
    hasVideo?: boolean;
    thumbnails?: string[];
    tags?: Record<string, string>;
}
export interface MediaValidationRules {
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    maxDuration?: number;
    minDuration?: number;
    maxBitRate?: number;
    minBitRate?: number;
    allowedFormats?: string[];
    requiredAspectRatio?: number;
    maxFrameRate?: number;
    minFrameRate?: number;
}
export declare class MediaUtils {
    /**
     * Extract metadata from media file
     */
    static extractMetadata(file: MediaFile): Promise<MediaMetadata>;
    /**
     * Extract image metadata
     */
    private static extractImageMetadata;
    /**
     * Extract video metadata
     */
    private static extractVideoMetadata;
    /**
     * Extract audio metadata
     */
    private static extractAudioMetadata;
    /**
     * Validate media against rules
     */
    static validateMedia(file: MediaFile, metadata: MediaMetadata, rules: MediaValidationRules): {
        valid: boolean;
        errors: string[];
    };
    /**
     * Calculate aspect ratio
     */
    static calculateAspectRatio(width: number, height: number): number;
    /**
     * Get common aspect ratio name
     */
    static getAspectRatioName(aspectRatio: number): string;
    /**
     * Format duration in human readable format
     */
    static formatDuration(seconds: number): string;
    /**
     * Parse duration string to seconds
     */
    static parseDuration(durationStr: string): number;
    /**
     * Calculate file bit rate
     */
    static calculateBitRate(fileSize: number, duration: number): number;
    /**
     * Format bit rate in human readable format
     */
    static formatBitRate(bitRate: number): string;
    /**
     * Generate thumbnail from media file
     */
    static generateThumbnail(file: MediaFile, options?: {
        width?: number;
        height?: number;
        quality?: number;
        format?: 'jpeg' | 'png' | 'webp';
        timeOffset?: number;
    }): Promise<Blob | null>;
    /**
     * Generate image thumbnail
     */
    private static generateImageThumbnail;
    /**
     * Generate video thumbnail
     */
    private static generateVideoThumbnail;
    /**
     * Check if media file has transparency
     */
    static hasTransparency(file: MediaFile): Promise<boolean>;
    /**
     * Get media quality score (0-100)
     */
    static calculateQualityScore(metadata: MediaMetadata, fileSize: number): number;
    /**
     * Calculate size appropriateness score
     */
    private static calculateSizeScore;
}
//# sourceMappingURL=MediaUtils.d.ts.map