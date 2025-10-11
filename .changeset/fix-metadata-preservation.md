---
"stera-icons": patch
---

fix: prevent tsup from deleting metadata files during build

The tsup build step was cleaning the entire dist folder including icons.meta.json, causing all icons to be marked as "new" with the current version. Changed tsup to not clean the dist folder and added manual cleanup of only build artifacts (js/ts files) before running tsup, preserving metadata files so version history is correctly maintained.

