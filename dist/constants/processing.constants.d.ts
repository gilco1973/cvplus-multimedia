/**
 * CVPlus Multimedia - Processing Constants
 *
 * Processing-related constants for multimedia operations.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
export declare const PROCESSING_STAGES: {
    readonly VALIDATION: "validation";
    readonly UPLOAD: "upload";
    readonly PREPROCESSING: "preprocessing";
    readonly PROCESSING: "processing";
    readonly POSTPROCESSING: "postprocessing";
    readonly OPTIMIZATION: "optimization";
    readonly DELIVERY: "delivery";
    readonly COMPLETE: "complete";
    readonly ERROR: "error";
};
export type ProcessingStage = typeof PROCESSING_STAGES[keyof typeof PROCESSING_STAGES];
export declare const PROCESSING_PRIORITIES: {
    readonly LOW: 1;
    readonly NORMAL: 2;
    readonly HIGH: 3;
    readonly URGENT: 4;
    readonly CRITICAL: 5;
};
export type ProcessingPriority = typeof PROCESSING_PRIORITIES[keyof typeof PROCESSING_PRIORITIES];
export declare const PROCESSING_TIMEOUTS: {
    readonly VALIDATION: 5000;
    readonly UPLOAD: 30000;
    readonly PREPROCESSING: 60000;
    readonly PROCESSING: 300000;
    readonly POSTPROCESSING: 60000;
    readonly OPTIMIZATION: 120000;
    readonly DELIVERY: 30000;
};
export declare const BATCH_PROCESSING: {
    readonly MAX_CONCURRENT_JOBS: 5;
    readonly MAX_BATCH_SIZE: 100;
    readonly BATCH_TIMEOUT: 600000;
    readonly RETRY_ATTEMPTS: 3;
    readonly RETRY_DELAY: 5000;
};
export declare const RESOURCE_LIMITS: {
    readonly MAX_CPU_PERCENTAGE: 80;
    readonly MAX_MEMORY_MB: 2048;
    readonly MAX_DISK_USAGE_MB: 5120;
    readonly MAX_NETWORK_BANDWIDTH_MBPS: 100;
};
export declare const PROCESSING_QUEUES: {
    readonly HIGH_PRIORITY: "high-priority";
    readonly NORMAL_PRIORITY: "normal-priority";
    readonly LOW_PRIORITY: "low-priority";
    readonly BATCH_PROCESSING: "batch-processing";
};
export type ProcessingQueue = typeof PROCESSING_QUEUES[keyof typeof PROCESSING_QUEUES];
//# sourceMappingURL=processing.constants.d.ts.map