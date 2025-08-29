import { PortalUrls } from '../types/portal';
interface QRCodeTemplate {
    id: string;
    name: string;
    description: string;
    style: {
        foregroundColor: string;
        backgroundColor: string;
        logoUrl?: string;
        margin: number;
        errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
        width: number;
        borderRadius?: number;
        gradientType?: 'linear' | 'radial' | 'none';
        gradientColors?: string[];
    };
    frame?: {
        type: 'none' | 'square' | 'circle' | 'rounded';
        color: string;
        width: number;
    };
    callToAction?: {
        text: string;
        position: 'top' | 'bottom' | 'overlay';
        font: string;
        color: string;
    };
}
interface QRCodeConfig {
    id: string;
    jobId: string;
    type: 'profile' | 'contact' | 'portfolio' | 'resume-download' | 'linkedin' | 'custom' | 'portal-primary' | 'portal-chat' | 'portal-contact' | 'portal-download' | 'portal-menu';
    data: string;
    template: QRCodeTemplate;
    qrImageUrl?: string;
    analytics: {
        totalScans: number;
        uniqueScans: number;
        scansByDate: Record<string, number>;
        scansByLocation: Record<string, number>;
        scansByDevice: Record<string, number>;
        scansBySource: Record<string, number>;
    };
    metadata: {
        title: string;
        description: string;
        tags: string[];
        expiresAt?: Date;
        isActive: boolean;
        trackingEnabled: boolean;
    };
    advanced: {
        dynamicContent: boolean;
        redirectUrl?: string;
        shortUrl?: string;
        passwordProtected: boolean;
        geofencing?: {
            enabled: boolean;
            locations: Array<{
                name: string;
                lat: number;
                lng: number;
                radius: number;
            }>;
        };
        timeRestrictions?: {
            enabled: boolean;
            activeHours: {
                start: string;
                end: string;
            };
            activeDays: number[];
        };
    };
    createdAt: Date;
    updatedAt: Date;
}
interface QRScanEvent {
    id: string;
    qrCodeId: string;
    jobId: string;
    timestamp: Date;
    userAgent?: string;
    ipAddress?: string;
    location?: {
        country: string;
        city: string;
        lat?: number;
        lng?: number;
    };
    device: {
        type: 'mobile' | 'tablet' | 'desktop' | 'unknown';
        os: string;
        browser: string;
    };
    referrer?: string;
    sessionId: string;
    isUnique: boolean;
    metadata?: any;
}
export declare class EnhancedQRService {
    private db;
    private defaultTemplates;
    generateQRCode(jobId: string, config: Partial<QRCodeConfig>): Promise<QRCodeConfig>;
    private getProfileData;
    private generateDefaultData;
    private createQRImage;
    trackQRScan(qrCodeId: string, scanData: Partial<QRScanEvent>): Promise<void>;
    private updateQRAnalytics;
    getQRCodes(jobId: string): Promise<QRCodeConfig[]>;
    updateQRCode(jobId: string, qrCodeId: string, updates: Partial<QRCodeConfig>): Promise<void>;
    deleteQRCode(jobId: string, qrCodeId: string): Promise<void>;
    getQRAnalytics(jobId: string, qrCodeId?: string): Promise<any>;
    getDefaultTemplates(): QRCodeTemplate[];
    /**
     * Generate a complete set of QR codes for portal integration
     * Creates QR codes for all portal features (main, chat, contact, download, menu)
     */
    generatePortalQRCodes(jobId: string, portalURLs: PortalUrls): Promise<QRCodeConfig[]>;
    /**
     * Update existing QR codes to point to portal URLs
     * Maintains existing QR code IDs but updates their target URLs
     */
    updateExistingQRCodesToPortal(jobId: string, portalURLs: PortalUrls): Promise<void>;
    /**
     * Create a complete QR code set for different portal features
     * Returns configuration objects without saving to database
     */
    createPortalQRCodeSet(portalURLs: PortalUrls): Promise<Partial<QRCodeConfig>[]>;
    /**
     * Get portal-specific QR code templates
     * Returns templates optimized for portal features
     */
    getPortalTemplates(): QRCodeTemplate[];
    /**
     * Generate QR codes with portal-optimized analytics tracking
     * Includes enhanced tracking for portal-specific metrics
     */
    generatePortalQRWithAnalytics(jobId: string, portalURLs: PortalUrls, trackingOptions?: {
        enableGeofencing?: boolean;
        enableTimeRestrictions?: boolean;
        customTags?: string[];
    }): Promise<QRCodeConfig[]>;
    /**
     * Batch update multiple QR codes for portal migration
     * Efficiently updates multiple QR codes to point to portal URLs
     */
    batchUpdateQRCodesForPortal(jobId: string, portalURLs: PortalUrls, qrCodeIds: string[]): Promise<void>;
}
export {};
//# sourceMappingURL=enhanced-qr.service.d.ts.map