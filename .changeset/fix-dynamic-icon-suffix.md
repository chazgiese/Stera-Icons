---
"stera-icons": patch
---

Fix DynamicIcon key building for regular weight with duotone

The `getIconComponent` function was incorrectly building icon keys for the "regular" weight, producing keys like `accessibility-regular-duotone` that don't exist in `dynamicIconImports`. The fix treats "regular" weight as the default (no suffix), so `weight="regular"` with `duotone=true` now correctly produces `accessibility-duotone` instead of `accessibility-regular-duotone`.
