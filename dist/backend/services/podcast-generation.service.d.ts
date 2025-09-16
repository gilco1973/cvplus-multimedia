import { ParsedCV } from '../types/enhanced-models';
export declare class PodcastGenerationService {
    private openai;
    private elevenLabsApiKey;
    private voiceConfig;
    constructor();
    /**
     * Safely retrieve secret values from Firebase Functions secrets
     */
    private getSecretValue;
    /**
     * Validate environment and dependencies
     */
    private validateEnvironment;
    /**
     * Generate a conversational podcast from CV data
     */
    generatePodcast(parsedCV: ParsedCV, jobId: string, userId: string, options?: {
        duration?: 'short' | 'medium' | 'long';
        style?: 'professional' | 'casual' | 'enthusiastic';
        focus?: 'achievements' | 'journey' | 'skills' | 'balanced';
    }): Promise<{
        audioUrl: string;
        transcript: string;
        duration: string;
        chapters: Array<{
            title: string;
            startTime: number;
            endTime: number;
        }>;
    }>;
    /**
     * Get technical skills from skills union type
     */
    private getTechnicalSkills;
    /**
     * Generate a conversational script using GPT-4
     */
    private generateConversationalScript;
    /**
     * Parse script text into segments
     */
    private parseScriptToSegments;
    /**
     * Clean script text of stage directions and emotional cues
     */
    private cleanScriptText;
    /**
     * Generate audio for each segment using ElevenLabs
     */
    private generateAudioSegments;
    /**
     * Merge audio segments into final podcast using FFmpeg
     */
    private mergeAudioSegments;
    /**
     * Generate silence file using FFmpeg
     * Note: Currently disabled due to lavfi compatibility issues
     * Pauses are handled by skipping silence generation for now
     */
    private generateSilenceFile;
    /**
     * Clean up temporary files with enhanced error handling
     */
    private cleanupTempFiles;
    /**
     * Generate template-based script as fallback
     */
    private generateTemplateScript;
    /**
     * Generate chapters from script
     */
    private generateChapters;
    /**
     * Format script as readable transcript
     */
    private formatTranscript;
    /**
     * Estimate audio duration from text with validation
     */
    private estimateAudioDuration;
    /**
     * Generate silence buffer
     */
    private generateSilence;
    /**
     * Get voice settings optimized for emotion and speaker
     */
    private getVoiceSettingsForEmotion;
    /**
     * Calculate total duration
     */
    private calculateDuration;
}
export declare function getPodcastGenerationService(): PodcastGenerationService;
export declare const podcastGenerationService: {
    generatePodcast: (parsedCV: any, jobId: string, userId: string, options?: any) => Promise<{
        audioUrl: string;
        transcript: string;
        duration: string;
        chapters: Array<{
            title: string;
            startTime: number;
            endTime: number;
        }>;
    }>;
};
//# sourceMappingURL=podcast-generation.service.d.ts.map