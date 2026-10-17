---
"stera-icons": minor
---

Icons now carry a stable `id`, the Figma component set key, in `icons-export.json` and in every `icons.meta.json` entry. `IconMetadata` and `IconsExport` gain the `id` field. The build matches icons by id, so a renamed icon keeps its version history, and it writes the deprecated alias for a rename into `icon-aliases.json` itself.
