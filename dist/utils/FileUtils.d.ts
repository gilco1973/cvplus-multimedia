import { MediaType } from '../types/media.types';
export declare class FileUtils {
    /**
     * MIME type mappings for media files
     */
    private static readonly MIME_TYPES;
    /**
     * Get file extension from filename
     */
    static getFileExtension(filename: string): string;
    /**
     * Get filename without extension
     */
    static getBaseName(filename: string): string;
    /**
     * Get MIME type from file extension
     */
    static getMimeTypeFromExtension(extension: string): string;
    /**
     * Get file extension from MIME type
     */
    static getExtensionFromMimeType(mimeType: string): string;
    /**
     * Detect media type from MIME type or filename
     */
    static detectMediaType(input: string): MediaType;
    /**
     * Validate file name
     */
    static isValidFileName(filename: string): boolean;
    /**
     * Sanitize filename for safe storage
     */
    static sanitizeFileName(filename: string): string;
    /**
     * Generate unique filename
     */
    static generateUniqueFileName(originalName: string, suffix?: string): string;
    /**
     * Format file size in human readable format
     */
    static formatFileSize(bytes: number): string;
    /**
     * Parse file size string to bytes
     */
    static parseFileSize(sizeStr: string): number;
    /**
     * Check if file size is within limits
     */
    static isFileSizeValid(size: number, maxSize: number): boolean;
    /**
     * Get supported file extensions for media type
     */
    static getSupportedExtensions(mediaType: MediaType): string[];
    /**
     * Check if file type is supported
     */
    static isFileTypeSupported(filename: string, supportedTypes: string[]): boolean;
    /**
     * Generate file path with timestamp organization
     */
    static generateDateBasedPath(filename: string, basePath?: string): string;
    /**
     * Extract file info from path
     */
    static extractFileInfo(filePath: string): {
        directory: string;
        filename: string;
        baseName: string;
        extension: string;
        fullPath: string;
    };
    /**
     * Validate file against multiple criteria
     */
    static validateFile(file: File | {
        name: string;
        size: number;
        type: string;
    }, criteria: {
        maxSize?: number;
        allowedTypes?: string[];
        allowedExtensions?: string[];
        minSize?: number;
    }): {
        valid: boolean;
        errors: string[];
    };
}
//# sourceMappingURL=FileUtils.d.ts.map