/**
 * QR Code Enhancement Firebase Functions
 *
 * Provides Firebase callable functions for enhancing QR codes with portal functionality.
 * Handles QR code generation, updates, analytics, and tracking.
 *
 * @author Gil Klainert
 * @created 2025-08-19
 * @version 1.0
 */
import * as functions from 'firebase-functions/v1';
/**
 * Enhance QR Codes
 *
 * Enhance existing QR codes and generate new portal-specific QR codes for a job.
 */
export declare const enhanceQRCodes: functions.HttpsFunction & functions.Runnable<any>;
/**
 * Get Enhanced QR Codes
 *
 * Retrieve all enhanced QR codes for a job.
 */
export declare const getEnhancedQRCodes: functions.HttpsFunction & functions.Runnable<any>;
/**
 * Track QR Code Scan
 *
 * Track when a QR code is scanned for analytics purposes.
 */
export declare const trackQRCodeScanEnhanced: functions.HttpsFunction & functions.Runnable<any>;
/**
 * Get QR Code Analytics
 *
 * Retrieve QR code analytics for a job.
 */
export declare const getQRCodeAnalytics: functions.HttpsFunction & functions.Runnable<any>;
/**
 * Auto-Enhance QR Codes
 *
 * Automatically enhance QR codes when a portal is generated.
 * This is called internally by the portal generation system.
 */
export declare const autoEnhanceQRCodes: functions.HttpsFunction & functions.Runnable<any>;
/**
 * Generate QR Code Preview
 *
 * Generate a preview of what QR codes would look like with portal enhancement.
 */
export declare const generateQRCodePreview: functions.HttpsFunction & functions.Runnable<any>;
//# sourceMappingURL=qrCodeEnhancement.d.ts.map