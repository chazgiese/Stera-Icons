# Icon Versioning - Technical Documentation

This document explains the technical implementation of per-icon versioning in Stera Icons. **For the contributor workflow, see [CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md).**

## Overview

Each icon variant (regular, bold, filled) has metadata tracking:
- `versionAdded`: The package version when the icon was first added
- `dateAdded`: ISO timestamp when the icon was first added
- `lastModified`: ISO timestamp of last modification
- `svgHash`: MD5 hash of the optimized SVG for change detection

## Metadata Storage Location

**Critical:** Metadata MUST be tracked in git to preserve version history.

**Files:**
- `packages/react/dist/icons.meta.json` - Version history for all icons
- `packages/react/dist/name_map.json` - Backward compatibility mappings

### Why Git Tracking is Critical

The build script loads existing metadata to determine which icons are new vs existing:

```javascript
// Load existing metadata
const existingMetadata = JSON.parse(readFileSync('icons.meta.json', 'utf8'));
const existingMetadataMap = new Map();
existingMetadata.forEach(item => {
  existingMetadataMap.set(item.componentName, item);
});

// Check if icon exists
const existingItem = existingMetadataMap.get(componentName);
if (!existingItem) {
  // NEW ICON - assign current version
} else {
  // EXISTING ICON - preserve original version
}
```

**Without git tracking:** Metadata is lost → ALL icons marked as "new" ❌

**With git tracking:** Metadata preserved → Accurate version history ✅

### Git Configuration

The `.gitignore` is configured to track metadata while ignoring other build artifacts:

```gitignore
dist/                                    # Ignore all dist files
!packages/react/dist/                    # But allow this directory
!packages/react/dist/icons.meta.json     # Track metadata
!packages/react/dist/name_map.json       # Track name mapping
packages/react/dist/*                    # Re-ignore other files
!packages/react/dist/icons.meta.json     # Re-allow metadata
!packages/react/dist/name_map.json       # Re-allow name mapping
```

## Version Detection Algorithm

### How the Build Script Determines Versions

```javascript
// 1. Load version utilities
const versionUtils = new VersionUtils(projectRoot);
const versionInfo = versionUtils.getVersionForNewIcons();
const currentVersion = versionInfo.version;

// 2. Version source priority:
if (hasPendingChangesets()) {
  // Use estimated next version from changesets
  version = calculateNextVersion(currentVersion, changesetType);
  source = 'pending changeset';
} else {
  // Use current package.json version
  version = readPackageVersion();
  source = 'package.json';
}

// 3. For each icon being built:
for (const icon of icons) {
  const existing = existingMetadataMap.get(icon.componentName);
  
  if (!existing) {
    // NEW ICON
    icon.versionAdded = currentVersion;
    icon.dateAdded = new Date().toISOString();
  } else {
    // EXISTING ICON
    icon.versionAdded = existing.versionAdded;  // Preserve
    icon.dateAdded = existing.dateAdded;        // Preserve
    
    // Check for modifications
    if (icon.svgHash !== existing.svgHash) {
      icon.lastModified = new Date().toISOString();
    }
  }
}
```

### Version Bump Calculation

The `VersionUtils` class parses changeset files to determine bump type:

```javascript
parseChangesetBump(content) {
  // Looks for:
  // ---
  // "stera-icons": minor
  // ---
  
  if (line.includes('major')) return 'major';  // 3.1.0 → 4.0.0
  if (line.includes('minor')) return 'minor';  // 3.1.0 → 3.2.0
  if (line.includes('patch')) return 'patch';  // 3.1.0 → 3.1.1
}

bumpVersion(version, bumpType) {
  const [major, minor, patch] = version.split('.').map(Number);
  
  switch (bumpType) {
    case 'major': return `${major + 1}.0.0`;
    case 'minor': return `${major}.${minor + 1}.0`;
    case 'patch': return `${major}.${minor}.${patch + 1}`;
  }
}
```

## Change Detection

Icons are marked as "modified" when their SVG hash changes:

```javascript
// Calculate SVG hash
const currentSvgHash = createHash('md5').update(optimizedSvg).digest('hex');
const existingSvgHash = existingItem.svgHash;

if (currentSvgHash !== existingSvgHash) {
  console.log(`🔄 Modified icon: ${componentName}`);
  metadata.lastModified = currentDate;
}
```

## Build Summary Statistics

After building, the script reports:

```javascript
// Count new icons (version matches current)
const newIcons = metadata.filter(item => 
  item.versionAdded === currentVersion
).length;

// Count modified icons (hash changed)
const modifiedIcons = metadata.filter(item => {
  const existing = existingMetadataMap.get(item.componentName);
  return existing && existing.svgHash && item.svgHash !== existing.svgHash;
}).length;

// Everything else is unchanged
const unchangedIcons = metadata.length - newIcons - modifiedIcons;
```

## Troubleshooting

### Problem: All icons showing as "new"

**Symptoms:**
```
🆕 New icons: 1665
```

**Diagnosis:**
```bash
# Check if metadata file exists
ls packages/react/dist/icons.meta.json

# Check if it's tracked in git
git ls-files packages/react/dist/icons.meta.json
```

**Solutions:**

1. **Metadata was deleted**: Restore from git
   ```bash
   git checkout HEAD -- packages/react/dist/icons.meta.json
   ```

2. **Metadata not committed**: Check git status
   ```bash
   git status packages/react/dist/icons.meta.json
   git add packages/react/dist/icons.meta.json
   git commit -m "chore: track icon metadata"
   ```

3. **Gitignore blocking**: Verify gitignore configuration
   ```bash
   git check-ignore -v packages/react/dist/icons.meta.json
   # Should show: (no output, meaning it's not ignored)
   ```

4. **Fresh clone without metadata**: Run version fix script
   ```bash
   node scripts/fix-icon-versions.js
   ```

### Problem: Wrong version assigned to new icons

**Symptoms:**
```
📅 Version for new icons: 3.1.0 (package.json)
# Expected: 3.2.0
```

**Diagnosis:**
```bash
node scripts/version-utils.js info
# Check: Has pending changesets: false
```

**Solutions:**

1. **Missing changeset**: Create one
   ```bash
   pnpm changeset
   # Select minor for new icons
   ```

2. **Changeset has wrong bump type**: Recreate
   ```bash
   # Delete wrong changeset
   rm .changeset/some-changeset.md
   
   # Create correct one
   pnpm changeset
   ```

3. **Changeset not parsed correctly**: Check file format
   ```bash
   cat .changeset/*.md
   # Should contain:
   # ---
   # "stera-icons": minor
   # ---
   ```

### Problem: Modified icons not detected

**Symptoms:**
```
🔄 Modified icons: 0
# But you know you changed some icons
```

**Diagnosis:**
- SVG content hasn't actually changed (whitespace doesn't count)
- Icons were regenerated with same paths
- Hash collision (extremely rare)

**Solutions:**

1. **Verify actual changes**: Compare SVG content
   ```bash
   # Check specific icon
   node -e "
   const {readFileSync} = require('fs');
   const {createHash} = require('crypto');
   const svg = readFileSync('packages/react/src/icons/heart.tsx', 'utf8');
   const hash = createHash('md5').update(svg).digest('hex');
   console.log(hash);
   "
   ```

2. **Force rebuild**: Delete metadata and rebuild (not recommended)
   ```bash
   # Backup first!
   cp packages/react/dist/icons.meta.json icons.meta.backup.json
   rm packages/react/dist/icons.meta.json
   node scripts/build-icons.js icons-export.json
   ```

## Historical Context

### Initial Implementation (v4.0.0)

When per-icon versioning was first added:
- No existing metadata file
- All 1,665 icons marked as v4.0.0
- Version history lost

### Migration (Version History Restoration)

A migration script (`scripts/fix-icon-versions.js`) restored approximate history:

```javascript
// Known icons by version from CHANGELOG
const KNOWN_ICONS_BY_VERSION = {
  '3.2.0': ['area-chart', 'bar-chart', 'align-horizontal-left', ...],
  '2.1.0': ['wifi-slash', 'wine-bottle', 'wine-glass']
};

// Default to v3.0.0 for unknown older icons
const defaultVersion = '3.0.0';
```

**Result:**
- v2.1.0: 3 variants
- v3.0.0: 1,627 variants (default for older icons)
- v3.2.0: 35 variants (known from CHANGELOG)

## Maintenance Tasks

### Verifying Version Distribution

```bash
# Quick summary
node scripts/metadata-utils.js summary

# Detailed breakdown
cat packages/react/dist/icons.meta.json | jq '[.[] | .versionAdded] | group_by(.) | map({version: .[0], count: length})'
```

### Auditing Metadata Integrity

```bash
# Check for missing version data
cat packages/react/dist/icons.meta.json | jq '.[] | select(.versionAdded == null or .versionAdded == "")'

# Check for missing hashes
cat packages/react/dist/icons.meta.json | jq '.[] | select(.svgHash == null or .svgHash == "")'

# Verify date formats
cat packages/react/dist/icons.meta.json | jq '.[] | select(.dateAdded | test("^[0-9]{4}-[0-9]{2}-[0-9]{2}T") | not)'
```

### Comparing Builds

```bash
# Before
cp packages/react/dist/icons.meta.json meta-before.json

# Make changes and rebuild
node scripts/build-icons.js icons-export.json

# After
cp packages/react/dist/icons.meta.json meta-after.json

# Compare
diff <(jq -S . meta-before.json) <(jq -S . meta-after.json)
```

## Best Practices for Maintainers

1. **Always commit metadata changes** with icon updates
2. **Verify build summaries** before committing
3. **Never manually edit** `icons.meta.json` (regenerate from build)
4. **Check version distribution** after major changes
5. **Monitor changeset detection** in CI/CD

## See Also

- **[CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md)** - Contributor workflow
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Command reference
- **`scripts/version-utils.js`** - Version detection implementation
- **`scripts/metadata-utils.js`** - Metadata utilities implementation
