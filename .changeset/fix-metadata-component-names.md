---
"stera-icons": patch
---

Fix metadata component names to reflect wrapper component API. The icons.meta.json now correctly shows the wrapper component name (e.g., "AiIcon") instead of variant-specific names (e.g., "AiIconBold"), since users access icons via the variant prop like `<AiIcon variant="bold">`.

