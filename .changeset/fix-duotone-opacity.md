---
"stera-icons": patch
---

fix: preserve opacity on duotone icon paths with group-level opacity

Fixed an issue where 671 duotone icons (like speaker-high) were being built without the correct 40% opacity. The build script now properly handles SVGs that use `<g opacity="0.4">` wrapper groups to apply opacity to multiple paths, in addition to the existing support for path-level opacity attributes.
