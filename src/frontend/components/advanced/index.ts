/**
 * Advanced Components for Multimedia Module
 * 
 * This module exports advanced multimedia components that provide sophisticated
 * processing capabilities, analytics, and complex user interactions.
 */

// Analytics Components
export { VideoAnalyticsDashboard } from './analytics';
export * from './analytics/types';

// Advanced Processing Components
export * from './processing';

// Multi-provider Components
export * from './providers';

// Real-time Monitoring Components
export * from './monitoring';

// Type exports for advanced components
export type {
  AnalyticsDashboardProps,
  ProcessingOptions,
  MonitoringConfig,
  ProviderSettings
} from './types';