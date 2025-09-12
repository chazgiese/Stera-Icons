# Stera Icons Setup Guide

This guide will help you set up and use the Stera Icons React library with the complete Figma → Code pipeline.

## Quick Start

### 1. Install Dependencies

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 2. Build Icons from Figma Export

1. Export your icons from Figma using your custom plugin
2. Place the `icons-export.json` file in the project root
3. Run the build script:

```bash
pnpm build:icons
```

This will:
- Process the JSON export
- Optimize SVGs with SVGO
- Generate React components with SVGR
- Create TypeScript definitions
- Build the library

### 3. Build the Library

```bash
pnpm build
```

### 4. Test the Library

```bash
pnpm test
```

### 5. Run the Demo

```bash
pnpm dev
```

## Project Structure

```
stera-icons/
├── packages/
│   └── react/                 # Main React package
│       ├── src/
│       │   ├── icons/         # Generated icon components
│       │   ├── types.ts       # TypeScript definitions
│       │   └── index.ts       # Main exports
│       └── dist/              # Built package
├── scripts/
│   ├── build-icons.js         # Icon processing script
│   ├── svgo.config.js         # SVG optimization config
│   ├── svgr-template.ts       # React component template
│   └── helpers.ts             # Utility functions
├── samples/
│   └── vite-react-demo/       # Demo application
└── .github/workflows/         # CI/CD pipelines
```

## Icon Export Format

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

## Generated Components

The build process generates:

- **Outline icons**: `src/icons/icon-name.tsx` → `IconName` component
- **Filled icons**: `src/icons/icon-name-filled.tsx` → `IconNameFilled` component
- **Metadata**: `dist/icons.meta.json` with searchable tags
- **Name mapping**: `dist/name_map.json` for stable imports

## Usage in Your App

### Import Individual Icons (Recommended)

```tsx
import SearchIcon from '@stera/icons/search';
import HeartFilled from '@stera/icons/heart-filled';

function App() {
  return (
    <div>
      <SearchIcon size={24} color="#646cff" />
      <HeartFilled size={20} color="red" />
    </div>
  );
}
```

### Import from Main Package

```tsx
import { Search, Heart, Star } from '@stera/icons';

function App() {
  return (
    <div>
      <Search size={24} />
      <Heart size={20} color="red" />
      <Star size={32} />
    </div>
  );
}
```

## Customization

### SVG Optimization (SVGO)

Edit `scripts/svgo.config.js` to customize SVG optimization:

```javascript
export default {
  plugins: [
    // Add or remove plugins as needed
    { name: 'removeDimensions' },
    { name: 'convertColors', params: { currentColor: true } },
    // ... more plugins
  ],
};
```

### React Component Template (SVGR)

Edit `scripts/svgr-template.ts` to customize the generated React components:

```typescript
const svgrTemplate: Template = (variables, { tpl }) => {
  // Customize the component structure
  return tpl`
    import React, { forwardRef, memo } from 'react';
    // ... your custom template
  `;
};
```

## Development Workflow

1. **Design icons in Figma**
2. **Export using your plugin** → `icons-export.json`
3. **Run build script** → `pnpm build:icons`
4. **Test locally** → `pnpm dev`
5. **Build library** → `pnpm build`
6. **Publish** → `pnpm changeset` → `pnpm release`

## Troubleshooting

### Common Issues

1. **Build fails**: Check that `icons-export.json` is in the project root
2. **SVG not optimized**: Verify SVGO config in `scripts/svgo.config.js`
3. **Components not generated**: Check SVGR template in `scripts/svgr-template.ts`
4. **Type errors**: Ensure TypeScript config is correct

### Debug Mode

Run with debug logging:

```bash
DEBUG=* pnpm build:icons
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT © [Your Organization](https://github.com/your-org)
