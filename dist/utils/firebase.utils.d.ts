/**
 * Firebase Utilities for Multimedia Submodule
 * Provides functions for calling Firebase Functions from the multimedia components
 */
export declare const callFirebaseFunction: (functionName: string, data: any) => Promise<any>;
export declare const formatTime: (seconds: number) => string;
export declare const estimateAudioDuration: (text: string) => number;
export declare const generateWaveformData: (audioBuffer?: ArrayBuffer) => number[];
//# sourceMappingURL=firebase.utils.d.ts.map