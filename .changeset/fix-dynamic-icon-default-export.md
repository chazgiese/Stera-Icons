---
"stera-icons": patch
---

Fix DynamicIcon failing to load icons due to missing default exports

The DynamicIcon component expects modules with a `default` export, but generated icon modules only had named exports. This caused `module.default` to return `undefined`, silently failing to render icons.

Added `export default` statements to both variant and wrapper component generators in the build script.
