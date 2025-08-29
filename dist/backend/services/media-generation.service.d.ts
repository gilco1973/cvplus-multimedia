/**
 * Media Generation Service for Video Intros and Podcasts
 */
import { ParsedCV } from '../types/enhanced-models';
export declare class MediaGenerationService {
    private openai;
    constructor();
    private getOpenAI;
    /**
     * Generate video intro script
     */
    generateVideoIntroScript(parsedCV: ParsedCV, duration?: number, // seconds
    style?: 'professional' | 'casual' | 'creative'): Promise<{
        script: string;
        scenes: VideoScene[];
        duration: number;
        voiceoverText: string;
    }>;
    /**
     * Generate podcast script from CV
     */
    generatePodcastScript(parsedCV: ParsedCV, format?: 'interview' | 'narrative' | 'highlights', duration?: number): Promise<{
        script: string;
        segments: PodcastSegment[];
        totalDuration: number;
        metadata: PodcastMetadata;
    }>;
    /**
     * Generate intro script using AI
     */
    private generateIntroScript;
    /**
     * Create video scenes from script
     */
    private createVideoScenes;
    /**
     * Get visual suggestions for a scene
     */
    private getVisualSuggestions;
    /**
     * Extract voiceover text from scenes
     */
    private extractVoiceoverText;
    /**
     * Generate interview format podcast
     */
    private generateInterviewFormat;
    /**
     * Generate narrative format podcast
     */
    private generateNarrativeFormat;
    /**
     * Generate highlights format podcast
     */
    private generateHighlightsFormat;
    /**
     * Generate a segment using AI
     */
    private generateSegment;
    /**
     * Summarize CV for prompts
     */
    private summarizeForPrompt;
    /**
     * Get technical skills from skills union type
     */
    private getTechnicalSkills;
    /**
     * Get soft skills from skills union type
     */
    private getSoftSkills;
    /**
     * Generate default intro script
     */
    private generateDefaultIntroScript;
    /**
     * Generate podcast metadata
     */
    private generatePodcastMetadata;
    /**
     * Generate audio file from text (placeholder)
     */
    generateAudio(text: string, voice?: 'male' | 'female', speed?: number): Promise<{
        audioUrl: string;
        duration: number;
    }>;
    /**
     * Merge audio segments for podcast
     */
    mergeAudioSegments(segments: Array<{
        audioUrl: string;
        duration: number;
    }>, transitions?: boolean): Promise<string>;
    /**
     * Generate silence file using FFmpeg
     */
    private generateSilenceFile;
    /**
     * Clean up temporary files
     */
    private cleanupTempFiles;
    /**
     * Generate video from script and images
     */
    generateVideo(scenes: VideoScene[], backgroundMusic?: string, voiceoverUrl?: string): Promise<string>;
}
interface VideoScene {
    id: string;
    text: string;
    startTime: number;
    duration: number;
    visualSuggestions: string[];
    transitions: 'fade-in' | 'fade-out' | 'smooth' | 'cut';
}
interface PodcastSegment {
    type: 'intro' | 'outro' | 'question' | 'answer' | 'content' | 'highlight';
    speaker: 'host' | 'guest' | 'narrator';
    text: string;
    duration: number;
    metadata?: any;
}
interface PodcastMetadata {
    title: string;
    description: string;
    tags: string[];
    category: string;
    duration: string;
    language: string;
}
export declare const mediaGenerationService: MediaGenerationService;
export {};
//# sourceMappingURL=media-generation.service.d.ts.map