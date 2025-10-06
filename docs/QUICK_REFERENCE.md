# Quick Reference: Changeset-First Workflow

## 🚀 Quick Start

```bash
# 1. Create changeset (ALWAYS FIRST)
pnpm changeset
# Select: stera-icons → minor → "Add new icons"

# 2. Verify version detection
node scripts/version-utils.js info

# 3. Add icons to icons-export.json (external)

# 4. Build icons
node scripts/build-icons.js icons-export.json

# 5. Process changeset when ready
pnpm changeset version
```

## 📋 Essential Commands

### Version Management
```bash
# Check version info
node scripts/version-utils.js info

# Check next version
node scripts/version-utils.js next

# Current version
node scripts/version-utils.js current
```

### Icon Metadata
```bash
# Show summary
node scripts/metadata-utils.js summary

# Find icons by version
node scripts/metadata-utils.js version 3.2.0

# Search icons
node scripts/metadata-utils.js search "chart"

# Recent icons
node scripts/metadata-utils.js recent 7
```

### Build Process
```bash
# Build icons
node scripts/build-icons.js icons-export.json

# Development build
pnpm build:dev

# Production build
pnpm build
```

## ⚠️ Common Issues

### Wrong Version Assigned
**Problem**: New icons getting old version
**Solution**: Create changeset first, then rebuild

### Changeset Not Detected
**Problem**: `Has pending changesets: false`
**Solution**: Check `.changeset/` directory and file format

### Wrong Version Estimated
**Problem**: Minor changeset showing as patch
**Solution**: Verify changeset specifies "minor" not "patch"

## 🎯 Version Bump Types

- **Patch** (3.1.0 → 3.1.1): Bug fixes, minor updates
- **Minor** (3.1.0 → 3.2.0): **New icons** (most common)
- **Major** (3.1.0 → 4.0.0): Breaking changes

## 📖 Full Documentation

See [`CHANGESET_WORKFLOW.md`](CHANGESET_WORKFLOW.md) for complete workflow details.
