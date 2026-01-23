---
"stera-icons": patch
---

Optimize package build for production (ESM-only)

- Reduce package size from 249 MB to 12.5 MB (95% reduction)
- Remove CJS output (ESM-only for modern bundlers and Node.js 18+)
- Disable source maps
- Change icons to import shared modules instead of bundling inline
- Generate barrel files with re-exports instead of bundled code
- Individual icon files reduced from ~1.4 KB to ~700 bytes
