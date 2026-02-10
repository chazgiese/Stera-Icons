---
"stera-icons": patch
---

Fix circle element parsing in SVG builder - circles are now correctly converted to path elements instead of being silently dropped during the build process. This fixes 13 icon variants across 7 icons (atom, circle-checker, circle-dash, circle-dash-simple, device-tablet, flower, more, more-v) where circle elements were missing in the rendered output.
