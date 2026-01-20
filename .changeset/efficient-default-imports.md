---
"stera-icons": patch
---

Optimize default imports for better bundle efficiency

- Base icon names (Search, Home, etc.) now resolve to Regular variants (~300 bytes) instead of dynamic wrappers (~1KB)
- Added new `stera-icons/dynamic-variants` entry point for runtime variant switching
- `import { Search } from 'stera-icons'` now gives you SearchRegular for optimal bundle size
- Use `import { Search } from 'stera-icons/dynamic-variants'` when you need weight/duotone props at runtime
