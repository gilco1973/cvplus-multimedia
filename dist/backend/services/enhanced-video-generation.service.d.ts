import { ParsedCV } from '../types/enhanced-models';
import { EnhancedScriptResult } from './enhanced-prompt-engine.service';
import { VideoGenerationOptions as BaseVideoGenerationOptions, VideoGenerationStatus } from './video-providers/base-provider.interface';
export interface EnhancedVideoGenerationOptions extends BaseVideoGenerationOptions {
    useAdvancedPrompts?: boolean;
    targetIndustry?: string;
    optimizationLevel?: 'basic' | 'advanced' | 'premium';
    preferredProvider?: string;
    allowFallback?: boolean;
    urgency?: 'low' | 'normal' | 'high';
    qualityLevel?: 'basic' | 'standard' | 'premium';
    features?: string[];
    quality?: 'basic' | 'standard' | 'premium';
    resolution?: string;
    format?: string;
}
export interface EnhancedVideoResult {
    jobId: string;
    providerId: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    duration?: number;
    script: string;
    subtitles?: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    progress: number;
    metadata: {
        resolution: string;
        format: string;
        size?: number;
        generatedAt: Date;
        provider: string;
    };
    enhancedScript?: EnhancedScriptResult;
    scriptQualityScore?: number;
    industryAlignment?: number;
    generationMethod: 'basic' | 'advanced';
    selectionReasoning?: string[];
    estimatedCost?: number;
    error?: {
        code: string;
        message: string;
        retryable: boolean;
    };
}
interface IntelligentFallbackConfig {
    maxRetryAttempts: number;
    fallbackChainEnabled: boolean;
    circuitBreakerEnabled: boolean;
    performanceTrackingEnabled: boolean;
    qualityThreshold: number;
    costOptimization: boolean;
}
/**
 * Enhanced Video Generation Service with Intelligent Fallback Mechanism
 */
export declare class EnhancedVideoGenerationService {
    private providerSelector;
    private errorRecoveryEngine;
    private circuitBreaker;
    private performanceTracker;
    private heygenProvider;
    private runwaymlProvider;
    private fallbackConfig;
    constructor(config?: Partial<IntelligentFallbackConfig>);
    private resolveProvider;
    private initializeProviders;
    /**
     * Generate enhanced video introduction with intelligent fallback mechanism
     */
    generateVideoIntroduction(parsedCV: ParsedCV, options?: EnhancedVideoGenerationOptions, jobId?: string, userId?: string): Promise<EnhancedVideoResult>;
    /**
     * Check video generation status with intelligent monitoring
     */
    checkVideoStatus(jobId: string): Promise<VideoGenerationStatus>;
    /**
     * Generate basic script (fallback method)
     */
    private generateBasicScript;
    private getTechnicalSkills;
    private getDurationInSeconds;
    private storeJobInformation;
    private getJobInformation;
    /**
     * Attempt video generation with intelligent provider selection
     */
    private attemptVideoGeneration;
    /**
     * Attempt error recovery using the error recovery engine
     */
    private attemptErrorRecovery;
    /**
     * Build enhanced result from video generation result
     */
    private buildEnhancedResult;
    /**
     * Get system health and performance dashboard
     */
    getSystemDashboard(): Promise<any>;
    private calculateSystemReliability;
    private calculateAverageResponseTime;
    /**
     * Cleanup method for proper service shutdown
     */
    cleanup(): void;
}
export declare const enhancedVideoGenerationService: EnhancedVideoGenerationService;
export {};
//# sourceMappingURL=enhanced-video-generation.service.d.ts.map