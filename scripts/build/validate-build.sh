#!/bin/bash

# CVPlus Multimedia Build Validation Script
# Validates multimedia processing capabilities after build

set -e

echo "🎬 CVPlus Multimedia Build Validation"
echo "====================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Validation functions
validate_typescript() {
    echo -e "${BLUE}📝 Validating TypeScript compilation...${NC}"
    npm run type-check
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ TypeScript validation passed${NC}"
    else
        echo -e "${RED}❌ TypeScript validation failed${NC}"
        exit 1
    fi
}

validate_build_outputs() {
    echo -e "${BLUE}📦 Validating build outputs...${NC}"
    
    # Check if dist directory exists
    if [ ! -d "dist" ]; then
        echo -e "${RED}❌ dist directory not found${NC}"
        exit 1
    fi
    
    # Check for required build files
    required_files=(
        "dist/index.minimal.js"
        "dist/index.minimal.d.ts"
        "dist/components/index.js"
        "dist/services/index.js"
        "dist/processors/index.js"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            echo -e "${RED}❌ Required build file missing: $file${NC}"
            exit 1
        fi
    done
    
    echo -e "${GREEN}✅ Build outputs validation passed${NC}"
}

validate_media_processors() {
    echo -e "${BLUE}🎥 Validating media processors...${NC}"
    
    # Run media processor tests
    npm run test -- --testNamePattern="processor" --passWithNoTests
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Media processors validation passed${NC}"
    else
        echo -e "${RED}❌ Media processors validation failed${NC}"
        exit 1
    fi
}

validate_dependencies() {
    echo -e "${BLUE}📚 Validating dependencies...${NC}"
    
    # Check critical multimedia dependencies
    required_deps=(
        "@ffmpeg/ffmpeg"
        "sharp"
        "fluent-ffmpeg" 
        "music-metadata"
        "firebase-admin"
    )
    
    for dep in "${required_deps[@]}"; do
        if ! npm list "$dep" > /dev/null 2>&1; then
            echo -e "${RED}❌ Required dependency missing: $dep${NC}"
            exit 1
        fi
    done
    
    echo -e "${GREEN}✅ Dependencies validation passed${NC}"
}

validate_exports() {
    echo -e "${BLUE}📤 Validating package exports...${NC}"
    
    # Test importing built modules
    node -e "
        try {
            require('./dist/index.minimal.js');
            console.log('✅ Main export working');
        } catch (e) {
            console.error('❌ Main export failed:', e.message);
            process.exit(1);
        }
    "
    
    echo -e "${GREEN}✅ Package exports validation passed${NC}"
}

# Run all validations
main() {
    echo -e "${YELLOW}Starting multimedia build validation...${NC}"
    
    validate_typescript
    validate_build_outputs  
    validate_media_processors
    validate_dependencies
    validate_exports
    
    echo ""
    echo -e "${GREEN}🎉 All multimedia build validations passed!${NC}"
    echo -e "${GREEN}📦 Multimedia submodule is ready for use${NC}"
}

# Execute main function
main "$@"