export interface UserSubscriptionData {
    subscriptionStatus: 'free' | 'lifetime' | 'active';
    lifetimeAccess: boolean;
    features: Record<string, boolean>;
    purchasedAt?: Date;
    stripeCustomerId?: string;
    metadata?: {
        paymentAmount?: number;
        currency?: string;
        accountVerification?: {
            verifiedAt?: Date;
        };
    };
}
/**
 * Simplified subscription service for multimedia package during migration
 * This provides basic functionality without complex caching dependencies
 */
export declare class SimpleSubscriptionService {
    private db;
    getUserSubscription(userId: string): Promise<UserSubscriptionData>;
    private getDefaultFreeSubscription;
}
export declare const simpleSubscriptionService: SimpleSubscriptionService;
//# sourceMappingURL=simple-subscription.service.d.ts.map