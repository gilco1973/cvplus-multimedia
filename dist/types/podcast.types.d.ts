/**
 * Enhanced Podcast Types for Unified Component System
 * Combines features from parent project and multimedia submodule
 */
export interface PodcastData {
    title?: string;
    description?: string;
    audioUrl?: string;
    transcript?: string;
    duration?: number;
    chapters?: PodcastChapter[];
    generationStatus?: PodcastStatus;
    metadata?: {
        style?: 'professional' | 'conversational' | 'storytelling';
        generatedAt?: string;
        fileSize?: number;
        format?: string;
    };
}
export interface PodcastChapter {
    title: string;
    startTime: number;
    endTime: number;
    description?: string;
}
export type PodcastStatus = 'not-started' | 'pending' | 'generating' | 'ready' | 'failed' | 'completed';
export interface AudioState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    playbackRate: number;
    isMuted: boolean;
    isLoading: boolean;
    isBuffering: boolean;
}
export interface TranscriptSegment {
    start: number;
    end: number;
    text: string;
    isActive: boolean;
    speaker?: 'host1' | 'host2' | 'narrator';
    emotion?: 'excited' | 'curious' | 'thoughtful' | 'impressed';
}
export interface PodcastGenerationOptions {
    duration?: 'short' | 'medium' | 'long';
    style?: 'professional' | 'conversational' | 'storytelling';
    focus?: 'achievements' | 'journey' | 'skills' | 'balanced';
    voice?: {
        host1?: string;
        host2?: string;
    };
}
export interface PodcastStatusResponse {
    status: PodcastStatus;
    data?: PodcastData;
    error?: string;
    message?: string;
    progress?: number;
}
export interface PodcastPlayerEvents {
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onTimeUpdate?: (currentTime: number) => void;
    onError?: (error: Error) => void;
    onStatusChange?: (status: PodcastStatus) => void;
    onTranscriptSegmentChange?: (segment: TranscriptSegment | null) => void;
}
export interface PodcastPlayerCustomization {
    autoplay?: boolean;
    showTranscript?: boolean;
    showDownload?: boolean;
    showSharing?: boolean;
    showRegeneration?: boolean;
    showChapters?: boolean;
    showWaveform?: boolean;
    theme?: 'minimal' | 'full' | 'compact' | 'modern';
    colorScheme?: 'light' | 'dark' | 'auto';
    style?: 'professional' | 'conversational' | 'storytelling';
    controls?: {
        playbackSpeed?: boolean;
        skip?: boolean;
        volume?: boolean;
        progress?: boolean;
    };
}
//# sourceMappingURL=podcast.types.d.ts.map