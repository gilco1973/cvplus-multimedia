import { VideoGenerationStatus } from './base-provider.interface';
interface WebhookValidationConfig {
    secret: string;
    signatureHeader: string;
    timestampTolerance?: number;
}
export declare class VideoWebhookHandler {
    private readonly validationConfigs;
    constructor();
    /**
     * Process incoming webhook from any provider
     */
    processWebhook(provider: string, headers: Record<string, string>, payload: any): Promise<VideoGenerationStatus>;
    /**
     * Process HeyGen webhook payload
     */
    private processHeyGenWebhook;
    /**
     * Process D-ID webhook payload (for fallback compatibility)
     */
    private processDidWebhook;
    /**
     * Process RunwayML webhook payload
     */
    private processRunwayMLWebhook;
    /**
     * Validate webhook signature and timestamp
     */
    private validateWebhook;
    /**
     * Calculate HMAC signature for webhook validation
     */
    private calculateSignature;
    /**
     * Verify webhook signature using secure comparison
     */
    private verifySignature;
    /**
     * Map HeyGen status to standardized status
     */
    private mapHeyGenStatus;
    /**
     * Map D-ID status to standardized status
     */
    private mapDidStatus;
    /**
     * Map RunwayML status to standardized status
     */
    private mapRunwayMLStatus;
    /**
     * Check if HeyGen error is retryable
     */
    private isRetryableHeyGenError;
    /**
     * Check if RunwayML error is retryable
     */
    private isRetryableRunwayMLError;
    /**
     * Update job status in Firestore
     */
    private updateJobStatus;
    /**
     * Notify clients of status updates via real-time channels
     */
    private notifyStatusUpdate;
    /**
     * Get webhook configuration for a provider
     */
    getWebhookConfig(provider: string): WebhookValidationConfig | undefined;
    /**
     * Update webhook configuration for a provider
     */
    updateWebhookConfig(provider: string, config: WebhookValidationConfig): void;
}
export declare const videoWebhookHandler: VideoWebhookHandler;
export {};
//# sourceMappingURL=webhook-handler.service.d.ts.map