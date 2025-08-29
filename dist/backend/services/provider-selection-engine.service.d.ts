export interface ProviderCapabilities {
    videoGeneration: boolean;
    audioGeneration: boolean;
    imageProcessing: boolean;
    maxDuration?: number;
    supportedFormats?: string[];
}
export declare class ProviderSelectionEngine {
    private providers;
    selectOptimalProvider(requirements: any): Promise<string>;
    registerProvider(providerId: string): void;
    getProvider(requirements?: any): string;
    getProviderCapabilities(provider: string): Promise<ProviderCapabilities>;
}
//# sourceMappingURL=provider-selection-engine.service.d.ts.map