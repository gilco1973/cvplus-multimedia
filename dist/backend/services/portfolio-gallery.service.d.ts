/**
 * Portfolio Gallery Service
 * Creates visual showcases for projects and achievements
 */
import { ParsedCV } from '../types/enhanced-models';
interface PortfolioItem {
    id: string;
    type: 'project' | 'achievement' | 'certification' | 'publication' | 'presentation';
    title: string;
    description: string;
    category: string;
    tags: string[];
    date?: Date;
    duration?: string;
    role?: string;
    technologies?: string[];
    impact?: {
        metric: string;
        value: string;
    }[];
    media?: {
        type: 'image' | 'video' | 'document' | 'link';
        url: string;
        thumbnail?: string;
        caption?: string;
    }[];
    links?: {
        type: 'github' | 'website' | 'demo' | 'documentation' | 'other';
        url: string;
        label: string;
    }[];
    collaborators?: string[];
    visibility: 'public' | 'private' | 'unlisted';
}
interface PortfolioGallery {
    items: PortfolioItem[];
    categories: string[];
    statistics: {
        totalProjects: number;
        totalTechnologies: number;
        yearsSpanned: number;
        impactMetrics: {
            metric: string;
            total: string;
        }[];
    };
    layout: {
        style: 'grid' | 'timeline' | 'showcase';
        featuredItems: string[];
        order: 'chronological' | 'category' | 'impact';
    };
    branding: {
        primaryColor: string;
        accentColor: string;
        font: string;
    };
}
export declare class PortfolioGalleryService {
    private openai;
    constructor();
    /**
     * Generate portfolio gallery from CV data
     */
    generatePortfolioGallery(parsedCV: ParsedCV, jobId: string): Promise<PortfolioGallery>;
    /**
     * Get technical skills from skills union type
     */
    private getTechnicalSkills;
    /**
     * Extract projects from work experience
     */
    private extractProjectsFromExperience;
    /**
     * Create achievement portfolio item
     */
    private createAchievementItem;
    /**
     * Check if text describes a publication
     */
    private isPublication;
    /**
     * Create publication portfolio item
     */
    private createPublicationItem;
    /**
     * Generate placeholder media for portfolio items
     */
    private generatePlaceholderMedia;
    /**
     * Calculate portfolio statistics
     */
    private calculateStatistics;
    /**
     * Determine optimal layout for gallery
     */
    private determineOptimalLayout;
    /**
     * Generate branding based on CV
     */
    private generateBranding;
    /**
     * Helper methods
     */
    private extractTagsFromCertification;
    private categorizeProject;
    private calculateDuration;
    private extractImpactMetrics;
    private extractAchievementTitle;
    private extractTechnologiesFromText;
    private extractPublicationTitle;
    private extractResearchTopics;
    private extractDateFromText;
    private parseImpactValue;
    private formatImpactValue;
    /**
     * Store gallery data in Firestore
     */
    private storeGalleryData;
    /**
     * Generate shareable portfolio page
     */
    generateShareablePortfolio(jobId: string, customDomain?: string): Promise<{
        url: string;
        embedCode: string;
    }>;
}
export declare const portfolioGalleryService: PortfolioGalleryService;
export {};
//# sourceMappingURL=portfolio-gallery.service.d.ts.map