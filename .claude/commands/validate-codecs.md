# Validate Codecs Command

**Command**: `validate-codecs`  
**Purpose**: Verify media codec support and encoding/decoding capabilities  
**Usage**: For ensuring multimedia processing supports required formats

## Command Execution
```bash
# Test video codec support
ffprobe -codecs | grep -E "(h264|hevc|vp8|vp9|av1)"

# Test audio codec support  
ffprobe -codecs | grep -E "(aac|mp3|opus|flac|vorbis)"

# Test image format support
node -e "console.log(require('sharp').format)"

# Validate media processing capabilities
npm run test -- --testNamePattern="codec.*validation"
```

## Supported Formats
### Video Codecs
- H.264 (MP4) - Primary format
- HEVC (H.265) - High efficiency
- WebM (VP8/VP9) - Web optimized
- AV1 - Future-proof format

### Audio Codecs  
- AAC - High quality, broad support
- MP3 - Universal compatibility
- Opus - Low latency, high quality
- FLAC - Lossless compression

### Image Formats
- JPEG/JPG - Standard format
- PNG - Lossless with transparency
- WebP - Modern web format
- AVIF - Next-gen compression

## Validation Checklist
- [ ] All required video codecs available
- [ ] Audio encoding/decoding functional
- [ ] Image format conversion working
- [ ] Quality presets configured correctly
- [ ] Bitrate controls operational