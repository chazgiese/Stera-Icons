# Stera Icons

A lightweight, tree-shakeable React icon library with TypeScript support and accessibility features.

## Features

- 📦 **Tree-shakeable**: Import only the icons you need
- ⚡ **Lightweight**: Optimized SVGs with minimal bundle impact (~3.8MB package size)
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ♿ **Accessible**: Built-in ARIA support for screen readers
- 🎯 **Per-icon imports**: Import individual icons for maximum optimization
- 🚀 **Optimized builds**: Production-ready with no development overhead
- 🎨 **Multiple variants**: Regular, Bold, and Filled variants for every icon

## Installation

```bash
npm install stera-icons
# or
yarn add stera-icons
# or
pnpm add stera-icons
```

## Package Size

Stera Icons is optimized for production use:

- **Package size**: ~3.8MB (unpacked)
- **Bundle size**: Each icon adds only ~1-2KB to your bundle
- **Tree-shaking**: Import only what you use for minimal impact
- **No source maps**: Production builds exclude development files for optimal size

The package includes 1000+ icons across Regular, Bold, and Filled variants, but thanks to tree-shaking, you only pay for what you import.

## Usage

### Basic Usage

```tsx
import { Search, Heart, Star, Cog, User, Home, Envalope, Phone, Calendar, Download } from 'stera-icons';

function App() {
  return (
    <div>
      <Search size={24} color="#646cff" aria-label="Search" />
      <Heart size={20} color="red" />
      <Star size={32} />
      <Cog size={24} aria-label="Settings" />
      <User size={20} />
      <Home size={24} />
      <Envalope size={20} aria-label="Email" />
      <Phone size={24} />
      <Calendar size={20} />
      <Download size={24} />
    </div>
  );
}
```

### Per-icon Imports (Recommended)

```tsx
import Search from 'stera-icons/search';
import HeartFilled from 'stera-icons/heart-filled';
import SearchBold from 'stera-icons/search-bold';

function App() {
  return (
    <div>
      <Search size={24} />
      <HeartFilled size={20} color="red" />
      <SearchBold size={24} />
    </div>
  );
}
```

### Accessibility

```tsx
// Decorative icons (hidden from screen readers)
<Search aria-hidden="true" />

// Meaningful icons (provide context)
<Search aria-label="Search products" />
<Heart aria-label="Add to favorites" />
```

## Icon Naming

Icons follow these naming patterns:

- **Settings**: `Cog` (gear icon)
- **Mail/Email**: `Envalope` (envelope icon)
- **Filled variants**: Add `Filled` suffix (e.g., `HeartFilled`, `StarFilled`)
- **Bold variants**: Add `Bold` suffix (e.g., `HeartBold`, `StarBold`)
- **Regular variants**: Use the base name (e.g., `Heart`, `Star`)

## Icon Variants

Stera Icons provides three distinct variants for maximum design flexibility:

- **Regular**: Clean, outlined icons perfect for general use
- **Bold**: Thicker strokes for emphasis and better visibility at small sizes
- **Filled**: Solid icons for high contrast and modern designs

### Example Usage

```tsx
import { Heart, HeartBold, HeartFilled } from 'stera-icons';

function IconVariants() {
  return (
    <div>
      <Heart size={24} />        {/* Regular variant */}
      <HeartBold size={24} />    {/* Bold variant */}
      <HeartFilled size={24} />  {/* Filled variant */}
    </div>
  );
}
```

## API

### IconProps

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (inherits text color by default) |
| `className` | `string` | - | Additional CSS class |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `aria-hidden` | `boolean` | - | Hide from screen readers |
| `...props` | `SVGProps<SVGSVGElement>` | - | All other SVG props |

## Examples

### Styling with CSS

```tsx
import { Search } from 'stera-icons';

function SearchButton() {
  return (
    <button className="search-btn">
      <Search size={20} className="search-icon" />
      Search
    </button>
  );
}
```

```css
.search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
}

.search-icon {
  color: #666;
}

.search-btn:hover .search-icon {
  color: #333;
}
```

### Dynamic Icon Loading

```tsx
import { useState } from 'react';
import * as Icons from 'stera-icons';

const iconNames = ['Search', 'Heart', 'Star', 'Cog', 'User'] as const;

function IconSelector() {
  const [selectedIcon, setSelectedIcon] = useState('Search');
  
  const IconComponent = Icons[selectedIcon as keyof typeof Icons];
  
  return (
    <div>
      <select onChange={(e) => setSelectedIcon(e.target.value)}>
        {iconNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <IconComponent size={32} />
    </div>
  );
}
```

## Development

For contributors and development:

### Build Scripts

- `pnpm build` - Production build (optimized, no source maps)
- `pnpm build:dev` - Development build (with source maps for debugging)
- `pnpm dev` - Watch mode for development
- `pnpm test` - Run test suite

### Build Configuration

- **Production builds**: Optimized for size and performance
- **Development builds**: Include source maps for debugging
- **Tree-shaking**: Enabled for optimal bundle sizes
- **TypeScript**: Full type safety and IntelliSense

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
