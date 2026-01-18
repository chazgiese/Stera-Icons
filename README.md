# Stera Icons

[![npm version](https://img.shields.io/npm/v/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight React icon library with 700+ icons, following lucide-react patterns. All icons available in 6 variants with triple-aliased exports for maximum flexibility.

## Installation

```bash
npm install stera-icons
```

## Usage

### Direct Import (Recommended)

```tsx
import { SearchBold, HomeFill } from 'stera-icons';

<SearchBold size={24} />
<HomeFill />
```

Fully tree-shakeable—only ~300 bytes per icon variant in your bundle.

### Aliased Imports (Prevent Name Collisions)

All icons support 3 naming styles:

```tsx
// Base name
import { Search } from 'stera-icons';

// Icon suffix style
import { SearchIcon } from 'stera-icons';

// Si prefix style (recommended for consistency)
import { SiSearch, SiHome, SiUser } from 'stera-icons';
```

All aliases point to the same component with zero bundle size overhead.

### Variant Imports

Each icon has 6 variants available:

```tsx
import { SearchRegular, SearchBold, SearchFill } from 'stera-icons';
import { SearchRegularDuotone, SearchBoldDuotone, SearchFillDuotone } from 'stera-icons';

// All variants also support triple aliasing
import { SiSearchBold, SiSearchRegularDuotone } from 'stera-icons';
```

### Dynamic Variants (Convenience)

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
