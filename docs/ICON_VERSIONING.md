# Icon Versioning - Technical Documentation

This document explains the technical implementation of per-icon versioning in Stera Icons. **For the contributor workflow, see [CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md).**

## Overview

Each icon variant (regular, bold, filled, filltone, linetone) has metadata tracking:
- `versionAdded`: The package version when the icon was first added
- `dateAdded`: ISO timestamp when the icon was first added
- `lastModified`: ISO timestamp of last modification
- `svgHash`: SHA-256 hash from Figma export for change detection

## Metadata Storage Location

**Critical:** Metadata MUST be tracked in git to preserve version history.

**Files:**
- `dist/icons.meta.json` - Version history for all icons

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
!dist/icons.meta.json                    # But track metadata
!dist/name_map.json                      # And name mapping

# Auto-generated source files (regenerated on build)
src/index.ts
src/dynamic-variants.ts
src/dynamicIconImports.ts
```

**Why auto-generated files are gitignored:**
- These files are created during the build process from icon data
- `src/index.ts` - Main barrel export (~783KB)
- `src/dynamic-variants.ts` - Dynamic wrapper components (~61KB)
- `src/dynamicIconImports.ts` - Dynamic import map (~315KB)
- **Total:** ~1.1MB removed from git history
- Files are automatically regenerated on `npm run build`
- Prevents massive diffs when icons are added/modified

## Version Detection Algorithm

### How the Build Script Determines Versions

```javascript
// 1. Load hash-based versioning utilities
const hashVersioning = new HashVersioning(projectRoot);
const versionInfo = hashVersioning.getVersionForIcons();
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

The `HashVersioning` class parses changeset files to determine bump type:

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

## Error Handling and SVG Validation

The build system now includes robust error handling for malformed SVG content:

```javascript
// Optimize SVG with error handling
let optimizedSvg;
try {
  optimizedSvg = optimize(variantData.svg, svgoConfig).data;
} catch (error) {
  console.error(`❌ Failed to optimize SVG for ${componentName} (${variant}): ${error.message}`);
  console.error(`⚠️  Skipping this variant due to malformed SVG`);
  continue; // Skip this variant and continue with the next one
}
```

This prevents the entire build from failing when individual icons have issues (like truncated SVG content from export problems).

## Icon Variants

The system supports 6 icon variants (3 weights × 2 duotone states):
- **Regular**: Standard outline style
- **Bold**: Thicker stroke weight
- **Fill**: Solid fill style
- **RegularDuotone**: Regular style with opacity overlay
- **BoldDuotone**: Bold style with opacity overlay
- **FillDuotone**: Fill style with opacity overlay

All variants are processed and tracked independently in the metadata, allowing for granular version control per variant.

## Change Detection

Icons are marked as "modified" when their SVG hash changes:

```javascript
// Use SHA-256 hash from Figma export
const currentSvgHash = variantData.hash; // SHA-256 from export
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

## Safety Features

### Build Safety Check

The build script includes a safety check to prevent accidentally resetting version history. If no existing metadata is found when processing more than 10 icons, the build will abort:

```
⚠️  WARNING: No existing metadata found!
⚠️  You are about to mark ALL 768 icons as NEW.
⚠️  This will reset version history for all icons.

   If this is intentional (e.g., first build), use --force to proceed.
   If this is NOT intentional, check that dist/icons.meta.json exists.

❌ Build aborted. Use --force to override this safety check.
```

**To bypass this check (use with caution):**
```bash
node scripts/build-icons.js icons-export.json --force
```

### Automatic Metadata Backups

Before overwriting metadata, the build script automatically creates a timestamped backup in `.metadata-backups/`:

```
📦 Backed up metadata to .metadata-backups/icons.meta.2026-01-26T10-30-45-123Z.json
```

- Backups are stored in the project root (not in `dist/`)
- Only the last 5 backups are kept (older ones are automatically cleaned up)
- Backups are gitignored and not published to npm

**To restore from a backup:**
```bash
# List available backups
ls -la .metadata-backups/

# Restore a specific backup
cp .metadata-backups/icons.meta.2026-01-26T10-30-45-123Z.json dist/icons.meta.json
```

### Version History Restoration Script

If version history is accidentally lost, use the restoration script:

```bash
# Dry run (preview what will be restored)
node scripts/restore-version-history.js --dry-run

# Actually restore
node scripts/restore-version-history.js
```

This script:
1. Loads old metadata from git history (commit `b137c98a`)
2. Matches icons by `variantComponentName`
3. Restores `versionAdded`, `dateAdded`, and `lastModified` fields
4. Preserves current `svgHash` and other fields

## Troubleshooting

### Problem: All icons showing as "new"

**Symptoms:**
```
🆕 New icons: 2760
```

**Diagnosis:**
```bash
# Check if metadata file exists
ls dist/icons.meta.json

# Check if it's tracked in git
git ls-files dist/icons.meta.json
```

**Solutions:**

1. **Build was blocked by safety check**: The build script now prevents this scenario. If you see the safety warning, do NOT use `--force` unless you're certain.

2. **Metadata was deleted**: Restore from backup or git
   ```bash
   # From backup (if available)
   ls .metadata-backups/
   cp .metadata-backups/icons.meta.<latest>.json dist/icons.meta.json
   
   # Or from git
   git checkout HEAD -- dist/icons.meta.json
   ```

3. **Metadata not committed**: Check git status
   ```bash
   git status dist/icons.meta.json
   git add dist/icons.meta.json
   git commit -m "chore: track icon metadata"
   ```

4. **Gitignore blocking**: Verify gitignore configuration
   ```bash
   git check-ignore -v dist/icons.meta.json
   # Should show: (no output, meaning it's not ignored)
   ```

5. **Fresh clone without metadata**: Restore from git history
   ```bash
   git checkout HEAD -- dist/icons.meta.json
   ```

6. **Version history completely lost**: Use the restoration script
   ```bash
   node scripts/restore-version-history.js
   ```

### Problem: Wrong version assigned to new icons

**Symptoms:**
```
📅 Version for new icons: 3.1.0 (package.json)
# Expected: 3.2.0
```

**Diagnosis:**
```bash
node scripts/hash-versioning.js info
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
   # Check specific icon hash from metadata
   node -e "
   const {readFileSync} = require('fs');
   const metadata = JSON.parse(readFileSync('dist/icons.meta.json', 'utf8'));
   const icon = metadata.find(item => item.name === 'heart' && item.variant === 'regular');
   console.log('Current hash:', icon?.svgHash);
   "
   ```

2. **Force rebuild**: Delete metadata and rebuild (not recommended)
   ```bash
   # Backup first!
   cp dist/icons.meta.json icons.meta.backup.json
   rm dist/icons.meta.json
   node scripts/build-icons.js icons-export.json
   ```

## Historical Context

### Initial Implementation (v4.0.0)

When per-icon versioning was first added:
- No existing metadata file
- All 2,760 icon variants marked as v4.0.0
- Version history lost

### Migration (Version History Restoration)

The version history was restored based on CHANGELOG analysis, with older icons defaulting to v3.0.0 and known icons from specific versions properly categorized.

**Result:**
- v2.1.0: 3 variants
- v3.0.0: 1,466 variants (default for older icons)
- v3.2.0: 34 variants (known from CHANGELOG)
- v5.0.4: 1,247 variants (migration)
- v5.1.0: 10 variants (recent additions)

## Maintenance Tasks

### Verifying Version Distribution

```bash
# Quick summary
node scripts/metadata-utils.js summary

# Detailed breakdown
cat dist/icons.meta.json | jq '[.[] | .versionAdded] | group_by(.) | map({version: .[0], count: length})'
```

### Auditing Metadata Integrity

```bash
# Check for missing version data
cat dist/icons.meta.json | jq '.[] | select(.versionAdded == null or .versionAdded == "")'

# Check for missing hashes
cat dist/icons.meta.json | jq '.[] | select(.svgHash == null or .svgHash == "")'

# Verify date formats
cat dist/icons.meta.json | jq '.[] | select(.dateAdded | test("^[0-9]{4}-[0-9]{2}-[0-9]{2}T") | not)'
```

### Comparing Builds

```bash
# Before
cp dist/icons.meta.json meta-before.json

# Make changes and rebuild
node scripts/build-icons.js icons-export.json

# After
cp dist/icons.meta.json meta-after.json

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
- **`scripts/hash-versioning.js`** - Hash-based version detection implementation
- **`scripts/metadata-utils.js`** - Metadata utilities implementation
- **`scripts/restore-version-history.js`** - Version history restoration script
