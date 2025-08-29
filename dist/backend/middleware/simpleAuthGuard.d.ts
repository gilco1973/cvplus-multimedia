import { CallableRequest } from 'firebase-functions/v2/https';
export interface AuthenticatedRequest extends CallableRequest {
    auth: {
        uid: string;
        token: any;
    };
}
export declare const requireAuth: (request: any) => Promise<AuthenticatedRequest>;
export declare const withAuth: (handler: (request: AuthenticatedRequest, context?: any) => Promise<any>) => (request: any, context?: any) => Promise<any>;
//# sourceMappingURL=simpleAuthGuard.d.ts.map