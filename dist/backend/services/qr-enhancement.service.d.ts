import { QRCodeType, QRCodeStyling, PortalUrls, QRCodeAnalytics } from '../types/portal';
interface QRCodeEnhancementOptions {
    updateExisting: boolean;
    generateNew: boolean;
    types: QRCodeType[];
    styling: QRCodeStyling;
    portalUrls: PortalUrls;
}
interface EnhancedQRCode {
    id: string;
    type: QRCodeType;
    url: string;
    label: string;
    styling: QRCodeStyling;
    qrCodeData: string;
    createdAt: Date;
    updatedAt: Date;
}
interface QRCodeUpdateResult {
    success: boolean;
    updatedCount: number;
    generatedCount: number;
    qrCodes: EnhancedQRCode[];
    errors: string[];
}
export declare class QRCodeEnhancementService {
    private db;
    private logger;
    constructor();
    /**
     * Enhance QR codes for a job with portal integration
     */
    enhanceQRCodes(jobId: string, portalUrls: PortalUrls, options?: Partial<QRCodeEnhancementOptions>): Promise<QRCodeUpdateResult>;
    /**
     * Update existing QR codes to point to portal
     */
    private updateExistingQRCodes;
    /**
     * Generate new portal-specific QR codes
     */
    private generatePortalQRCodes;
    /**
     * Get QR configuration for specific type
     */
    private getQRConfigForType;
    /**
     * Generate QR code data (placeholder implementation)
     */
    private generateQRCodeData;
    /**
     * Create QR code image (placeholder implementation)
     */
    private createQRCodeImage;
    /**
     * Get existing QR codes for a job
     */
    private getExistingQRCodes;
    /**
     * Save enhanced QR codes to database
     */
    private saveEnhancedQRCodes;
    /**
     * Get default QR code styling
     */
    private getDefaultStyling;
    /**
     * Get enhanced QR codes for a job
     */
    getEnhancedQRCodes(jobId: string): Promise<EnhancedQRCode[]>;
    /**
     * Track QR code scan
     */
    trackQRCodeScan(jobId: string, qrCodeId: string, scanData: {
        userAgent?: string;
        referrer?: string;
        location?: {
            country?: string;
            city?: string;
        };
        device?: {
            type: 'mobile' | 'tablet' | 'desktop';
            os?: string;
            browser?: string;
        };
    }): Promise<void>;
    /**
     * Update QR code analytics
     */
    private updateQRCodeAnalytics;
    /**
     * Get QR code analytics for a job
     */
    getQRCodeAnalytics(jobId: string): Promise<QRCodeAnalytics | null>;
}
export type { QRCodeEnhancementOptions, EnhancedQRCode, QRCodeUpdateResult };
//# sourceMappingURL=qr-enhancement.service.d.ts.map