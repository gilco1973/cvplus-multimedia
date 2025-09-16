export interface SanitizationOptions {
    removeUndefined?: boolean;
    removeNull?: boolean;
    removeEmptyStrings?: boolean;
    removeEmptyArrays?: boolean;
    removeEmptyObjects?: boolean;
    convertNullToUndefined?: boolean;
    maxDepth?: number;
    preserveSpecialFields?: string[];
}
export declare class FirestoreSanitizer {
    /**
     * Sanitize data for safe Firestore write operations
     */
    static sanitize(data: any, options?: SanitizationOptions): any;
    /**
     * Sanitize data specifically for error logging contexts
     */
    static sanitizeForErrorLogging(errorData: any): any;
    /**
     * Sanitize data specifically for performance metrics
     */
    static sanitizeForMetrics(metricsData: any): any;
    /**
     * Recursive sanitization with depth protection
     */
    private static sanitizeRecursive;
    /**
     * Check if value is a primitive type
     */
    private static isPrimitive;
    /**
     * Validate that data is safe for Firestore operations
     */
    static validate(data: any): {
        isValid: boolean;
        errors: string[];
    };
    /**
     * Recursive validation with path tracking
     */
    private static validateRecursive;
    /**
     * Create a safe update object by removing undefined values
     */
    static createSafeUpdateObject(updates: Record<string, any>): Record<string, any>;
    /**
     * Log sanitization results for debugging
     */
    static sanitizeWithLogging(data: any, context?: string): any;
}
/**
 * Convenience functions for common sanitization patterns
 */
export declare function sanitizeForFirestore(data: any, options?: SanitizationOptions): any;
export declare function sanitizeErrorContext(errorData: any): any;
export declare function sanitizeMetrics(metricsData: any): any;
export declare function createSafeFirestoreUpdate(updates: Record<string, any>): Record<string, any>;
//# sourceMappingURL=firestore-sanitizer.d.ts.map