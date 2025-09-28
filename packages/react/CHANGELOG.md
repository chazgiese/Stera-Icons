# @stera/icons

## 3.0.0

### Major Changes

- 8f2610e: # Major Icon Library Updates

  ## New Icons Added

  - **Alarm Clock** - Regular, Bold, and Filled variants
  - **Arrow Big** series - Down, Left, Right, Up variants in all styles
  - **Arrow U** series - Left, Right, Left Top, Right Top variants
  - **Bank** - Financial institution icon
  - **Battery** series - Regular, Full, Half, Low variants in all styles
  - **Brackets** series - Curly and Square brackets with Circle and Square variants
  - **Calendar Slash** - Calendar with slash overlay
  - **Caps Lock** - Keyboard caps lock indicator
  - **Checklist** series - Regular, Checked, Unchecked variants
  - **Chevrons** series - Down, Left, Right, Up variants
  - **CPU** series - Regular and AMD variants
  - **Currency Euro Circle** - Euro symbol in circle (renamed from currency-euro-circle)
  - **Cursor** series - Click, OG, Navigation variants
  - **Curve** series - Bezier and Ease curve icons
  - **Dollar Bill** - Physical dollar bill representation
  - **Flame** - Fire/flame icon
  - **Flow Merge** - Workflow merge icon
  - **Fortress** - Castle/fortress icon
  - **Hand** series - Left, Right, Wave variants
  - **Headphones** - Audio equipment
  - **Home** series - Heart, Plus, X variants
  - **Line Segment** series - Regular, H, V variants
  - **Mail** series - Regular, Check, Minus, Open, Plus, Slash, X variants (renamed from envalope)
  - **Music** - Musical note icon
  - **Notebook** series - Regular and Log variants
  - **Option Key** - Mac option key
  - **Paw Print** - Animal paw print
  - **Peace** - Peace symbol
  - **Pen Nib** - Fountain pen nib
  - **Pencil Tip** - Pencil tip detail
  - **Play Rectangle** - Play button in rectangle
  - **Playlist** - Music playlist icon
  - **Plug** - Electrical plug
  - **Scan Face** - Face scanning icon
  - **Scissors** - Cutting tool
  - **Shield** series - Alert, Check, Slash variants
  - **Sort** series - Regular, Ascending, Ascending Narrow, Narrow variants
  - **Sparkles Alt** - Alternative sparkles design
  - **Target** - Target/bullseye icon
  - **Timer** - Countdown timer
  - **TV** series - Regular and Play variants
  - **Wave** series - Sine, Square, Triangle wave forms
  - **Yin Yang** - Yin yang symbol

  ## Icon Updates

  - Updated many existing icons with improved designs
  - Fixed various visual inconsistencies
  - Enhanced stroke weights and proportions

  ## Breaking Changes

  - **Renamed**: `envalope` → `mail` (with backward compatibility exports)
  - **Removed**: `currency-euro-circle` (replaced with `currency-euro-cirlce`)

  ## Backward Compatibility

  - All renamed icons maintain backward compatibility through export aliases
  - Existing code using old icon names will continue to work

## 2.2.2

### Patch Changes

- e0e431d: Fix missing CheckBold export - ensure CheckBold component is properly exported from the package for users who renamed checkmark to check icons.

## 2.2.1

### Patch Changes

- 1d03a48: Fix icon rename backward compatibility issue

  - Updated build process to handle icon name changes gracefully
  - Added backward compatibility exports for renamed icons (e.g., checkmark → check)
  - Prevents TypeScript errors when icons are renamed in icons-export.json
  - Maintains existing imports while allowing new naming conventions

## 2.2.0

### Minor Changes

- 9e21329: # Add 52 New Icons

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

## 2.1.2

### Patch Changes

- 35a1f45: Fix minor design bugs in thumbs-up regular and arrow-square-right regular icons

## 2.1.1

### Patch Changes

- 42cdac0: Improve build script to clean up existing icon files before generating new ones

  - Add proper cleanup of existing icon files to ensure only current icons are present
  - Remove skip condition for 'Stroke' variants to include all available variants
  - Import rmSync for recursive file removal functionality

## 2.1.0

### Minor Changes

- 2176a3a: fix: update icon designs and regenerate components

  - Fix SVG path issues in multiple icons
  - Rename text-bolden to text-b for consistency
  - Add missing arrow direction icons (up, down, left, right, diagonal)
  - Regenerate all React components from updated source
  - Update metadata and name mapping files

## 2.0.1

### Patch Changes

- 2f1bb2a: feat: rebuild icons from updated icons-export.json

  - Regenerated all 1,098 icon components from updated source data
  - Added missing bold variants for emote-surprised and sliders-horizontal
  - Updated icon metadata and name mappings
  - Fixed icon generation issues from source data

## 2.0.0

### Major Changes

- 178316f: # Major Update: Bold Variants Added

  This is a major update that adds Bold variants for all 1000+ icons in the Stera Icons library.

  ## What's New

  - **Bold Variants**: Added Bold variants for every icon alongside existing Regular and Filled variants
  - **Enhanced Design Flexibility**: Three distinct icon styles (Regular, Bold, Filled) for maximum design flexibility
  - **Updated Documentation**: Comprehensive README updates with variant usage examples
  - **Icon Count**: Now includes 1000+ icons across all variants

  ## Breaking Changes

  - None - this is an additive update that maintains backward compatibility
  - All existing Regular and Filled variants remain unchanged
  - New Bold variants are available as separate imports

  ## Usage

  ```tsx
  import { Heart, HeartBold, HeartFilled } from 'stera-icons';

  // All three variants available
  <Heart size={24} />        // Regular
  <HeartBold size={24} />    // Bold
  <HeartFilled size={24} />  // Filled
  ```

  ## Migration

  No migration required - existing code continues to work unchanged. New Bold variants are available for use when needed.

## 1.4.0

### Minor Changes

- 65ff3b0: the "types" condition is now placed first

## 1.3.0

### Minor Changes

- 6f130fc: Enhanced icon components with improved TypeScript types and ESLint configuration

  - Updated all 729 icon components with proper TypeScript interfaces
  - Replaced .eslintrc.cjs with modern eslint.config.mjs
  - Enhanced type safety with IconProps interface
  - Improved build configuration and package dependencies
  - Fixed critical issues with importing icons

## 1.2.0

### Minor Changes

- Optimized package size

## 1.1.2

### Patch Changes

- added readme

## 1.1.1

### Patch Changes

- 84eabaf: Hello, Traveler

## 1.1.0

### Minor Changes

- fbb587b: Hello, Traveler
