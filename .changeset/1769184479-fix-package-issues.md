---
"stera-icons": patch
---

Fix production issues identified in package audit:

- Add "use client" directive to DynamicIcon and IconBase for Next.js App Router compatibility
- Remove redundant root-level convenience files (dynamic.mjs, dynamic.d.ts, dynamicIconImports.mjs, dynamicIconImports.d.ts)
- Add missing ./dynamicIconImports export entry to package.json
- Fix DynamicIcon type declaration (remove incorrect MemoExoticComponent wrapper)
- Add LICENSE to published files array
- Update React peer dependency from >=17.0.0 to >=17.0.2

These changes address critical issues that could affect users in production environments, particularly Next.js users and those importing dynamicIconImports.
