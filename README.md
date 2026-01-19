# Stera Icons

[![npm version](https://img.shields.io/npm/v/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight React icon library with 700+ icons. All icons available in 6 variants with triple-aliased exports for maximum flexibility.

## ✨ Features

- 🎨 **700+ Icons** - Comprehensive icon set in 6 variants (Regular, Bold, Fill × Duotone/Standard)
- 🌲 **Tree-Shakeable** - Only ~300 bytes per icon variant in your bundle
- 🎯 **Triple Aliasing** - Import icons with base name, Icon suffix, or Si prefix
- 🚀 **Dynamic Loading** - Lazy-load icons at runtime for large applications
- ♿ **Accessible** - Auto `aria-hidden` for decorative icons
- 🎨 **CSS Classes** - Automatic icon-specific classes for easy styling
- 📦 **Subpath Exports** - Import directly from icon paths for optimal tree-shaking
- 🔧 **TypeScript** - Full type definitions with comprehensive JSDoc
- ⚛️ **React 16.8+** - Works with all modern React versions

## Installation

```bash
npm install stera-icons
```

## Quick Start

```tsx
import { SearchBold, SiHome } from 'stera-icons';

function App() {
  return (
    <>
      <SearchBold size={24} color="blue" />
      <SiHome size={32} />
    </>
  );
}
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

### Subpath Imports

For even better tree-shaking and smaller bundles, import directly from icon paths:

```tsx
// Import individual icons
import { Search } from 'stera-icons/icons/Search';
import { SearchBold } from 'stera-icons/icons/SearchBold';
import { SiHome } from 'stera-icons/icons/SiHome';

<Search size={24} />
<SearchBold size={24} />
<SiHome size={24} />
```

### Dynamic Icon Loading

**New!** Load icons dynamically at runtime - perfect for CMS-driven content, icon pickers, or when icon names come from APIs:

```tsx
import { DynamicIcon, iconNames } from 'stera-icons/dynamic';

// Load icon by name
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

// Build an icon picker
function IconPicker() {
  return (
    <div>
      {iconNames.map(name => (
        <DynamicIcon key={name} name={name} size={24} />
      ))}
    </div>
  );
}
```

**Performance Note:** Dynamic loading adds ~2KB + small runtime overhead. For optimal bundle size, prefer direct imports when you know the icon at build time.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |
| `weight` | `'regular' \| 'bold' \| 'fill'` | `'regular'` | Icon weight (wrapper only) |
| `duotone` | `boolean` | `false` | Use duotone variant (wrapper only) |

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

## Advanced Usage

### Utility Functions

Access internal utilities for advanced use cases:

```tsx
import { mergeClasses, toKebabCase, toPascalCase } from 'stera-icons';

const classes = mergeClasses('icon', 'active', undefined, 'large');
// => "icon active large"

const kebab = toKebabCase('SearchBold'); // => "search-bold"
const pascal = toPascalCase('search-icon'); // => "SearchIcon"
```

### TypeScript Types

Full type definitions for advanced usage:

```tsx
import type { 
  IconProps,      // Base icon props interface
  IconWeight,     // 'regular' | 'bold' | 'fill'
  SteraIcon,      // Icon component type
  IconNode,       // Icon data structure
} from 'stera-icons';

// Use in your components
const MyComponent: React.FC<IconProps> = (props) => {
  return <Search {...props} />;
};
```

### IconBase Component

For advanced use cases, access the base icon component:

```tsx
import { IconBase } from 'stera-icons/base';
import type { IconBaseProps } from 'stera-icons/base';

function CustomIcon(props: IconBaseProps) {
  return (
    <IconBase {...props} iconName="custom">
      <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
    </IconBase>
  );
}
```

## Bundle Size

Stera Icons is optimized for minimal bundle impact:

- **Direct variant import:** ~300 bytes (e.g., `SearchBold`)
- **Wrapper component:** ~1KB (e.g., `Search` with all 6 variants)
- **Dynamic loading:** ~2KB + lazy-loaded icons on demand
- **Base imports only:** ~500 bytes (IconBase + utilities)

All measurements are gzipped and minified.

## Browser Support

Stera Icons supports all browsers that support React 16.8+:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- React Native (via react-native-svg wrapper)

## Contributing

Contributions are welcome! Please see our [contributing guidelines](https://github.com/chazgiese/Stera-Icons/blob/main/CONTRIBUTING.md).

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
