# Stera Icons

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/stera-icons)](https://bundlephobia.com/package/stera-icons)
[![npm downloads](https://img.shields.io/npm/dm/stera-icons.svg)](https://www.npmjs.com/package/stera-icons)

A lightweight React icon library with TypeScript support and five variants for every icon.

## Installation

```bash
npm install stera-icons
# or
yarn add stera-icons
# or
pnpm add stera-icons
```

## Features

- Tree-shakeable imports - only bundle what you use
- TypeScript support with full type safety
- Five variants per icon: regular, bold, filled, filltone, linetone
- Accessible by default with ARIA support
- Optimized SVGs - each icon adds roughly 1-2KB to your bundle

## Usage

```tsx
import { SearchIcon, HeartIcon, StarIcon } from 'stera-icons';

function App() {
  return (
    <div>
      <SearchIcon size={24} color="#646cff" aria-label="Search" />
      <HeartIcon size={20} color="red" />
      <StarIcon size={32} />
    </div>
  );
}
```

### Variants

Each icon supports five variants. The default is `regular`:

```tsx
import { SearchIcon } from 'stera-icons';

function App() {
  return (
    <div>
      <SearchIcon variant="regular" size={24} />
      <SearchIcon variant="bold" size={24} />
      <SearchIcon variant="filled" size={24} />
      <SearchIcon variant="filltone" size={24} />
      <SearchIcon variant="linetone" size={24} />
    </div>
  );
}
```

### Accessibility

For decorative icons, hide them from screen readers:

```tsx
<SearchIcon aria-hidden="true" />
```

For meaningful icons, provide context:

```tsx
<SearchIcon aria-label="Search products" />
```

## API

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'regular' \| 'bold' \| 'filled' \| 'filltone' \| 'linetone'` | `'regular'` | Icon variant style |
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (inherits text color by default) |
| `className` | `string` | - | Additional CSS class |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `aria-hidden` | `boolean` | - | Hide from screen readers |
| `...props` | `SVGProps<SVGSVGElement>` | - | All other SVG props |

## Icon Naming

All icon components use the `{Name}Icon` pattern (e.g., `SearchIcon`, `HomeIcon`, `UserIcon`) to avoid naming conflicts.

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
}

.search-icon {
  color: #666;
}
```

### Dynamic Icon Loading

```tsx
import { useState } from 'react';
import * as Icons from 'stera-icons';

const iconNames = ['SearchIcon', 'HeartIcon', 'StarIcon'] as const;

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

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
