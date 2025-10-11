---
"stera-icons": patch
---

fix: correct metadata lookup to preserve icon version history during builds

Fixed a bug where the build script wasn't properly looking up existing icon metadata, causing all icons to be incorrectly marked as "new" with the current version instead of preserving their historical `versionAdded` values. The lookup now correctly uses name+variant matching first (matching the current metadata structure), with fallback to componentName for backward compatibility.

