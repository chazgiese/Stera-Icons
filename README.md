# Stera Icons

[![npm version](https://img.shields.io/npm/v/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight React icon library with 760+ icons. All icons available in 6 variants with triple-aliased exports for maximum flexibility.

## ✨ Features

- 🎨 **760+ Icons** - Comprehensive icon set in 6 variants (Regular, Bold, Fill × Duotone/Standard)
- 🌲 **Tree-Shakeable** - Only ~300 bytes per icon variant in your bundle
- 🎯 **Triple Aliasing** - Import icons with base name, Icon suffix, or Si prefix
- 🚀 **Dynamic Loading** - Lazy-load icons at runtime for large applications
- ♿ **Accessible** - Auto `aria-hidden` for decorative icons
- 🎨 **CSS Classes** - Automatic icon-specific classes for easy styling
- 📦 **Subpath Exports** - Import directly from icon paths for optimal tree-shaking
- 🔧 **TypeScript** - Full type definitions with comprehensive JSDoc
- ⚛️ **React 17+** - Works with all modern React versions

## Installation

```bash
npm install stera-icons
```

> Requires Node.js 18+ and React 17+. ESM-only (no CommonJS).

## Quick Start

```tsx
import { Search, Home } from 'stera-icons';

function App() {
  return (
    <>
      <Search size={24} color="blue" />
      <Home size={32} />
    </>
  );
}
```

Base icon names (`Search`, `Home`, etc.) give you the Regular variant with optimal bundle size (~300 bytes each).

## Usage

### Simple Import (Recommended)

```tsx
import { Search, Home, User } from 'stera-icons';

<Search size={24} />
<Home />
<User color="gray" />
```

### Explicit Variant Imports

Need a specific weight or duotone style? Import it directly

```tsx
import { SearchBold, HomeFill, UserRegularDuotone } from 'stera-icons';

<SearchBold size={24} />           {/* Bold weight */}
<HomeFill />                       {/* Fill weight */}
<UserRegularDuotone color="blue" /> {/* Regular + Duotone */}
```

Each icon has 6 variants available:
- `SearchRegular`, `SearchBold`, `SearchFill`
- `SearchRegularDuotone`, `SearchBoldDuotone`, `SearchFillDuotone`

### Triple Aliasing (Prevent Name Collisions)

All icons support 3 naming styles to avoid conflicts with your codebase:

```tsx
// Base name (gives you Regular variant)
import { Search } from 'stera-icons';

// Icon suffix style
import { SearchIcon } from 'stera-icons';

// Si prefix style (recommended for consistency)
import { SiSearch, SiHome, SiUser } from 'stera-icons';
```

All aliases point to the same component with zero bundle size overhead.

### Dynamic Variants (Runtime Switching)

Need to switch icon weight or duotone at runtime? Use the dynamic variants entry point

```tsx
import { Search } from 'stera-icons/dynamic-variants';

<Search />                        {/* Regular */}
<Search weight="bold" />          {/* Bold */}
<Search weight="fill" duotone />  {/* Fill + Duotone */}
```

**Note:** Dynamic variants include all 6 variants per icon (~1KB each vs ~300 bytes for direct imports). Only use this when you need runtime variant switching.

### Subpath Imports

For maximum tree-shaking control, import directly from icon paths

```tsx
import { Search } from 'stera-icons/icons/Search';
import { SearchBold } from 'stera-icons/icons/SearchBold';

<Search size={24} />
<SearchBold size={24} />
```

### Dynamic Icon Loading

Load icons dynamically at runtime when icon names come from external data sources like a CMS or API.

```tsx
import { DynamicIcon } from 'stera-icons/dynamic';

// Load icon by name from external data
function IconDisplay({ iconName }) {
  return (
    <DynamicIcon 
      name={iconName}        // e.g., "search", "home", "user"
      weight="bold"          // optional: regular, bold, fill
      duotone={false}        // optional: enable duotone variant
      size={24}
      fallback={<Spinner />} // optional: show while loading
    />
  );
}
```

**When to use:** Dynamic imports are ideal when you need to render a small number of icons whose names are determined at runtime (e.g., from a database, CMS, or user input).

**When NOT to use:** For displaying many icons at once (like an icon gallery), use direct imports instead - dynamic imports trigger individual network requests per icon.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |
| `weight` | `'regular' \| 'bold' \| 'fill'` | `'regular'` | Icon weight (dynamic variants only) |
| `duotone` | `boolean` | `false` | Use duotone variant (dynamic variants only) |

The `weight` and `duotone` props are only available when importing from `stera-icons/dynamic-variants`. For regular imports, choose the specific variant you need (e.g., `SearchBold`, `HomeFillDuotone`).

All standard SVG props are also supported.

## Accessibility

Stera Icons follows ARIA best practices:

```tsx
// Decorative icons (auto aria-hidden="true")
<Search size={24} />

// Meaningful icons (provide aria-label)
<Search aria-label="Search products" size={24} />

// Icons with text labels (explicit aria-hidden)
<button>
  <Search aria-hidden="true" />
  Search
</button>
```

**Auto aria-hidden:** Icons automatically get `aria-hidden="true"` when no accessibility props are present, following WCAG guidelines for decorative images.

## Styling with CSS

All icons include automatic CSS classes for easy targeting:

```tsx
<SearchBold size={24} className="my-icon" />
// Renders with classes: "stera stera-search-bold my-icon"
```

```css
/* Target all Stera icons */
.stera {
  transition: color 0.2s;
}

/* Target specific icon */
.stera-search-bold {
  color: blue;
}

/* Target with your own classes */
.my-icon:hover {
  color: darkblue;
}
```

## Bundle Size

Stera Icons is optimized for minimal bundle impact:

| Import Pattern | Bundle Size | Example |
|---------------|-------------|---------|
| Base name import | ~300 bytes | `import { Search } from 'stera-icons'` |
| Explicit variant | ~300 bytes | `import { SearchBold } from 'stera-icons'` |
| Dynamic variant | ~1KB | `import { Search } from 'stera-icons/dynamic-variants'` |
| Dynamic loading | ~2KB + lazy | `import { DynamicIcon } from 'stera-icons/dynamic'` |
| Base utilities | ~500 bytes | `import { IconBase } from 'stera-icons/base'` |

All measurements are gzipped and minified. The default import pattern (`import { Search }`) is optimized for the smallest possible bundle size.

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
