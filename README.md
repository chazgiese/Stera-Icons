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

- Three weights: Regular, Bold, Fill
- Duotone style option
- Tree-shakeable imports - only bundle what you use
- TypeScript support with full type safety
- Accessible by default with ARIA support
- Optimized SVGs

## Usage

```tsx
import { HeartIcon } from 'stera-icons';

function App() {
  return (
    <div>
      <HeartIcon />
    </div>
  );
}
```

### Icon Naming

All icon components use the `{Name}Icon` pattern (e.g., `SearchIcon`, `HomeIcon`, `UserIcon`) to avoid naming conflicts.


### Using Variants

```tsx
import { SearchIcon } from 'stera-icons';

function SearchExamples() {
  return (
    <div>
      {/* Regular weight, no duotone (default) */}
      <SearchIcon />
      
      {/* Regular weight with duotone */}
      <SearchIcon duotone />
      
      {/* Bold weight, no duotone */}
      <SearchIcon weight="bold" />
      
      {/* Bold weight with duotone */}
      <SearchIcon weight="bold" duotone />
      
      {/* Fill weight, no duotone */}
      <SearchIcon weight="fill" />
      
      {/* Fill weight with duotone */}
      <SearchIcon weight="fill" duotone />
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
| `weight` | `'regular' \| 'bold' \| 'fill'` | `'regular'` | Icon weight style |
| `duotone` | `boolean` | `false` | Whether to use duotone variant |
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (inherits text color by default) |
| `className` | `string` | - | Additional CSS class |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `aria-hidden` | `boolean` | - | Hide from screen readers |
| `...props` | `SVGProps<SVGSVGElement>` | - | All other SVG props |

## Dynamic Icon Loading

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
