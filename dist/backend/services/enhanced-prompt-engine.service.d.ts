export interface PromptEnhancementOptions {
    includePersonality?: boolean;
    includeSkills?: boolean;
    includeExperience?: boolean;
    tone?: 'professional' | 'casual' | 'creative';
    length?: 'brief' | 'standard' | 'detailed';
}
export interface PromptEngineOptions extends PromptEnhancementOptions {
    model?: string;
    temperature?: number;
    maxTokens?: number;
    targetIndustry?: string;
    targetAudience?: string;
    companySize?: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    optimizationLevel?: 'basic' | 'standard' | 'advanced' | 'premium';
}
export interface EnhancedScriptResult {
    script: string;
    metadata?: {
        tone?: string;
        length?: number;
        enhancementApplied: boolean;
    };
    qualityMetrics?: {
        relevance: number;
        engagement: number;
        clarity: number;
        overall: number;
        overallScore: number;
        industryAlignment: number;
    };
}
export declare class EnhancedPromptEngine {
    enhancePrompt(basePrompt: string, cvData: any, options?: PromptEnhancementOptions): Promise<string>;
    private extractPersonalityContext;
    private extractSkillsContext;
    private extractExperienceContext;
    private adjustTone;
    generateEnhancedScript(baseScript: string, cvData: any, options?: PromptEngineOptions): Promise<EnhancedScriptResult>;
}
export declare const advancedPromptEngine: EnhancedPromptEngine;
//# sourceMappingURL=enhanced-prompt-engine.service.d.ts.map