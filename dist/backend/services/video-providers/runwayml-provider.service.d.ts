/**
 * RunwayML Video Generation Provider
 *
 * Secondary video generation provider using RunwayML Gen-2 API with polling-based status checking,
 * creative video generation capabilities, and artistic control for innovative content.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
import { BaseVideoProvider, VideoGenerationOptions, VideoGenerationResult, VideoGenerationStatus, ProviderCapabilities, RateLimitConfig, ProviderHealthStatus, ProviderPerformanceMetrics, VideoRequirements, ProviderConfig } from './base-provider.interface';
interface RunwayMLStatusResponse {
    id: string;
    status: 'pending' | 'processing' | 'succeeded' | 'failed';
    progress: number;
    output?: string;
    thumbnailUrl?: string;
    metadata?: {
        duration: number;
        width: number;
        height: number;
        fps: number;
        format: string;
    };
    error?: {
        code: string;
        message: string;
        details?: any;
    };
    createdAt: string;
    updatedAt: string;
}
export declare class RunwayMLProvider extends BaseVideoProvider {
    readonly name = "runwayml";
    readonly priority = 2;
    readonly capabilities: ProviderCapabilities;
    readonly rateLimits: RateLimitConfig;
    private httpClient;
    private baseUrl;
    private pollingManager;
    private readonly styleConfigs;
    private readonly promptTemplates;
    constructor();
    initialize(config: ProviderConfig): Promise<void>;
    generateVideo(script: string, options?: VideoGenerationOptions): Promise<VideoGenerationResult>;
    checkStatus(jobId: string): Promise<VideoGenerationStatus>;
    checkRunwayMLStatus(runwayId: string): Promise<RunwayMLStatusResponse>;
    getHealthStatus(): Promise<ProviderHealthStatus>;
    getPerformanceMetrics(period: '1h' | '24h' | '7d' | '30d'): Promise<ProviderPerformanceMetrics>;
    canHandle(requirements: VideoRequirements): boolean;
    getEstimatedCost(options: VideoGenerationOptions): Promise<number>;
    /**
     * Enhanced prompt generation for creative video content
     */
    private enhancePromptForVideo;
    private extractVisualElements;
    private getStyleModifiers;
    private getMotionSuggestions;
    private calculatePromptQuality;
    private buildGenerationPayload;
    private getCameraMotion;
    private getDurationInSeconds;
    private estimateFileSize;
    private generateJobId;
    private validateAPIAccess;
    private storeJobMapping;
    private getRunwayIdForJob;
    private mapRunwayMLStatus;
    private isRetryableError;
    /**
     * Cleanup method to stop all polling when the service shuts down
     */
    cleanup(): void;
}
export {};
//# sourceMappingURL=runwayml-provider.service.d.ts.map