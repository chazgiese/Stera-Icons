---
"stera-icons": patch
---

Fix color prop not applying to icon paths

The `color` prop on icon components was being ignored because all generated `<path>` elements had an explicit `fill="currentColor"` attribute. This prevented paths from inheriting the `fill` value set on the parent `<svg>` element by `IconBase`. The `currentColor` keyword resolves to the CSS `color` property, not the SVG `fill` attribute, so the user-provided color never reached the paths.

Removed the `convertColors` and `addAttributesToSVGElement` SVGO plugins that were adding `fill="currentColor"` to paths during the build. Paths now have no explicit `fill` attribute and correctly inherit from the parent SVG's `fill={color}` set by `IconBase`.
