/**
 * CVPlus Multimedia - Error Constants
 *
 * Error codes and messages for multimedia processing operations.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
export declare const ERROR_CATEGORIES: {
    readonly VALIDATION: "validation";
    readonly UPLOAD: "upload";
    readonly PROCESSING: "processing";
    readonly STORAGE: "storage";
    readonly NETWORK: "network";
    readonly QUOTA: "quota";
    readonly SECURITY: "security";
    readonly SYSTEM: "system";
};
export type ErrorCategory = typeof ERROR_CATEGORIES[keyof typeof ERROR_CATEGORIES];
export declare const ERROR_SEVERITIES: {
    readonly LOW: "low";
    readonly MEDIUM: "medium";
    readonly HIGH: "high";
    readonly CRITICAL: "critical";
};
export type ErrorSeverity = typeof ERROR_SEVERITIES[keyof typeof ERROR_SEVERITIES];
export declare const VALIDATION_ERRORS: {
    readonly INVALID_FILE_TYPE: {
        readonly code: "INVALID_FILE_TYPE";
        readonly message: "File type not supported";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly FILE_TOO_LARGE: {
        readonly code: "FILE_TOO_LARGE";
        readonly message: "File size exceeds maximum allowed limit";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly INVALID_DIMENSIONS: {
        readonly code: "INVALID_DIMENSIONS";
        readonly message: "Image dimensions are outside allowed range";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly CORRUPTED_FILE: {
        readonly code: "CORRUPTED_FILE";
        readonly message: "File appears to be corrupted or invalid";
        readonly category: "validation";
        readonly severity: "high";
    };
    readonly UNSUPPORTED_CODEC: {
        readonly code: "UNSUPPORTED_CODEC";
        readonly message: "Media codec not supported";
        readonly category: "validation";
        readonly severity: "medium";
    };
};
export declare const PROCESSING_ERRORS: {
    readonly PROCESSING_FAILED: {
        readonly code: "PROCESSING_FAILED";
        readonly message: "Media processing operation failed";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly TIMEOUT_ERROR: {
        readonly code: "TIMEOUT_ERROR";
        readonly message: "Processing operation timed out";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly INSUFFICIENT_RESOURCES: {
        readonly code: "INSUFFICIENT_RESOURCES";
        readonly message: "Insufficient system resources for processing";
        readonly category: "processing";
        readonly severity: "critical";
    };
    readonly CONVERSION_ERROR: {
        readonly code: "CONVERSION_ERROR";
        readonly message: "Format conversion failed";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly OPTIMIZATION_ERROR: {
        readonly code: "OPTIMIZATION_ERROR";
        readonly message: "Media optimization failed";
        readonly category: "processing";
        readonly severity: "medium";
    };
};
export declare const STORAGE_ERRORS: {
    readonly UPLOAD_FAILED: {
        readonly code: "UPLOAD_FAILED";
        readonly message: "File upload failed";
        readonly category: "storage";
        readonly severity: "high";
    };
    readonly STORAGE_QUOTA_EXCEEDED: {
        readonly code: "STORAGE_QUOTA_EXCEEDED";
        readonly message: "Storage quota exceeded";
        readonly category: "quota";
        readonly severity: "medium";
    };
    readonly FILE_NOT_FOUND: {
        readonly code: "FILE_NOT_FOUND";
        readonly message: "Requested file not found";
        readonly category: "storage";
        readonly severity: "medium";
    };
    readonly ACCESS_DENIED: {
        readonly code: "ACCESS_DENIED";
        readonly message: "Access denied to file or storage location";
        readonly category: "security";
        readonly severity: "medium";
    };
    readonly STORAGE_SERVICE_UNAVAILABLE: {
        readonly code: "STORAGE_SERVICE_UNAVAILABLE";
        readonly message: "Storage service temporarily unavailable";
        readonly category: "system";
        readonly severity: "critical";
    };
};
export declare const NETWORK_ERRORS: {
    readonly CONNECTION_FAILED: {
        readonly code: "CONNECTION_FAILED";
        readonly message: "Network connection failed";
        readonly category: "network";
        readonly severity: "high";
    };
    readonly REQUEST_TIMEOUT: {
        readonly code: "REQUEST_TIMEOUT";
        readonly message: "Network request timed out";
        readonly category: "network";
        readonly severity: "medium";
    };
    readonly SERVICE_UNAVAILABLE: {
        readonly code: "SERVICE_UNAVAILABLE";
        readonly message: "External service unavailable";
        readonly category: "network";
        readonly severity: "high";
    };
    readonly RATE_LIMIT_EXCEEDED: {
        readonly code: "RATE_LIMIT_EXCEEDED";
        readonly message: "API rate limit exceeded";
        readonly category: "quota";
        readonly severity: "medium";
    };
};
export declare const SYSTEM_ERRORS: {
    readonly INTERNAL_ERROR: {
        readonly code: "INTERNAL_ERROR";
        readonly message: "Internal system error occurred";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly SERVICE_UNAVAILABLE: {
        readonly code: "SERVICE_UNAVAILABLE";
        readonly message: "Service temporarily unavailable";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly CONFIGURATION_ERROR: {
        readonly code: "CONFIGURATION_ERROR";
        readonly message: "System configuration error";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly DEPENDENCY_ERROR: {
        readonly code: "DEPENDENCY_ERROR";
        readonly message: "Required dependency unavailable";
        readonly category: "system";
        readonly severity: "high";
    };
};
export declare const ALL_ERROR_CODES: {
    readonly INTERNAL_ERROR: {
        readonly code: "INTERNAL_ERROR";
        readonly message: "Internal system error occurred";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly SERVICE_UNAVAILABLE: {
        readonly code: "SERVICE_UNAVAILABLE";
        readonly message: "Service temporarily unavailable";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly CONFIGURATION_ERROR: {
        readonly code: "CONFIGURATION_ERROR";
        readonly message: "System configuration error";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly DEPENDENCY_ERROR: {
        readonly code: "DEPENDENCY_ERROR";
        readonly message: "Required dependency unavailable";
        readonly category: "system";
        readonly severity: "high";
    };
    readonly CONNECTION_FAILED: {
        readonly code: "CONNECTION_FAILED";
        readonly message: "Network connection failed";
        readonly category: "network";
        readonly severity: "high";
    };
    readonly REQUEST_TIMEOUT: {
        readonly code: "REQUEST_TIMEOUT";
        readonly message: "Network request timed out";
        readonly category: "network";
        readonly severity: "medium";
    };
    readonly RATE_LIMIT_EXCEEDED: {
        readonly code: "RATE_LIMIT_EXCEEDED";
        readonly message: "API rate limit exceeded";
        readonly category: "quota";
        readonly severity: "medium";
    };
    readonly UPLOAD_FAILED: {
        readonly code: "UPLOAD_FAILED";
        readonly message: "File upload failed";
        readonly category: "storage";
        readonly severity: "high";
    };
    readonly STORAGE_QUOTA_EXCEEDED: {
        readonly code: "STORAGE_QUOTA_EXCEEDED";
        readonly message: "Storage quota exceeded";
        readonly category: "quota";
        readonly severity: "medium";
    };
    readonly FILE_NOT_FOUND: {
        readonly code: "FILE_NOT_FOUND";
        readonly message: "Requested file not found";
        readonly category: "storage";
        readonly severity: "medium";
    };
    readonly ACCESS_DENIED: {
        readonly code: "ACCESS_DENIED";
        readonly message: "Access denied to file or storage location";
        readonly category: "security";
        readonly severity: "medium";
    };
    readonly STORAGE_SERVICE_UNAVAILABLE: {
        readonly code: "STORAGE_SERVICE_UNAVAILABLE";
        readonly message: "Storage service temporarily unavailable";
        readonly category: "system";
        readonly severity: "critical";
    };
    readonly PROCESSING_FAILED: {
        readonly code: "PROCESSING_FAILED";
        readonly message: "Media processing operation failed";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly TIMEOUT_ERROR: {
        readonly code: "TIMEOUT_ERROR";
        readonly message: "Processing operation timed out";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly INSUFFICIENT_RESOURCES: {
        readonly code: "INSUFFICIENT_RESOURCES";
        readonly message: "Insufficient system resources for processing";
        readonly category: "processing";
        readonly severity: "critical";
    };
    readonly CONVERSION_ERROR: {
        readonly code: "CONVERSION_ERROR";
        readonly message: "Format conversion failed";
        readonly category: "processing";
        readonly severity: "high";
    };
    readonly OPTIMIZATION_ERROR: {
        readonly code: "OPTIMIZATION_ERROR";
        readonly message: "Media optimization failed";
        readonly category: "processing";
        readonly severity: "medium";
    };
    readonly INVALID_FILE_TYPE: {
        readonly code: "INVALID_FILE_TYPE";
        readonly message: "File type not supported";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly FILE_TOO_LARGE: {
        readonly code: "FILE_TOO_LARGE";
        readonly message: "File size exceeds maximum allowed limit";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly INVALID_DIMENSIONS: {
        readonly code: "INVALID_DIMENSIONS";
        readonly message: "Image dimensions are outside allowed range";
        readonly category: "validation";
        readonly severity: "medium";
    };
    readonly CORRUPTED_FILE: {
        readonly code: "CORRUPTED_FILE";
        readonly message: "File appears to be corrupted or invalid";
        readonly category: "validation";
        readonly severity: "high";
    };
    readonly UNSUPPORTED_CODEC: {
        readonly code: "UNSUPPORTED_CODEC";
        readonly message: "Media codec not supported";
        readonly category: "validation";
        readonly severity: "medium";
    };
};
export declare const ERROR_CODE_TO_HTTP_STATUS: {
    readonly INVALID_FILE_TYPE: 400;
    readonly FILE_TOO_LARGE: 413;
    readonly INVALID_DIMENSIONS: 400;
    readonly CORRUPTED_FILE: 400;
    readonly UNSUPPORTED_CODEC: 415;
    readonly PROCESSING_FAILED: 500;
    readonly TIMEOUT_ERROR: 504;
    readonly INSUFFICIENT_RESOURCES: 503;
    readonly CONVERSION_ERROR: 500;
    readonly OPTIMIZATION_ERROR: 500;
    readonly UPLOAD_FAILED: 500;
    readonly STORAGE_QUOTA_EXCEEDED: 507;
    readonly FILE_NOT_FOUND: 404;
    readonly ACCESS_DENIED: 403;
    readonly STORAGE_SERVICE_UNAVAILABLE: 503;
    readonly CONNECTION_FAILED: 503;
    readonly REQUEST_TIMEOUT: 504;
    readonly SERVICE_UNAVAILABLE: 503;
    readonly RATE_LIMIT_EXCEEDED: 429;
    readonly INTERNAL_ERROR: 500;
    readonly CONFIGURATION_ERROR: 500;
    readonly DEPENDENCY_ERROR: 503;
};
export declare const ERROR_RETRY_CONFIG: {
    readonly RETRYABLE: readonly ["TIMEOUT_ERROR", "CONNECTION_FAILED", "REQUEST_TIMEOUT", "SERVICE_UNAVAILABLE", "STORAGE_SERVICE_UNAVAILABLE", "INSUFFICIENT_RESOURCES"];
    readonly NON_RETRYABLE: readonly ["INVALID_FILE_TYPE", "FILE_TOO_LARGE", "CORRUPTED_FILE", "ACCESS_DENIED", "STORAGE_QUOTA_EXCEEDED", "FILE_NOT_FOUND", "CONFIGURATION_ERROR"];
};
//# sourceMappingURL=errors.constants.d.ts.map