export interface RecoveryStrategy {
    retryAttempts: number;
    backoffMultiplier: number;
    maxDelay: number;
    fallbackProvider?: string;
}
export declare class ErrorRecoveryEngine {
    private defaultStrategy;
    executeWithRecovery<T>(operation: () => Promise<T>, strategy?: RecoveryStrategy): Promise<T>;
    recoverFromError(error: Error, context: any): Promise<any>;
    createRecoveryContext(data: any): any;
    handleError(error: Error, context: any): Promise<any>;
    getRecoveryStatistics(): {
        totalAttempts: number;
        successfulRecoveries: number;
        failedRecoveries: number;
        averageRetryCount: number;
    };
}
//# sourceMappingURL=error-recovery-engine.service.d.ts.map