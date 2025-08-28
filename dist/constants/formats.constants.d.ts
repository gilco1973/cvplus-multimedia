/**
 * CVPlus Multimedia - Format Constants
 *
 * Supported file formats and MIME types for multimedia processing.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
export declare const IMAGE_FORMATS: {
    readonly JPEG: {
        readonly extension: ".jpg";
        readonly mimeType: "image/jpeg";
        readonly supportsTransparency: false;
        readonly supportsAnimation: false;
    };
    readonly PNG: {
        readonly extension: ".png";
        readonly mimeType: "image/png";
        readonly supportsTransparency: true;
        readonly supportsAnimation: false;
    };
    readonly WEBP: {
        readonly extension: ".webp";
        readonly mimeType: "image/webp";
        readonly supportsTransparency: true;
        readonly supportsAnimation: true;
    };
    readonly GIF: {
        readonly extension: ".gif";
        readonly mimeType: "image/gif";
        readonly supportsTransparency: true;
        readonly supportsAnimation: true;
    };
    readonly SVG: {
        readonly extension: ".svg";
        readonly mimeType: "image/svg+xml";
        readonly supportsTransparency: true;
        readonly supportsAnimation: false;
    };
    readonly BMP: {
        readonly extension: ".bmp";
        readonly mimeType: "image/bmp";
        readonly supportsTransparency: false;
        readonly supportsAnimation: false;
    };
    readonly TIFF: {
        readonly extension: ".tiff";
        readonly mimeType: "image/tiff";
        readonly supportsTransparency: true;
        readonly supportsAnimation: false;
    };
};
export declare const VIDEO_FORMATS: {
    readonly MP4: {
        readonly extension: ".mp4";
        readonly mimeType: "video/mp4";
        readonly container: "mp4";
        readonly codecs: readonly ["h264", "h265", "av1"];
    };
    readonly WEBM: {
        readonly extension: ".webm";
        readonly mimeType: "video/webm";
        readonly container: "webm";
        readonly codecs: readonly ["vp8", "vp9", "av1"];
    };
    readonly AVI: {
        readonly extension: ".avi";
        readonly mimeType: "video/x-msvideo";
        readonly container: "avi";
        readonly codecs: readonly ["h264", "xvid", "divx"];
    };
    readonly MOV: {
        readonly extension: ".mov";
        readonly mimeType: "video/quicktime";
        readonly container: "mov";
        readonly codecs: readonly ["h264", "prores"];
    };
    readonly MKV: {
        readonly extension: ".mkv";
        readonly mimeType: "video/x-matroska";
        readonly container: "mkv";
        readonly codecs: readonly ["h264", "h265", "vp9"];
    };
};
export declare const AUDIO_FORMATS: {
    readonly MP3: {
        readonly extension: ".mp3";
        readonly mimeType: "audio/mpeg";
        readonly lossy: true;
        readonly maxBitrate: 320000;
    };
    readonly AAC: {
        readonly extension: ".aac";
        readonly mimeType: "audio/aac";
        readonly lossy: true;
        readonly maxBitrate: 512000;
    };
    readonly WAV: {
        readonly extension: ".wav";
        readonly mimeType: "audio/wav";
        readonly lossy: false;
        readonly maxBitrate: null;
    };
    readonly FLAC: {
        readonly extension: ".flac";
        readonly mimeType: "audio/flac";
        readonly lossy: false;
        readonly maxBitrate: null;
    };
    readonly OGG: {
        readonly extension: ".ogg";
        readonly mimeType: "audio/ogg";
        readonly lossy: true;
        readonly maxBitrate: 500000;
    };
    readonly M4A: {
        readonly extension: ".m4a";
        readonly mimeType: "audio/mp4";
        readonly lossy: true;
        readonly maxBitrate: 320000;
    };
};
export declare const SUPPORTED_IMAGE_EXTENSIONS: (".jpg" | ".png" | ".webp" | ".gif" | ".svg" | ".bmp" | ".tiff")[];
export declare const SUPPORTED_VIDEO_EXTENSIONS: (".mp4" | ".webm" | ".avi" | ".mov" | ".mkv")[];
export declare const SUPPORTED_AUDIO_EXTENSIONS: (".mp3" | ".aac" | ".wav" | ".flac" | ".ogg" | ".m4a")[];
export declare const SUPPORTED_IMAGE_MIME_TYPES: ("image/jpeg" | "image/png" | "image/webp" | "image/gif" | "image/svg+xml" | "image/bmp" | "image/tiff")[];
export declare const SUPPORTED_VIDEO_MIME_TYPES: ("video/mp4" | "video/webm" | "video/x-msvideo" | "video/quicktime" | "video/x-matroska")[];
export declare const SUPPORTED_AUDIO_MIME_TYPES: ("audio/mpeg" | "audio/aac" | "audio/ogg" | "audio/wav" | "audio/flac" | "audio/mp4")[];
export declare const FORMAT_VALIDATION: {
    readonly IMAGE_PATTERN: RegExp;
    readonly VIDEO_PATTERN: RegExp;
    readonly AUDIO_PATTERN: RegExp;
};
export declare const CONVERSION_SUPPORT: {
    readonly IMAGE: {
        readonly from: readonly ["jpeg", "png", "webp", "gif", "bmp", "tiff"];
        readonly to: readonly ["jpeg", "png", "webp"];
    };
    readonly VIDEO: {
        readonly from: readonly ["mp4", "webm", "avi", "mov", "mkv"];
        readonly to: readonly ["mp4", "webm"];
    };
    readonly AUDIO: {
        readonly from: readonly ["mp3", "aac", "wav", "flac", "ogg", "m4a"];
        readonly to: readonly ["mp3", "aac", "wav"];
    };
};
export declare const OPTIMIZATION_FORMATS: {
    readonly WEB: {
        readonly image: "webp";
        readonly video: "mp4";
        readonly audio: "aac";
    };
    readonly MOBILE: {
        readonly image: "webp";
        readonly video: "mp4";
        readonly audio: "aac";
    };
    readonly DESKTOP: {
        readonly image: "png";
        readonly video: "mp4";
        readonly audio: "wav";
    };
};
//# sourceMappingURL=formats.constants.d.ts.map