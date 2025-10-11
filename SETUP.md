# Stera Icons Setup Guide

This guide will help you set up and contribute to the Stera Icons React library.

## Quick Start

### 1. Install Dependencies

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 2. Project Structure

```
stera-icons/
├── packages/
│   └── react/                 # Main React package
│       ├── src/
│       │   ├── icons/         # Generated icon components (2220 files)
│       │   ├── types.ts       # TypeScript definitions
│       │   └── index.ts       # Main exports
│       ├── dist/              # Built package
│       │   ├── icons.meta.json  # ⚠️ MUST be tracked in git
│       │   └── name_map.json    # ⚠️ MUST be tracked in git
│       └── package.json
├── scripts/
│   ├── build-icons.js         # Icon generation from JSON
│   ├── version-utils.js       # Version detection
│   ├── metadata-utils.js      # Metadata utilities
│   ├── fix-icon-versions.js   # Version history migration
│   ├── svgo.config.js         # SVG optimization
│   ├── svgr-template.js       # React component template
│   └── helpers.js             # Utility functions
├── samples/
│   └── vite-react-demo/       # Demo application
├── docs/                      # Documentation
│   ├── CHANGESET_WORKFLOW.md  # How to add icons (READ THIS FIRST)
│   ├── QUICK_REFERENCE.md     # Command reference
│   └── ICON_VERSIONING.md     # Technical details
└── icons-export.json          # Source data (from Figma)
```

## Development Workflow

### Adding New Icons (Required Reading)

📖 **See [docs/CHANGESET_WORKFLOW.md](docs/CHANGESET_WORKFLOW.md)** for the complete workflow.

**Quick summary:**
1. Create changeset first: `pnpm changeset`
2. Add icons to `icons-export.json`
3. Build: `node scripts/build-icons.js icons-export.json`
4. Commit including metadata files
5. Process changeset when ready: `pnpm changeset version`

### Icon Export Format

Your `icons-export.json` should have this structure:

```json
{
  "exportedAt": "2025-10-11T10:30:00.000Z",
  "totalIcons": 555,
  "icons": [
    {
      "name": "search",
      "tags": "search, find, magnify, lookup",
      "variants": [
        {
          "variant": "Regular",
          "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\">...</svg>"
        },
        {
          "variant": "Bold",
          "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\">...</svg>"
        },
        {
          "variant": "Fill",
          "svg": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\">...</svg>"
        }
      ]
    }
  ]
}
```

## Build Commands

### Icon Generation
```bash
# Build icons from JSON export
node scripts/build-icons.js icons-export.json

# This generates:
# - React components in packages/react/src/icons/
# - Metadata in packages/react/dist/icons.meta.json
# - Name mapping in packages/react/dist/name_map.json
```

### Library Building
```bash
# Production build (optimized, no source maps)
pnpm build

# Development build (with source maps)
pnpm build:dev

# Watch mode
pnpm dev
```

### Testing
```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Demo Application
```bash
# Run the demo app
cd samples/vite-react-demo
pnpm dev
```

## Utility Commands

### Version Information
```bash
# Check version status
node scripts/version-utils.js info

# Show next version from changesets
node scripts/version-utils.js next

# Show current package version
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

# Show recent icons
node scripts/metadata-utils.js recent 7
```

## Important: Git Tracking

**Critical files that MUST be committed:**
- `packages/react/dist/icons.meta.json` - Version history
- `packages/react/dist/name_map.json` - Backward compatibility

These files are tracked in git (despite being in `dist/`) to preserve version history.

**Why?** Without these files:
- All icons would be marked as "new" on every build
- Version history would be lost
- Changesets wouldn't work correctly

## Contributing

### Before Your First Contribution

1. **Read the workflow**: [docs/CHANGESET_WORKFLOW.md](docs/CHANGESET_WORKFLOW.md)
2. **Keep handy**: [docs/QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md)
3. **Understand versioning**: [docs/ICON_VERSIONING.md](docs/ICON_VERSIONING.md)

### Pull Request Checklist

- [ ] Created changeset: `pnpm changeset`
- [ ] Built icons: `node scripts/build-icons.js icons-export.json`
- [ ] Verified build summary (new/modified/unchanged counts)
- [ ] Ran tests: `pnpm test`
- [ ] Built library: `pnpm build`
- [ ] Committed metadata files
- [ ] Updated CHANGELOG if needed

### Common Mistakes to Avoid

❌ Adding icons without creating a changeset first
❌ Not committing `icons.meta.json` file
❌ Manually editing generated icon components
❌ Skipping the build verification step

## Troubleshooting

### Build fails
**Check:**
- `icons-export.json` exists in project root
- JSON is valid: `jq . icons-export.json > /dev/null`
- All icons have required fields (name, variants, svg)

### Wrong version assigned
**Check:**
```bash
node scripts/version-utils.js info
# Should show: Has pending changesets: true
```

**Fix:**
```bash
pnpm changeset  # Create changeset first
node scripts/build-icons.js icons-export.json  # Rebuild
```

### All icons marked as "new"
**Check:**
```bash
git ls-files packages/react/dist/icons.meta.json
# Should show: packages/react/dist/icons.meta.json
```

**Fix:**
```bash
git checkout HEAD -- packages/react/dist/icons.meta.json
```

### Tests failing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Run tests
pnpm test
```

## Release Process

This project uses **GitHub Actions** to automate versioning and publishing.

### Automated Release Workflow

```bash
# 1. Create changeset (only do this part manually)
pnpm changeset
# Select: stera-icons, minor/patch/major, "Description"

# 2. Build icons (if adding new icons)
node scripts/build-icons.js icons-export.json

# 3. Commit and push
git add .
git commit -m "feat: add new icons"
git push

# 4. GitHub Actions handles the rest automatically:
#    - Creates a "Version Packages" PR
#    - Review and merge the PR
#    - Action runs: version + build + publish + tag
```

### What the GitHub Action Does

When you merge the "Version Packages" PR, the GitHub Action (`.github/workflows/release.yml`) automatically:

1. Runs `pnpm changeset version` (updates package.json and CHANGELOG)
2. Builds the package (`pnpm build`)
3. Publishes to npm (`pnpm changeset publish`)
4. Creates git tags

### CRITICAL: Never Run `pnpm changeset version` Manually

**DO NOT run `pnpm changeset version` locally!** This bypasses the automated workflow and can cause version skips.

**Wrong workflow:**
```bash
# ❌ DON'T DO THIS
pnpm changeset version  # Manual versioning
git push               # Pushes version without publishing
```

**Correct workflow:**
```bash
# ✅ DO THIS
pnpm changeset         # Create changeset only
git push               # Let GitHub Action handle versioning
```

**Why this matters:**
- Manual versioning creates version bumps without npm publishes
- Can cause version skips (e.g., 3.2 → 5.0, missing 4.0)
- Breaks the atomic version+publish guarantee
- GitHub Action ensures version and publish happen together

## Resources

- **Main README**: [README.md](README.md)
- **Documentation**: [docs/](docs/)
- **Changeset Docs**: https://github.com/changesets/changesets

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
