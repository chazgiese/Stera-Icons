# Stera Icons Documentation

This directory contains documentation for contributing to and maintaining the Stera Icons project.

## 📚 Documentation Files

### Workflow Documentation
- **[CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md)** - Complete guide to the changeset-first workflow for adding new icons
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick reference card with essential commands

### Setup Documentation
- **[SETUP.md](../SETUP.md)** - Project setup and installation instructions

## 🎯 Key Concepts

### Changeset-First Workflow
The recommended approach for adding new icons:
1. **Create changeset first** - Defines version bump
2. **Add icons** - System assigns correct version automatically
3. **Build and verify** - Ensure metadata is accurate
4. **Process changeset** - Official version bump when ready

### Version Metadata
Each icon tracks:
- **Version added** - When first introduced
- **Date added** - Exact timestamp
- **Last modified** - When last updated
- **SVG hash** - For change detection

## 🛠️ Utility Scripts

### Version Management
```bash
node scripts/version-utils.js info    # Version information
node scripts/version-utils.js next    # Next version from changesets
node scripts/version-utils.js current # Current package version
```

### Icon Metadata
```bash
node scripts/metadata-utils.js summary        # Overall summary
node scripts/metadata-utils.js version 3.2.0  # Icons by version
node scripts/metadata-utils.js search "chart" # Search icons
node scripts/metadata-utils.js recent 7       # Recent additions
```

### Build Process
```bash
node scripts/build-icons.js icons-export.json # Build all icons
pnpm build                                     # Production build
pnpm build:dev                                 # Development build
```

## 📖 Getting Started

1. **Read the workflow**: Start with [CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md)
2. **Use quick reference**: Keep [QUICK_REFERENCE.md](QUICK_REFERENCE.md) handy
3. **Follow the process**: Always changeset first, then icons
4. **Verify results**: Use utility scripts to check metadata

## 🤝 Contributing

When contributing new icons:
- Follow the changeset-first workflow
- Use descriptive changeset summaries
- Test the build process
- Verify metadata accuracy

For questions or issues, refer to the troubleshooting sections in the workflow documentation.
