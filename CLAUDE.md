# Multimedia - CVPlus Submodule

**Author**: Gil Klainert  
**Domain**: Multimedia Processing & Media Generation  
**Type**: CVPlus Git Submodule  
**Independence**: Fully autonomous build and run capability

## Critical Requirements

⚠️ **MANDATORY**: You are a submodule of the CVPlus project. You MUST ensure you can run autonomously in every aspect.

🚫 **ABSOLUTE PROHIBITION**: Never create mock data or use placeholders - EVER!

🚨 **CRITICAL**: Never delete ANY files without explicit user approval - this is a security violation.

## Dependency Resolution Strategy

### Layer Position: Layer 2 (Domain Services)
**Multimedia depends on Core, Auth, and I18n modules.**

### Allowed Dependencies
```typescript
// ✅ ALLOWED: Layer 0 (Core)
import { User, ApiResponse, MediaConfig } from '@cvplus/core';
import { validateFile, generateHash } from '@cvplus/core/utils';
import { StorageConfig } from '@cvplus/core/config';

// ✅ ALLOWED: Layer 1 (Base Services)
import { AuthService } from '@cvplus/auth';
import { TranslationService } from '@cvplus/i18n';

// ✅ ALLOWED: External libraries
import * as ffmpeg from 'fluent-ffmpeg';
import { Storage } from '@google-cloud/storage';
```

### Forbidden Dependencies  
```typescript
// ❌ FORBIDDEN: Same layer modules (Layer 2)
import { CVProcessor } from '@cvplus/cv-processing'; // NEVER
import { AnalyticsService } from '@cvplus/analytics'; // NEVER

// ❌ FORBIDDEN: Higher layer modules (Layer 3+)
import { PremiumService } from '@cvplus/premium'; // NEVER
import { AdminService } from '@cvplus/admin'; // NEVER
```

### Dependency Rules for Multimedia
1. **Foundation Access**: Can use Core, Auth, and I18n
2. **No Peer Dependencies**: No dependencies on other Layer 2 modules
3. **Provider Role**: Provides media processing services to higher layers
4. **Storage Management**: Handles all media storage and optimization
5. **Security Aware**: Uses Auth for user context and media permissions

### Import/Export Patterns
```typescript
// Correct imports from lower layers
import { MediaConfig, User } from '@cvplus/core';
import { AuthService } from '@cvplus/auth';
import { TranslationService } from '@cvplus/i18n';

// Correct exports for higher layers
export interface MultimediaService {
  generateVideo(content: string, user: User): Promise<VideoResult>;
  createPodcast(script: string, voice: VoiceConfig): Promise<AudioResult>;
}
export class FFmpegMultimediaService implements MultimediaService { /* */ }

// Higher layers import from Multimedia
// @cvplus/premium: import { MultimediaService } from '@cvplus/multimedia';
// @cvplus/admin: import { MultimediaService } from '@cvplus/multimedia';
```

### Build Dependencies
- **Builds After**: Core, Auth, I18n must be built first
- **Builds Before**: Premium, Recommendations, Admin depend on this
- **Media Validation**: Media processing tools validated during build

## Submodule Overview

The CVPlus Multimedia submodule is the comprehensive media processing and generation engine that transforms traditional CVs into rich, interactive multimedia experiences. This submodule handles all aspects of media processing, optimization, storage, and delivery including video generation, podcast creation, image optimization, QR code enhancement, and portfolio gallery management.

**Core Mission**: Transform static CV content into dynamic multimedia presentations through intelligent video generation, professional podcast creation, optimized image galleries, and enhanced QR code experiences.

## Domain Expertise

### Primary Responsibilities
- **Video Generation**: AI-powered video introductions using HeyGen and RunwayML APIs
- **Podcast Creation**: Professional podcast generation with transcript analysis and waveform visualization
- **Image Processing**: Advanced image optimization, resizing, format conversion, and gallery management
- **QR Code Enhancement**: Dynamic QR code generation with branding, tracking, and analytics
- **Media Optimization**: Intelligent compression, format selection, and performance optimization
- **Storage Management**: Firebase Storage integration, CDN optimization, and media delivery
- **Portfolio Galleries**: Dynamic gallery creation with responsive layouts and accessibility features

### Key Features
- **Advanced Video Processing**: H.264/HEVC/WebM encoding with adaptive bitrate streaming
- **Professional Audio Processing**: AAC/MP3/Opus encoding with noise reduction and waveform generation
- **Image Optimization Pipeline**: WebP/AVIF conversion with responsive sizing and quality optimization
- **Multi-Provider Video Generation**: Seamless integration with HeyGen, RunwayML, and future providers
- **Real-time Processing Status**: Webhook monitoring, progress tracking, and error recovery
- **Performance Monitoring**: Circuit breakers, retry mechanisms, and provider failover
- **Accessibility Support**: Alt text generation, screen reader compatibility, and WCAG compliance

### Integration Points
- **CVPlus Core**: Shared types, utilities, and configuration management
- **CVPlus Auth**: User authentication and premium feature access control
- **CVPlus Premium**: Subscription-based feature gates and usage tracking
- **CVPlus Analytics**: Media consumption analytics and performance metrics
- **CVPlus Public Profiles**: Social media integration and public gallery sharing
- **Firebase Functions**: Backend service integration and webhook handling
- **External APIs**: HeyGen, RunwayML, Firebase Storage, CDN providers

## Specialized Subagents

### Primary Specialist
- **multimedia-specialist**: Domain expert for all multimedia processing, video generation, podcast creation, image optimization, and QR code enhancement. Primary orchestrator for all multimedia-related tasks and architectural decisions.

### Supporting Specialists
- **frontend-expert**: React component development for multimedia UIs, video players, audio players, and gallery interfaces
- **backend-expert**: Firebase Functions development for media processing services, webhook handlers, and API integrations
- **performance-specialist**: Media processing optimization, memory management, and performance benchmarking
- **security-specialist**: Media validation, secure upload handling, and API key management
- **ai-analysis**: Integration with AI services for video generation and content analysis

### Universal Specialists
- **code-reviewer**: Quality assurance and security review for all multimedia implementations
- **debugger**: Complex troubleshooting and error resolution for media processing pipelines
- **git-expert**: All git operations and repository management for multimedia submodule
- **test-writer-fixer**: Comprehensive testing and test maintenance for multimedia functionality

## Technology Stack

### Core Technologies
- **Video Processing**: FFmpeg.js, fluent-ffmpeg, HeyGen API, RunwayML API
- **Audio Processing**: Web Audio API, music-metadata, waveform generation libraries
- **Image Processing**: Sharp.js, image-size, format detection libraries
- **QR Code Generation**: Custom QR code libraries with branding support
- **Storage**: Firebase Storage, AWS S3 adapters, CDN integration
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide React icons
- **Backend**: Firebase Functions, Node.js, TypeScript

### Dependencies
- **Media Libraries**: @ffmpeg/ffmpeg, fluent-ffmpeg, sharp, music-metadata
- **API Integration**: axios for HTTP requests, firebase-admin for backend services
- **File Handling**: file-type, mime-types, image-size for media validation
- **React Integration**: react-intersection-observer for performance optimization
- **Development**: TypeScript, Jest, ESLint, Rimraf for builds

### Build System
- **Build Command**: `npm run build` (includes types and JS compilation)
- **Test Command**: `npm run test` (comprehensive test suite with coverage)
- **Type Check**: `npm run type-check` (TypeScript validation)
- **Development**: `npm run dev` (watch mode for development)
- **Specialized Builds**: `npm run build:frontend`, `npm run build:standalone`

## Development Workflow

### Setup Instructions
1. Clone multimedia submodule repository
2. Install dependencies: `npm install`
3. Configure environment variables for HeyGen, RunwayML APIs
4. Set up Firebase Storage credentials
5. Run type checks: `npm run type-check`
6. Run tests: `npm test`
7. Build: `npm run build`

### Media Processing Pipeline
1. **Media Validation**: File type, size, and format validation
2. **Quality Analysis**: Content analysis and optimization recommendations
3. **Processing**: Format conversion, compression, and optimization
4. **Storage**: Upload to Firebase Storage with CDN integration
5. **Monitoring**: Real-time progress tracking and error recovery
6. **Delivery**: Optimized media delivery with performance analytics

### Testing Requirements
- **Coverage Requirement**: Minimum 85% code coverage
- **Test Framework**: Jest with ts-jest for TypeScript support
- **Test Types**: Unit tests for processors, integration tests for services, end-to-end tests for media pipelines
- **Performance Tests**: Memory usage, processing time, and quality benchmarks
- **Media Validation**: Codec support, format conversion, and quality assessment tests

### Deployment Process
- Firebase Functions deployment for backend services
- CDN configuration for optimized media delivery
- Environment-specific configuration for different providers
- Monitoring setup for real-time processing status

## Integration Patterns

### CVPlus Ecosystem Integration
- **Import Pattern**: `@cvplus/multimedia`
- **Export Pattern**: Comprehensive multimedia services, components, and utilities
- **Dependency Chain**: Depends on @cvplus/core, @cvplus/auth for shared functionality
- **Provider Integration**: HeyGen, RunwayML APIs for video generation
- **Storage Integration**: Firebase Storage with CDN optimization

### Firebase Functions Integration
- **Video Generation Functions**: generateVideoIntroduction, heygen-webhook, runwayml-status-check
- **Podcast Functions**: generatePodcast, podcastStatus, podcastStatusPublic
- **Gallery Functions**: portfolioGallery with image processing and optimization
- **QR Enhancement**: enhancedQR, qrCodeEnhancement with branding and tracking
- **Media Processing**: mediaGeneration orchestration and provider management

### Component Exports
- **Video Components**: VideoIntroduction, VideoPlayer, VideoAnalyticsDashboard
- **Audio Components**: AIPodcastPlayer, PodcastPlayer with waveform visualization
- **Gallery Components**: PortfolioGallery, LightboxModal, ProjectCard
- **Upload Components**: FileUpload, ProfilePictureUpload with validation
- **Utility Components**: ErrorBoundary, FeatureWrapper for robust UX

## Scripts and Automation

### Available Scripts
- **test-media-pipeline**: Comprehensive media processing pipeline validation
- **validate-codecs**: Verify video/audio/image codec support and capabilities
- **analyze-performance**: Monitor processing times, memory usage, and optimization metrics
- **build-optimization**: Automated build process with quality checks
- **deployment-validation**: Pre-deployment testing and configuration validation

### Build Automation
- Multi-target build system (minimal, frontend, standalone configurations)
- TypeScript compilation with multiple tsconfig profiles
- Automated testing with coverage reporting
- ESLint and Prettier integration for code quality
- Rimraf for clean build processes

## Quality Standards

### Code Quality
- TypeScript strict mode enabled with comprehensive type definitions
- ESLint configuration with multimedia-specific rules
- Prettier formatting for consistent code style
- All files must be under 200 lines for maintainability
- Comprehensive error handling with circuit breaker patterns

### Security Requirements
- Secure API key management with Firebase Secrets
- Input validation for all media uploads and processing
- CORS configuration for secure cross-origin requests
- Rate limiting and abuse prevention for API endpoints
- Secure webhook validation for external service integration

### Performance Requirements
- **Video Processing**: < 2x real-time for 1080p encoding
- **Audio Processing**: < 0.1x real-time for audio encoding
- **Image Processing**: < 500ms for 4K image optimization
- **Memory Usage**: Optimized for concurrent processing
- **CDN Integration**: Sub-100ms delivery for cached media

### Accessibility Requirements
- Alt text generation for all processed images
- Screen reader compatibility for multimedia interfaces
- Keyboard navigation support for video and audio players
- WCAG 2.1 AA compliance for all multimedia components
- Captions and transcripts for video content

## Media Processing Commands

### Video Processing
```bash
# Test video generation pipeline
npm run test -- --testNamePattern="video.*generation"

# Validate video codecs and formats
ffprobe -codecs | grep -E "(h264|hevc|vp8|vp9)"

# Performance benchmark for video processing
npm run test -- src/processors/VideoProcessor.performance.test.ts
```

### Audio Processing
```bash
# Test podcast generation pipeline
npm run test -- --testNamePattern="podcast.*generation"

# Validate audio processing capabilities
npm run test -- src/services/audio/

# Test waveform generation
npm run test -- src/services/audio/WaveformGenerator.test.ts
```

### Image Processing
```bash
# Test image optimization pipeline
npm run test -- --testNamePattern="image.*optimization"

# Validate image format conversion
npm run test -- src/processors/ImageProcessor.test.ts

# Test gallery generation
npm run test -- src/services/image/ImageService.test.ts
```

## CVPlus Integration Procedures

### Multimedia Generation Flow
1. **CV Analysis**: Extract multimedia enhancement opportunities from CV data
2. **Content Planning**: Generate scripts, layouts, and media requirements
3. **Media Production**: Execute video generation, podcast creation, or image processing
4. **Quality Assurance**: Validate output quality and performance metrics
5. **Integration**: Seamlessly integrate generated media into CV presentation
6. **Analytics**: Track engagement and performance metrics

### Feature Integration Patterns
- **Video Introductions**: Dynamic video generation based on CV content and user preferences
- **Professional Podcasts**: AI-generated podcast content with professional audio processing
- **Portfolio Galleries**: Responsive image galleries with advanced filtering and lightbox functionality
- **QR Code Branding**: Custom-branded QR codes with tracking and analytics integration
- **Social Media Integration**: Optimized media formats for various social platforms

## Troubleshooting

### Common Issues
- **Video Generation Failures**: Provider API timeouts, quota exceeded, invalid parameters
- **Audio Processing Issues**: Codec incompatibility, waveform generation errors, file corruption
- **Image Optimization Problems**: Format conversion failures, quality degradation, memory issues
- **Storage Integration**: Firebase permissions, CDN configuration, upload failures
- **Performance Bottlenecks**: Memory leaks, processing delays, concurrent operation conflicts

### Debug Commands
```bash
# Debug video generation issues
npm run test -- --verbose src/services/video/
DEBUG=heygen:* npm run test

# Debug audio processing problems
npm run test -- --verbose src/services/audio/
DEBUG=podcast:* npm run test

# Debug storage integration
npm run test -- --verbose src/storage/
DEBUG=firebase:* npm run test

# Monitor performance issues
npm run test:coverage -- --detectOpenHandles
node --prof --heap-prof scripts/performance/monitor.js
```

### Support Resources
- HeyGen API Documentation: Video generation integration guides
- RunwayML API Documentation: Advanced video processing capabilities
- Firebase Storage Documentation: Storage optimization and CDN setup
- FFmpeg Documentation: Video/audio processing and codec information
- Sharp.js Documentation: Image processing and optimization techniques

## Advanced Features

### AI-Powered Enhancements
- **Intelligent Video Scripts**: AI-generated video introduction scripts based on CV analysis
- **Dynamic Content Adaptation**: Responsive content generation based on user industry and role
- **Quality Optimization**: AI-driven quality settings for optimal file size and visual quality
- **Accessibility Enhancement**: Automatic alt text generation and accessibility feature detection

### Provider Management
- **Multi-Provider Architecture**: Seamless switching between video generation providers
- **Failover Mechanisms**: Automatic provider switching on failures or quota limits  
- **Performance Monitoring**: Real-time provider performance tracking and optimization
- **Cost Optimization**: Intelligent provider selection based on cost and quality metrics

### Future Roadmap
- **Real-time Video Processing**: Live video generation and streaming capabilities
- **Advanced Analytics**: Detailed engagement metrics and conversion tracking
- **Mobile Optimization**: Native mobile app integration and processing
- **Collaborative Features**: Multi-user media project collaboration and sharing