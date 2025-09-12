# Stera Icons

A lightweight, tree-shakeable React icon library built from Figma with a complete Figma → Code pipeline.

## Features

- 📦 **Tree-shakeable**: Import only the icons you need
- ⚡ **Lightweight**: Optimized SVGs with minimal bundle impact
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- ♿ **Accessible**: Built-in ARIA support for screen readers
- 🎯 **Per-icon imports**: Import individual icons for maximum optimization
- 🔄 **Automated**: Complete build pipeline from Figma to npm

## Installation

```bash
npm install @stera/icons
# or
yarn add @stera/icons
# or
pnpm add @stera/icons
```

## Usage

### Basic Usage

```tsx
import { Search, Heart, Star, Cog, User, Home, Envalope, Phone, Calendar, Download } from '@stera/icons';

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
import SearchIcon from '@stera/icons/search';
import HeartFilled from '@stera/icons/heart-filled';

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

Icons are named based on their Figma export names. Some common naming patterns:

- **Settings**: `Cog` (gear icon)
- **Mail/Email**: `Envalope` (envelope icon)
- **Filled variants**: Add `Filled` suffix (e.g., `HeartFilled`, `StarFilled`)
- **Default variants**: Use the base name (e.g., `Heart`, `Star`)

To see all available icons, check `packages/react/src/index.ts` or use the demo app to browse icons visually.

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

## Quick Start

1. **Export from Figma**: Use your custom plugin to export `icons-export.json`
2. **Generate components**: `pnpm build:icons icons-export.json`
3. **Build library**: `pnpm build`
4. **View demo**: `pnpm dev`

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/chazgiese/stera-icons.git
cd stera-icons

# Install dependencies
pnpm install

# (Optional) Test with sample icons
pnpm build:icons icons-export.json
pnpm build

# Start the demo
pnpm dev
```

### Building Icons from Figma

1. **Export from Figma**: Use your custom plugin to export `icons-export.json`
2. **Place the file**: Put `icons-export.json` in the project root
3. **Generate React components**:

```bash
pnpm build:icons icons-export.json
```

This will:
- Process the JSON export
- Optimize SVGs with SVGO
- Generate React components with SVGR
- Create TypeScript definitions
- Generate metadata and name mappings

4. **Build the complete library**:

```bash
pnpm build
```

This will:
- Build the React package first (`@stera/icons`)
- Then build the demo application (`@stera/icons-react-demo`)
- Generate ESM and CJS bundles
- Generate TypeScript definitions
- Create source maps
- Output to `packages/react/dist/`

### Icon Export Format

Your Figma plugin should export a JSON file with this structure:

```json
{
  "exportedAt": "2024-01-15T10:30:00.000Z",
  "totalIcons": 5,
  "icons": [
    {
      "name": "search",
      "tags": "search, find, magnify, lookup",
      "variants": [
        {
          "variant": "Outline",
          "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">...</svg>"
        },
        {
          "variant": "Fill",
          "svg": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">...</svg>"
        }
      ]
    }
  ]
}
```

**Note**: Only `Outline` and `Fill` variants are processed in v1. `Stroke` variants are ignored.

### Project Structure

```
stera-icons/
├── packages/
│   └── react/                 # Main React package
│       ├── src/
│       │   ├── icons/         # Generated icon components
│       │   ├── types.ts       # TypeScript definitions
│       │   └── index.ts       # Main exports
│       └── dist/              # Built package + metadata
├── scripts/
│   ├── build-icons.js         # Icon processing script
│   ├── svgo.config.js         # SVG optimization config
│   ├── svgr-template.js       # React component template
│   └── helpers.js             # Utility functions
├── samples/
│   └── vite-react-demo/       # Demo application
├── icons-export.json          # Figma export (sample included)
└── .github/workflows/         # CI/CD pipelines
```

### Generated Files

After running `pnpm build:icons`, you'll get:

- **React Components**: `packages/react/src/icons/*.tsx` - Individual icon components
- **Main Index**: `packages/react/src/index.ts` - Exports all icons
- **Metadata**: `packages/react/dist/icons.meta.json` - Searchable tags and info
- **Name Mapping**: `packages/react/dist/name_map.json` - Stable import mapping

### Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm -F @stera/icons test
```

### Demo

```bash
# Start the demo application
pnpm dev
```

## Troubleshooting

### Common Issues

1. **Build fails**: Check that `icons-export.json` is in the project root
2. **SVG not optimized**: Verify SVGO config in `scripts/svgo.config.js`
3. **Components not generated**: Check SVGR template in `scripts/svgr-template.js`
4. **Type errors**: Ensure TypeScript config is correct
5. **Path not found**: Make sure to run `pnpm build:icons icons-export.json` with the correct path
6. **Icon not found**: Check the actual exported icon names in `packages/react/src/index.ts` - some icons may have different names (e.g., `Cog` instead of `Settings`, `Envalope` instead of `Mail`)
7. **Build order issues**: The build process runs packages sequentially - React package first, then demo app

### Debug Mode

Run with debug logging:

```bash
DEBUG=* pnpm build:icons icons-export.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT © [Your Organization](https://github.com/your-org)

## Acknowledgments

- Built with [SVGO](https://github.com/svg/svgo) for SVG optimization
- Generated with [SVGR](https://github.com/gregberge/svgr) for React components
- Bundled with [tsup](https://github.com/egoist/tsup) for optimal output
- Managed with [Changesets](https://github.com/changesets/changesets) for versioning
