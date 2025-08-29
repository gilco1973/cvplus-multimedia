/**
 * Enhanced Job Models - Main Interface
 *
 * Core enhanced job interface and related models for CV enhancement features.
 * Properly modularized to maintain <200 line compliance through separation of concerns.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
export type { EnhancedJob } from './enhanced-job-core';
export type { PortfolioImage, CalendarSettings, Testimonial, PersonalityProfile } from './enhanced-media';
export type { SkillsVisualization, SkillCategory, LanguageSkill, Certification } from './enhanced-skills';
export interface PrivacySettings {
    /** Show contact information publicly */
    showContactInfo: boolean;
    /** Show social media links */
    showSocialLinks: boolean;
    /** Allow CV download by visitors */
    allowCVDownload: boolean;
    /** Show analytics data to profile visitors */
    showAnalytics: boolean;
    /** Allow visitors to send chat messages */
    allowChatMessages: boolean;
    /** Make profile publicly accessible */
    publicProfile: boolean;
    /** Allow profile to be found in search engines */
    searchable: boolean;
    /** Display personality profile section */
    showPersonalityProfile: boolean;
    /** Display testimonials section */
    showTestimonials: boolean;
    /** Display portfolio section */
    showPortfolio: boolean;
    /** Privacy level enabled */
    enabled?: boolean;
    /** Masking rules for sensitive information */
    maskingRules?: {
        maskEmail?: boolean;
        maskPhone?: boolean;
        maskAddress?: boolean;
    };
    /** Whether to show public email */
    publicEmail?: boolean;
    /** Whether to show public phone */
    publicPhone?: boolean;
    /** Require contact form submission before allowing CV download */
    requireContactFormForCV: boolean;
}
//# sourceMappingURL=enhanced-job.d.ts.map