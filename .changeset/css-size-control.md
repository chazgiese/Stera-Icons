---
"stera-icons": patch
---

fix: omit width/height SVG attributes when size prop is not provided

Icons no longer render `width="24" height="24"` by default. When the `size` prop is omitted, no `width` or `height` attributes are added to the SVG element, giving CSS classes (e.g. Tailwind `size-3`, `w-4 h-4`) full, uncontested control over icon dimensions.

Explicit `size` prop usage is unchanged: `<Search size={32} />` still renders `width="32" height="32"`.

**Migration:** If you rely on icons defaulting to 24px without any CSS or `size` prop, add `size={24}` or a CSS size class such as `className="size-6"` to maintain the previous size.
