# Quick Reference: Changeset-First Workflow

## 🚀 Quick Start

```bash
# 1. Create changeset (ALWAYS FIRST)
pnpm changeset
# Select: stera-icons → minor → "Add new icons"

# 2. Verify version detection
node scripts/hash-versioning.js info

# 3. Add icons to icons-export.json (external)

# 4. Build icons
node scripts/build-icons.js icons-export.json

# 5. Commit and push
git add .
git commit -m "feat: add new icons"
git push

# 6. GitHub Actions takes over
# - Creates "Version Packages" PR
# - Review and merge PR
# - Auto-publishes to npm
```

## 📋 Essential Commands

### Version Management
```bash
# Check version info
node scripts/hash-versioning.js info

# Check next version
node scripts/hash-versioning.js next

# Current version
node scripts/hash-versioning.js current
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

## 🚢 Release Checklist (GitHub Actions)

```bash
# ✅ Step 1: Create changeset
pnpm changeset
# Select package, bump type, description

# ✅ Step 2: Build icons (if applicable)
node scripts/build-icons.js icons-export.json

# ✅ Step 3: Commit & push changeset
git add .
git commit -m "feat: add new icons"
git push

# ✅ Step 4: Wait for "Version Packages" PR
# GitHub Action automatically creates it

# ✅ Step 5: Review and merge PR
# Review CHANGELOG and version bump

# ✅ Step 6: GitHub Action publishes
# Automatically: version + build + publish + tag
```

### ⚠️ CRITICAL: Never Run Manual Versioning

**NEVER run `pnpm changeset version` manually!**

This bypasses GitHub Actions and causes version skips (e.g., 3.2 → 5.0, skipping 4.0).

**Only use:** `pnpm changeset` (create changesets)
**Never use:** `pnpm changeset version` (GitHub Action does this)

## 📖 Full Documentation

See [`CHANGESET_WORKFLOW.md`](CHANGESET_WORKFLOW.md) for complete workflow details.
