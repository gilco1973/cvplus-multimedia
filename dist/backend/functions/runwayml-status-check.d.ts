/**
 * RunwayML Status Check Function
 *
 * Firebase Function to manually check RunwayML video generation status
 * for debugging and manual status updates when polling fails.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
/**
 * Manual RunwayML Status Check
 *
 * HTTP endpoint to manually check status of a RunwayML video generation job
 * Useful for debugging and manual status updates
 */
export declare const runwaymlStatusCheck: import("firebase-functions/v2/https").HttpsFunction;
/**
 * RunwayML Batch Status Check
 *
 * Check status for multiple RunwayML jobs in a single request
 * Useful for monitoring dashboard and bulk status updates
 */
export declare const runwaymlBatchStatusCheck: import("firebase-functions/v2/https").HttpsFunction;
/**
 * RunwayML Polling Task Handler
 *
 * Cloud Task handler for automated status polling of RunwayML jobs
 * This provides backup polling in case the internal polling manager fails
 */
export declare const runwaymlPollingTask: import("firebase-functions/v2/tasks").TaskQueueFunction<any>;
/**
 * RunwayML Job Cleanup Task
 *
 * Cloud Task handler for cleaning up old RunwayML job records
 * Runs periodically to remove completed jobs older than specified retention period
 */
export declare const runwaymlCleanupTask: import("firebase-functions/v2/tasks").TaskQueueFunction<any>;
//# sourceMappingURL=runwayml-status-check.d.ts.map