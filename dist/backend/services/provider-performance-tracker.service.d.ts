export interface ProviderPerformance {
    providerId: string;
    successRate: number;
    averageResponseTime: number;
    totalRequests: number;
    failureCount: number;
    lastUpdated: Date;
}
export declare class ProviderPerformanceTracker {
    private performanceData;
    recordRequest(providerId: string, success: boolean, responseTime: number): void;
    getPerformance(providerId: string): ProviderPerformance | null;
    getAllPerformanceData(): ProviderPerformance[];
    getTopPerformingProviders(limit?: number): ProviderPerformance[];
    resetPerformanceData(providerId?: string): void;
    trackVideoGeneration(providerId: string, options: any, result: any, generationTime: number, success: boolean): void;
    trackStatusCheck(providerId: string, success: boolean, responseTime: number): void;
    getDashboardData(): {
        providers: ProviderPerformance[];
        summary: {
            totalRequests: number;
            averageSuccessRate: number;
            averageResponseTime: number;
        };
    };
    cleanup(): void;
}
//# sourceMappingURL=provider-performance-tracker.service.d.ts.map