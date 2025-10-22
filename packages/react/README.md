# Stera Icons

A lightweight, tree-shakeable React icon library with TypeScript support and accessibility features.

## Features

- 📦 **Tree-shakeable**: Import only the icons you need
- ⚡ **Lightweight**: Optimized SVGs with minimal bundle impact (~3.8MB package size)
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ♿ **Accessible**: Built-in ARIA support for screen readers
- 🎯 **Per-icon imports**: Import individual icons for maximum optimization
- 🚀 **Optimized builds**: Production-ready with no development overhead

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

The package includes 552+ icons with 5 variants each (regular, bold, filled, filltone, linetone), but thanks to tree-shaking, you only pay for what you import.

## Usage

### Basic Usage

```tsx
import { SearchIcon, HeartIcon, StarIcon, CogIcon, UserIcon, HomeIcon, MailIcon, PhoneIcon, CalendarIcon, DownloadIcon } from 'stera-icons';

function App() {
  return (
    <div>
      <SearchIcon size={24} color="#646cff" aria-label="Search" />
      <HeartIcon size={20} color="red" />
      <StarIcon size={32} />
      <CogIcon size={24} aria-label="Settings" />
      <UserIcon size={20} />
      <HomeIcon size={24} />
      <MailIcon size={20} aria-label="Email" />
      <PhoneIcon size={24} />
      <CalendarIcon size={20} />
      <DownloadIcon size={24} />
    </div>
  );
}
```

### With Variants

```tsx
import { SearchIcon, HeartIcon } from 'stera-icons';

function App() {
  return (
    <div>
      {/* Use variant prop to switch between icon styles */}
      <SearchIcon variant="regular" size={24} />
      <SearchIcon variant="bold" size={24} />
      <SearchIcon variant="filled" size={24} />
      <SearchIcon variant="filltone" size={24} />
      <SearchIcon variant="linetone" size={24} />
      
      {/* Regular variant is the default */}
      <HeartIcon size={20} />
      <HeartIcon variant="bold" size={20} />
      <HeartIcon variant="filled" size={20} />
    </div>
  );
}
```

### Accessibility

```tsx
// Decorative icons (hidden from screen readers)
<SearchIcon aria-hidden="true" />

// Meaningful icons (provide context)
<SearchIcon aria-label="Search products" />
<HeartIcon aria-label="Add to favorites" />
```

## Icon Naming

All icon components are suffixed with "Icon" to prevent naming conflicts with your existing components:

- **Pattern**: `{Name}Icon` (e.g., `SearchIcon`, `HomeIcon`, `UserIcon`)
- **Variants**: Use the `variant` prop to switch between styles (regular, bold, filled, filltone, linetone)

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
import { SearchIcon } from 'stera-icons';

function SearchButton() {
  return (
    <button className="search-btn">
      <SearchIcon size={20} className="search-icon" />
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

const iconNames = ['SearchIcon', 'HeartIcon', 'StarIcon', 'CogIcon', 'UserIcon'] as const;

function IconSelector() {
  const [selectedIcon, setSelectedIcon] = useState('SearchIcon');
  
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
