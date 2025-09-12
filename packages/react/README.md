# Stera Icons

A lightweight, tree-shakeable React icon library with TypeScript support and accessibility features.

## Features

- 📦 **Tree-shakeable**: Import only the icons you need
- ⚡ **Lightweight**: Optimized SVGs with minimal bundle impact
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ♿ **Accessible**: Built-in ARIA support for screen readers
- 🎯 **Per-icon imports**: Import individual icons for maximum optimization

## Installation

```bash
npm install stera-icons
# or
yarn add stera-icons
# or
pnpm add stera-icons
```

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
import SearchIcon from 'stera-icons/search';
import HeartFilled from 'stera-icons/heart-filled';

function App() {
  return (
    <div>
      <SearchIcon size={24} />
      <HeartFilled size={20} color="red" />
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

Icons follow these naming patterns:

- **Settings**: `Cog` (gear icon)
- **Mail/Email**: `Envalope` (envelope icon)
- **Filled variants**: Add `Filled` suffix (e.g., `HeartFilled`, `StarFilled`)
- **Default variants**: Use the base name (e.g., `Heart`, `Star`)

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

## License

MIT © [Chaz Giese](https://github.com/chazgiese)
