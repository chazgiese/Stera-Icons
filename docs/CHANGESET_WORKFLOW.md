# Changeset-First Workflow for Icon Metadata

This document outlines the recommended workflow for adding new icons while maintaining accurate version metadata using the Changesets system.

## Overview

The Stera Icons project uses a **changeset-first workflow** to ensure that new icons receive the correct version metadata, even before the changeset is processed and the package version is officially bumped.

## Why Changeset-First?

**The Problem:**
- New icons added to `icons-export.json` need version metadata
- Package version in `package.json` only updates after changeset processing
- Without changesets, new icons would get "old" version numbers

**The Solution:**
- Create changeset first to define the intended version bump
- Build system detects pending changesets and uses estimated next version
- New icons get correct metadata immediately

## Recommended Workflow

### Step 1: Create Changeset First

Before adding any new icons, create a changeset to define your version bump:

```bash
# Create a new changeset
pnpm changeset
```

**Example changeset creation:**
```bash
🦋  Which packages would you like to include?
  ◯ stera-icons
  ◯ stera-icons-react-demo

# Select stera-icons
✔ stera-icons

🦋  What kind of change is this for stera-icons?
  ◯ patch
  ◯ minor  ← Select this for new icons
  ◯ major

✔ minor

🦋  Please enter a summary for this change
✔ Add new social media icons (Twitter, LinkedIn, GitHub)
```

This creates a changeset file like:
```markdown
---
"stera-icons": minor
---

Add new social media icons (Twitter, LinkedIn, GitHub)
```

### Step 2: Verify Version Detection

Check that the system detects your pending changeset:

```bash
# Check version information
node scripts/version-utils.js info
```

**Expected output:**
```
📋 Version Information
=====================
Current version: 3.1.0
Has pending changesets: true
Next version (from changesets): 3.2.0
Recommended for new icons: 3.2.0
```

### Step 3: Add New Icons

Now add your new icons to `icons-export.json`. The build system will automatically assign them the correct version (3.2.0 in this example).

### Step 4: Build Icons

Build the icons to generate components and metadata:

```bash
# Build icons (will use estimated version)
node scripts/build-icons.js icons-export.json
```

**Expected output:**
```
🚀 Building Stera Icons...
📦 Processing 533 icons from 2025-10-04T11:42:47.075Z
📅 Version for new icons: 3.2.0 (pending changeset)
⚠️  Note: This is an estimated version based on pending changesets
📅 Build date: 2025-10-04T12:11:38.794Z
...
📊 Build Summary:
  ✅ Generated 1596 icon components
  🆕 New icons: 6
  🔄 Modified icons: 0
  ✅ Unchanged icons: 1590
```

### Step 5: Verify New Icons

Check that new icons have the correct metadata:

```bash
# Check icons added in the new version
node scripts/metadata-utils.js version 3.2.0

# Or search for specific icons
node scripts/metadata-utils.js search "twitter"
```

### Step 6: Process Changeset

When ready to release, process the changeset:

```bash
# Process changesets (updates package.json version)
pnpm changeset version
```

**This will:**
- Update `packages/react/package.json` version to 3.2.0
- Update CHANGELOG.md with the changeset summary
- Remove processed changeset files

### Step 7: Final Build

Build one final time to confirm everything is correct:

```bash
# Build with the official new version
node scripts/build-icons.js icons-export.json
```

**Expected output:**
```
📅 Version for new icons: 3.2.0 (package.json)
📅 Build date: 2025-10-04T12:15:30.123Z
```

## Version Bump Types

### Patch (3.1.0 → 3.1.1)
Use for:
- Bug fixes
- Minor icon updates
- Documentation changes

```bash
# Create patch changeset
pnpm changeset
# Select: patch
```

### Minor (3.1.0 → 3.2.0)
Use for:
- **New icons** (most common)
- New features
- Non-breaking changes

```bash
# Create minor changeset
pnpm changeset
# Select: minor
```

### Major (3.1.0 → 4.0.0)
Use for:
- Breaking changes
- Major icon redesigns
- Removing deprecated icons

```bash
# Create major changeset
pnpm changeset
# Select: major
```

## Utility Commands

### Version Information
```bash
# Show current version info
node scripts/version-utils.js info

# Show next version from changesets
node scripts/version-utils.js next

# Show current package version
node scripts/version-utils.js current
```

### Icon Metadata
```bash
# Show summary of all icons
node scripts/metadata-utils.js summary

# Find icons by version
node scripts/metadata-utils.js version 3.2.0

# Search icons
node scripts/metadata-utils.js search "social"

# Show recent icons
node scripts/metadata-utils.js recent 7
```

## Troubleshooting

### Problem: New icons getting wrong version

**Symptoms:**
```
📅 Version for new icons: 3.1.0 (package.json)
```

**Solution:**
1. Create a changeset first: `pnpm changeset`
2. Rebuild icons: `node scripts/build-icons.js icons-export.json`

### Problem: Changeset not detected

**Symptoms:**
```
Has pending changesets: false
```

**Solution:**
1. Check changeset directory: `ls .changeset/`
2. Verify changeset file has correct format
3. Ensure changeset mentions "stera-icons"

### Problem: Wrong version estimated

**Symptoms:**
```
Next version (from changesets): 3.1.1  # Expected 3.2.0
```

**Solution:**
1. Check changeset file content
2. Ensure it specifies "minor" not "patch"
3. Recreate changeset if needed

## Best Practices

### 1. Always Changeset First
- Create changeset before adding icons
- Never add icons without a changeset
- Use descriptive changeset summaries

### 2. Use Appropriate Bump Types
- **New icons**: Always use `minor`
- **Icon updates**: Use `patch` or `minor`
- **Breaking changes**: Use `major`

### 3. Verify Before Release
- Check version detection: `node scripts/version-utils.js info`
- Verify new icons: `node scripts/metadata-utils.js version <version>`
- Test build process

### 4. Keep Changesets Focused
- One changeset per logical change
- Group related icons in same changeset
- Use clear, descriptive summaries

## Example Workflow Session

```bash
# 1. Create changeset for new icons
pnpm changeset
# Select: stera-icons, minor, "Add new social media icons"

# 2. Verify changeset detected
node scripts/version-utils.js info
# Output: Next version (from changesets): 3.2.0

# 3. Add icons to icons-export.json (external process)

# 4. Build with correct version
node scripts/build-icons.js icons-export.json
# Output: Version for new icons: 3.2.0 (pending changeset)

# 5. Verify new icons
node scripts/metadata-utils.js version 3.2.0
# Output: Shows new icons with v3.2.0

# 6. Process changeset when ready to release
pnpm changeset version
# Updates package.json to 3.2.0

# 7. Final build
node scripts/build-icons.js icons-export.json
# Output: Version for new icons: 3.2.0 (package.json)
```

## Integration with CI/CD

The build system automatically handles version detection, making it safe to:
- Build icons in CI with pending changesets
- Generate accurate metadata before release
- Verify version consistency across environments

## Summary

The changeset-first workflow ensures:
- ✅ New icons get correct version metadata immediately
- ✅ No manual version management required
- ✅ Consistent versioning across all environments
- ✅ Clear audit trail of when icons were added
- ✅ Seamless integration with existing Changesets workflow

**Remember: Changeset first, then icons, then build!**
