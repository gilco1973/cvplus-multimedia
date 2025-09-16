export interface Job {
    id: string;
    userId: string;
    status: 'pending' | 'processing' | 'parsed' | 'analyzed' | 'generating' | 'completed' | 'failed';
    fileUrl?: string;
    mimeType?: string;
    isUrl?: boolean;
    parsedData?: ParsedCV;
    generatedCV?: {
        html: string;
        htmlUrl?: string;
        pdfUrl?: string;
        docxUrl?: string;
        features?: string[];
    };
    selectedTemplate?: string;
    selectedFeatures?: string[];
    error?: string;
    createdAt: any;
    updatedAt: any;
    quickCreate?: boolean;
    userInstructions?: string;
    piiDetection?: {
        hasPII: boolean;
        detectedTypes: string[];
        recommendations: string[];
    };
}
export interface ParsedCV {
    personalInfo?: {
        name?: string;
        title?: string;
        email?: string;
        phone?: string;
        address?: string;
        summary?: string;
        linkedin?: string;
        github?: string;
        website?: string;
        photo?: string;
        age?: number;
        maritalStatus?: string;
        gender?: string;
        nationality?: string;
    };
    personal?: {
        name?: string;
        title?: string;
        email?: string;
        phone?: string;
        address?: string;
        summary?: string;
        linkedin?: string;
        github?: string;
        website?: string;
        photo?: string;
        age?: number;
        maritalStatus?: string;
        gender?: string;
        nationality?: string;
    };
    experience?: Array<{
        company: string;
        position: string;
        role?: string;
        duration: string;
        startDate: string;
        endDate?: string;
        description?: string;
        achievements?: string[];
        technologies?: string[];
        companyLogo?: string;
    }>;
    education?: Array<{
        institution: string;
        degree: string;
        field: string;
        graduationDate: string;
        startDate?: string;
        endDate?: string;
        gpa?: string;
        honors?: string[];
        description?: string;
    }>;
    skills?: string[] | {
        technical?: string[];
        soft?: string[];
        languages?: string[];
        tools?: string[];
        frontend?: string[];
        backend?: string[];
        databases?: string[];
        cloud?: string[];
        competencies?: string[];
        frameworks?: string[];
        expertise?: string[];
        [key: string]: string[] | undefined;
    };
    achievements?: string[];
    certifications?: Array<{
        name: string;
        issuer: string;
        date: string;
        credentialId?: string;
        certificateImage?: string;
    }>;
    projects?: Array<{
        name: string;
        description: string;
        technologies: string[];
        url?: string;
        images?: string[];
    }>;
    publications?: Array<{
        title: string;
        publication: string;
        date: string;
        url?: string;
    }>;
    interests?: string[];
    summary?: string;
    customSections?: {
        [sectionName: string]: string;
    };
    languages?: Array<{
        language: string;
        proficiency: string;
    }>;
    references?: Array<{
        name: string;
        title?: string;
        position?: string;
        company: string;
        email?: string;
        phone?: string;
        contact?: string;
    }>;
}
export interface CVRecommendation {
    id: string;
    type: 'content' | 'structure' | 'formatting' | 'section_addition' | 'keyword_optimization';
    category: 'professional_summary' | 'experience' | 'skills' | 'education' | 'achievements' | 'formatting' | 'ats_optimization';
    title: string;
    description: string;
    currentContent?: string;
    suggestedContent?: string;
    impact: 'high' | 'medium' | 'low';
    priority: number;
    section: string;
    actionRequired: 'replace' | 'add' | 'modify' | 'reformat';
    keywords?: string[];
    estimatedScoreImprovement: number;
}
export interface CVTransformationResult {
    originalCV: ParsedCV;
    improvedCV: ParsedCV;
    appliedRecommendations: CVRecommendation[];
    transformationSummary: {
        totalChanges: number;
        sectionsModified: string[];
        newSections: string[];
        keywordsAdded: string[];
        estimatedScoreIncrease: number;
    };
    comparisonReport: {
        beforeAfter: Array<{
            section: string;
            before: string;
            after: string;
            improvement: string;
        }>;
    };
}
//# sourceMappingURL=job.d.ts.map