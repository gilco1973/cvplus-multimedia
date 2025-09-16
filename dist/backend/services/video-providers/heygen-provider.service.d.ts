import { BaseVideoProvider, VideoGenerationOptions, VideoGenerationResult, VideoGenerationStatus, ProviderCapabilities, RateLimitConfig, ProviderHealthStatus, ProviderPerformanceMetrics, VideoRequirements, ProviderConfig } from './base-provider.interface';
interface HeyGenWebhookPayload {
    video_id: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    progress: number;
    callback_id: string;
    video_url?: string;
    thumbnail_url?: string;
    duration?: number;
    file_size?: number;
    error?: {
        code: string;
        message: string;
    };
}
export declare class HeyGenProvider extends BaseVideoProvider {
    readonly name = "heygen";
    readonly priority = 1;
    readonly capabilities: ProviderCapabilities;
    readonly rateLimits: RateLimitConfig;
    private httpClient;
    private baseUrl;
    private readonly avatarConfigs;
    private readonly backgroundConfigs;
    initialize(config: ProviderConfig): Promise<void>;
    generateVideo(script: string, options?: VideoGenerationOptions): Promise<VideoGenerationResult>;
    checkStatus(jobId: string): Promise<VideoGenerationStatus>;
    getHealthStatus(): Promise<ProviderHealthStatus>;
    getPerformanceMetrics(period: '1h' | '24h' | '7d' | '30d'): Promise<ProviderPerformanceMetrics>;
    canHandle(requirements: VideoRequirements): boolean;
    getEstimatedCost(options: VideoGenerationOptions): Promise<number>;
    handleWebhook(payload: HeyGenWebhookPayload): Promise<VideoGenerationStatus>;
    private buildGenerationPayload;
    private getDimensions;
    private generateJobId;
    private validateAPIAccess;
    private storeJobMapping;
    private getVideoIdForJob;
    private updateJobStatus;
    private isRetryableError;
}
export {};
//# sourceMappingURL=heygen-provider.service.d.ts.map