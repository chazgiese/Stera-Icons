---
"stera-icons": patch
---

fix: move IconBase to separate subpath export to resolve type incompatibility

Users can now import IconBase from `stera-icons/base` instead of the main entry point. This fixes TypeScript errors when using `import * as iconModule from 'stera-icons'` with dynamic icon access patterns.
