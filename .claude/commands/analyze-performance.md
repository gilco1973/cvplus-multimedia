# Analyze Performance Command

**Command**: `analyze-performance`  
**Purpose**: Monitor and analyze multimedia processing performance metrics  
**Usage**: For optimizing media processing speed and resource usage

## Command Execution
```bash
# Run performance benchmarks
npm run test -- --testNamePattern="performance"

# Monitor memory usage during processing
node --max-old-space-size=4096 scripts/performance/memory-monitor.js

# Analyze processing times
npm run test:coverage -- --verbose

# Profile specific operations
node --prof scripts/performance/profile-video-processing.js
node --prof scripts/performance/profile-audio-processing.js  
node --prof scripts/performance/profile-image-processing.js
```

## Performance Metrics
### Video Processing
- **Target**: < 2x real-time for 1080p encoding
- **Memory**: < 1GB peak usage per stream
- **Quality**: VMAF score > 90 for high quality preset

### Audio Processing
- **Target**: < 0.1x real-time for audio encoding
- **Memory**: < 100MB peak usage
- **Quality**: Transparent quality at 128kbps AAC

### Image Processing
- **Target**: < 500ms for 4K image optimization
- **Memory**: < 200MB peak usage
- **Quality**: SSIM > 0.95 for optimized images

## Monitoring Commands
```bash
# Real-time performance monitoring
npm run dev:monitor

# Generate performance reports
npm run performance:report

# Benchmark against previous versions
npm run benchmark:compare
```

## Optimization Checklist
- [ ] Processing times within targets
- [ ] Memory usage optimized
- [ ] No memory leaks detected
- [ ] CPU utilization efficient
- [ ] Disk I/O minimized
- [ ] Network transfer optimized