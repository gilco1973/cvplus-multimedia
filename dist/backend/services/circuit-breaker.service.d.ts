export interface CircuitBreakerConfig {
    failureThreshold: number;
    resetTimeoutMs: number;
    monitoringPeriodMs: number;
}
export declare enum CircuitState {
    CLOSED = "CLOSED",
    OPEN = "OPEN",
    HALF_OPEN = "HALF_OPEN"
}
export declare class CircuitBreakerService {
    private state;
    private failureCount;
    private lastFailureTime?;
    private config;
    constructor(config?: CircuitBreakerConfig);
    execute<T>(operation: () => Promise<T>, fallback?: () => Promise<T>): Promise<T>;
    private onSuccess;
    private onFailure;
    private shouldAttemptReset;
    getState(): CircuitState;
    getFailureCount(): number;
    registerProvider(providerId: string): void;
    isOpen(): boolean;
    recordSuccess(providerId?: string): void;
    recordFailure(providerId?: string): void;
    getStatistics(): {
        state: CircuitState;
        failureCount: number;
        lastFailureTime?: Date;
        uptime?: number;
    };
    cleanup(): void;
}
//# sourceMappingURL=circuit-breaker.service.d.ts.map