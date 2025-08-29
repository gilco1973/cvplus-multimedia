/**
 * HeyGen Webhook Handler Function
 *
 * Firebase Function to handle HeyGen webhook callbacks for real-time
 * video generation status updates with comprehensive error handling.
 *
 * @author Gil Klainert
 * @version 1.0.0
 */
/**
 * HeyGen Webhook Handler
 *
 * Receives webhook callbacks from HeyGen API when video generation
 * status changes (queued -> processing -> completed/failed)
 */
export declare const heygenWebhook: import("firebase-functions/v2/https").HttpsFunction;
/**
 * General Video Webhook Handler
 *
 * Generic webhook endpoint that can handle multiple providers
 * based on the provider parameter in the URL path
 */
export declare const videoWebhook: import("firebase-functions/v2/https").HttpsFunction;
/**
 * Webhook Health Check Endpoint
 *
 * Simple health check endpoint for monitoring webhook availability
 */
export declare const webhookHealth: import("firebase-functions/v2/https").HttpsFunction;
//# sourceMappingURL=heygen-webhook.d.ts.map