---
"stera-icons": minor
---

# Add 52 New Icons

This release adds 52 new icons to the Stera Icons library, bringing the total from 366 to 418 icons.

## New Icons Added

- **wifi-slash** - WiFi connection disabled/no signal icon
- **wine-bottle** - Wine bottle icon for beverages and alcohol
- **wine-glass** - Wine glass icon for drinks and celebrations

## Icon Variants

Each new icon includes three variants:
- Regular (outline style)
- Bold (thicker stroke)
- Filled (solid style)

## Usage

```tsx
import { WifiSlash, WineBottle, WineGlass } from 'stera-icons';

// Use any variant
<WifiSlash variant="regular" />
<WineBottle variant="bold" />
<WineGlass variant="filled" />
```

## Technical Details

- All icons are optimized SVGs
- Tree-shakeable imports
- TypeScript support
- Consistent 24x24 viewBox
- Accessible with proper ARIA attributes
