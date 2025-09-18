---
"stera-icons": patch
---

Improve build script to clean up existing icon files before generating new ones

- Add proper cleanup of existing icon files to ensure only current icons are present
- Remove skip condition for 'Stroke' variants to include all available variants
- Import rmSync for recursive file removal functionality
