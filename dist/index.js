/**
 * CVPlus Multimedia Module - Main Entry Point (Minimal Build)
 *
 * Basic multimedia types and utilities for the CVPlus platform.
 *
 * @author Gil Klainert
 * @version 1.0.0
 * @license PROPRIETARY
 */
// ============================================================================
// CONSTANTS
// ============================================================================
export * from './constants';
// ============================================================================
// UTILITIES
// ============================================================================
export { FileUtils, MediaUtils } from './utils';
// ============================================================================
// VERSION INFO
// ============================================================================
export const VERSION = '1.0.0';
export const MODULE_NAME = '@cvplus/multimedia';
export const MODULE_INFO = {
    name: MODULE_NAME,
    version: VERSION,
    description: 'CVPlus Multimedia - Basic media types and utilities',
    author: 'Gil Klainert',
    license: 'PROPRIETARY'
};
//# sourceMappingURL=index.js.map