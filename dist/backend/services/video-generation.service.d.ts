/**
 * Video Generation Service
 * Creates professional video introductions with AI avatars
 */
import { ParsedCV } from '../types/enhanced-models';
import { EnhancedScriptResult } from './enhanced-prompt-engine.service';
interface VideoGenerationOptions {
    duration?: 'short' | 'medium' | 'long';
    style?: 'professional' | 'friendly' | 'energetic';
    avatarStyle?: 'realistic' | 'illustrated' | 'corporate';
    background?: 'office' | 'modern' | 'gradient' | 'custom';
    includeSubtitles?: boolean;
    includeNameCard?: boolean;
    useAdvancedPrompts?: boolean;
    targetIndustry?: string;
    optimizationLevel?: 'basic' | 'enhanced' | 'premium';
}
interface VideoResult {
    videoUrl: string;
    thumbnailUrl: string;
    duration: number;
    script: string;
    subtitles?: string;
    metadata: {
        resolution: string;
        format: string;
        size: number;
    };
    enhancedScript?: EnhancedScriptResult;
    scriptQualityScore?: number;
    industryAlignment?: number;
    generationMethod: 'basic' | 'enhanced';
}
export declare class VideoGenerationService {
    private openai;
    private didApiKey;
    private avatarConfig;
    constructor();
    /**
     * Helper function to safely extract technical skills
     */
    private getTechnicalSkills;
    /**
     * Generate a complete video introduction
     */
    generateVideoIntroduction(parsedCV: ParsedCV, jobId: string, options?: VideoGenerationOptions): Promise<VideoResult>;
    /**
     * Generate enhanced script with quality metrics (without video creation)
     */
    generateEnhancedScriptOnly(parsedCV: ParsedCV, options?: VideoGenerationOptions): Promise<EnhancedScriptResult>;
    /**
     * Get industry template recommendations for a CV
     */
    getIndustryRecommendations(parsedCV: ParsedCV): any[];
    /**
     * Generate video script optimized for AI avatar delivery
     */
    private generateVideoScript;
    /**
     * Optimize script for avatar delivery
     */
    private optimizeScriptForAvatar;
    /**
     * Create video using D-ID API
     */
    createVideoWithAvatar(script: string, jobId: string, options: VideoGenerationOptions): Promise<{
        videoUrl: string;
        duration: number;
        size: number;
    }>;
    /**
     * Create fallback video using alternative method
     */
    private createFallbackVideo;
    /**
     * Create video using Synthesia API
     */
    private createSynthesiaVideo;
    /**
     * Create animated text video as last resort
     */
    private createAnimatedTextVideo;
    /**
     * Generate video thumbnail
     */
    generateThumbnail(videoUrl: string, jobId: string): Promise<string>;
    /**
     * Generate subtitles in WebVTT format
     */
    private generateSubtitles;
    /**
     * Format time for WebVTT
     */
    private formatTime;
    /**
     * Store video in Firebase Storage
     */
    private storeVideo;
    /**
     * Generate template video script
     */
    private generateTemplateVideoScript;
}
export declare const videoGenerationService: VideoGenerationService;
export {};
//# sourceMappingURL=video-generation.service.d.ts.map