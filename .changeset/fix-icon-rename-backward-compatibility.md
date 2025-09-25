---
"stera-icons": patch
---

Fix icon rename backward compatibility issue

- Updated build process to handle icon name changes gracefully
- Added backward compatibility exports for renamed icons (e.g., checkmark → check)
- Prevents TypeScript errors when icons are renamed in icons-export.json
- Maintains existing imports while allowing new naming conventions
