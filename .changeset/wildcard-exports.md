---
"stera-icons": patch
---

Simplify package exports using wildcard pattern for subpath imports

- Changed from explicit exports for every icon alias to using `./icons/*` wildcard pattern
- Updated import paths from `stera-icons/IconName` to `stera-icons/icons/IconName` (following lucide-react patterns)
- Updated documentation with subpath imports section
- Removed bundlephobia badge (not accurate for tree-shaking libraries)
- Cleaned up build script output messages
