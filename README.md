# Stera Icons

[![npm version](https://img.shields.io/npm/v/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight React icon library with 700+ icons in 6 variants each.

## Installation

```bash
npm install stera-icons
```

## Usage

### Namespace Import (Recommended)

```tsx
import * as Icons from 'stera-icons';

<Icons.SearchBold size={24} />
<Icons.HomeFill />
```

This is fully tree-shakable—modern bundlers only include the icons you actually use (~300 bytes per icon).

### Named Imports

```tsx
import { SearchBold, HomeFill } from 'stera-icons';

<SearchBold size={24} />
<HomeFill />
```

Both patterns tree-shake identically.

**Available variants:** `{Name}Regular`, `{Name}Bold`, `{Name}Fill`, plus duotone versions (`{Name}RegularDuotone`, etc.)

### Dynamic Variants

Use wrapper components when you need to switch variants at runtime (~1KB per icon, includes all 6 variants):

```tsx
import { Search } from 'stera-icons';

<Search />                        {/* Regular */}
<Search weight="bold" />          {/* Bold */}
<Search weight="fill" duotone />  {/* Fill + Duotone */}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |
| `weight` | `'regular' \| 'bold' \| 'fill'` | `'regular'` | Icon weight (wrapper only) |
| `duotone` | `boolean` | `false` | Use duotone variant (wrapper only) |

All standard SVG props are also supported.

## Accessibility

```tsx
<Search aria-hidden="true" />           {/* Decorative */}
<Search aria-label="Search products" /> {/* Meaningful */}
```

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
