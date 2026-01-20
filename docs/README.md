# Stera Icons Documentation

This directory contains documentation for contributing to and maintaining the Stera Icons project.

## 📚 Documentation Files

### For Contributors
- **[CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md)** - Complete guide for adding new icons with proper version tracking
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick reference card with essential commands

### For Maintainers
- **[ICON_VERSIONING.md](ICON_VERSIONING.md)** - Deep dive into how icon versioning works, troubleshooting, and maintenance

## 🎯 Quick Navigation

### Adding New Icons
**Start here:** [CHANGESET_WORKFLOW.md](CHANGESET_WORKFLOW.md)

The workflow is simple:
1. Create changeset first → `pnpm changeset`
2. Add icons to `icons-export.json`
3. Build → `node scripts/build-icons.js icons-export.json`
4. Verify → `node scripts/metadata-utils.js summary`
5. Commit everything including metadata files

### Quick Commands
**Need commands fast?** [QUICK_REFERENCE.md](QUICK_REFERENCE.md)

### Version Tracking Issues
**Something wrong with versions?** [ICON_VERSIONING.md](ICON_VERSIONING.md) - Troubleshooting section

## 🛠️ Essential Commands

### Version Information
```bash
node scripts/hash-versioning.js info    # Check version status
node scripts/metadata-utils.js summary # Icon statistics
```

### Build Process
```bash
node scripts/build-icons.js icons-export.json # Build icons
pnpm build                                     # Production build
```

## 📖 Documentation Philosophy

Each document serves a specific purpose:

- **CHANGESET_WORKFLOW.md**: Step-by-step workflow for adding icons
- **QUICK_REFERENCE.md**: Fast lookup of commands
- **ICON_VERSIONING.md**: Technical details for maintainers

Keep docs focused, avoid duplication, and update as the system evolves.

## 🤝 Contributing to Docs

When updating documentation:
1. Keep information current with actual implementation
2. Remove outdated content immediately
3. Use examples that match current version
4. Test all commands before documenting them
