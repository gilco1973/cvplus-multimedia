type PremiumFeature = 'webPortal' | 'aiChat' | 'podcast' | 'advancedAnalytics' | 'videoIntroduction' | 'roleDetection' | 'externalData';
export declare const withPremiumAccess: (feature: PremiumFeature, handler: Function) => (request: any, context?: any) => Promise<any>;
export {};
//# sourceMappingURL=simplePremiumGuard.d.ts.map