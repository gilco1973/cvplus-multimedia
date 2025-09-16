export interface UserSubscription {
    subscriptionStatus: 'free' | 'premium' | 'lifetime';
    lifetimeAccess: boolean;
    features: {
        [key: string]: boolean;
    };
}
export type PremiumFeature = 'webPortal' | 'aiChat' | 'podcast' | 'advancedAnalytics' | 'videoIntroduction' | 'roleDetection' | 'externalData';
//# sourceMappingURL=subscription.types.d.ts.map