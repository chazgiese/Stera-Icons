# @stera/icons

## 5.8.1

### Patch Changes

- ea87cb6: Fix `barricade` and `clock-4` icon drawings.

## 5.8.0

### Minor Changes

- e56d4f8: Add new icons and update existing icons.

## 5.7.0

### Minor Changes

- 44d8515: Add new icons

## 5.6.0

### Minor Changes

- fba4f2c: Add subpath exports for individual icons

## 5.5.0

### Minor Changes

- 4ed257f: Add new icons

## 5.4.0

### Minor Changes

- 03aac07: Update icon variants with improved SVG content and styling

## 5.3.0

### Minor Changes

- db89c99: Add new circle-notch loading icon and update existing icons (alarm-clock, circle-slash, tally-marks)

## 5.2.0

### Minor Changes

- eef2ae9: Add new icons and update existing ones

## 5.1.0

### Minor Changes

- 482411e: Add new icon variants and update existing icons

  - Add filltone and linetone variants for existing icons
  - Add new icons: scan-barcode, scribble, signature, signature-x, sliders, sliders-v, square-grid, square-grid-plus, tv-play-alt, wrist-watch
  - Add new variants: more-circle-v, more-square-v, more-v, send-h, send-v, settings, text-bold
  - Remove deprecated icons: list-bullet-two, list-check-two, list-two, mail-check, mail-minus, mail-plus, mail-slash, mail-x, more-circle-vertical, more-square-vertical, more-vertical, pencil, send-horizontal, send-vertical, sliders-horizontal, sliders-vertical, square-four, square-four-plus, text-b, tv-play
  - Update icon components with consistent styling and structure

## 5.0.4

### Patch Changes

- 892575f: fix: prevent tsup from deleting metadata files during build

  The tsup build step was cleaning the entire dist folder including icons.meta.json, causing all icons to be marked as "new" with the current version. Changed tsup to not clean the dist folder and added manual cleanup of only build artifacts (js/ts files) before running tsup, preserving metadata files so version history is correctly maintained.

## 5.0.3

### Patch Changes

- eeda95f: fix: correct metadata lookup to preserve icon version history during builds

  Fixed a bug where the build script wasn't properly looking up existing icon metadata, causing all icons to be incorrectly marked as "new" with the current version instead of preserving their historical `versionAdded` values. The lookup now correctly uses name+variant matching to preserve version history.

## 5.0.2

### Patch Changes

- cdb1905: Fix metadata component names to reflect wrapper component API. The icons.meta.json now correctly shows the wrapper component name (e.g., "AiIcon") instead of variant-specific names (e.g., "AiIconBold"), since users access icons via the variant prop like `<AiIcon variant="bold">`.

## 5.0.1

### Patch Changes

- 5b13d1a: Fix icon version metadata for more accurate version tracking history

## 5.0.0

### Major Changes

- be3d230: **BREAKING CHANGE: All icon components now have "Icon" suffix**

  To prevent naming conflicts with user components, all icon component names now include an "Icon" suffix. This aligns with industry standards from Material-UI Icons, Heroicons, and other popular icon libraries.

  **Migration:**

  Update all icon imports to use the new naming convention:

  ```tsx
  // Before
  import { Search, Heart, Home, User } from "stera-icons";

  // After
  import { SearchIcon, HeartIcon, HomeIcon, UserIcon } from "stera-icons";
  ```

  **Variant naming:**

  - Regular: `SearchIcon`, `HeartIcon`, etc.
  - Bold: `SearchIconBold`, `HeartIconBold`, etc.
  - Filled: `SearchIconFilled`, `HeartIconFilled`, etc.

  **Benefits:**

  - ✅ No naming conflicts with existing components in your codebase
  - ✅ Follows industry-standard naming conventions
  - ✅ More explicit and self-documenting
  - ✅ Better developer experience with clearer intent

## 4.0.0

### Major Changes

- **BREAKING CHANGE: All icon components now have "Icon" suffix**

  To prevent naming conflicts with user components, all icon component names now include an "Icon" suffix. This aligns with industry standards from Material-UI Icons, Heroicons, and other popular icon libraries.

  **Migration:**

  Update all icon imports to use the new naming convention:

  ```tsx
  // Before
  import { Search, Heart, Home, User } from "stera-icons";

  // After
  import { SearchIcon, HeartIcon, HomeIcon, UserIcon } from "stera-icons";
  ```

  **Variant naming:**

  - Regular: `SearchIcon`, `HeartIcon`, etc.
  - Bold: `SearchIconBold`, `HeartIconBold`, etc.
  - Filled: `SearchIconFilled`, `HeartIconFilled`, etc.

  **Benefits:**

  - ✅ No naming conflicts with existing components in your codebase
  - ✅ Follows industry-standard naming conventions
  - ✅ More explicit and self-documenting
  - ✅ Better developer experience with clearer intent

## 3.2.0

### Minor Changes

- Add comprehensive chart and visualization icon set plus alignment and business icons

  ## New Icons Added (105 total)

  ### Chart & Data Visualization Icons

  - **Area Chart**: AreaChart, AreaChartBold, AreaChartFilled
  - **Bar Charts**: BarChart, BarChartAsc, BarChartDesc, BarChartRow, BarChartRowAsc, BarChartRowDesc, BarChartXY (with Bold/Filled variants)
  - **Line Charts**: LineChart, LineChartDesc, LineChartXY, LineChartXYDesc (with Bold/Filled variants)
  - **Specialized Charts**: CandleChart, ScatterChart, WaterfallChart, WaterfallChartX, WaterfallChartXY (with Bold/Filled variants)
  - **Trend Icons**: TrendUp, TrendDown (with Bold/Filled variants)
  - **3D Visualization**: CubicGraph (with Bold/Filled variants)

  ### Alignment & Layout Icons

  - **Horizontal Alignment**: AlignHorizontalLeft, AlignHorizontalCenter, AlignHorizontalRight (with Bold/Filled variants)
  - **Vertical Alignment**: AlignVerticalTop, AlignVerticalCenter, AlignVerticalBottom (with Bold/Filled variants)
  - **Grid & Layout**: GridShapes (with Bold/Filled variants)

  ### Business & Commerce Icons

  - **Business**: Briefcase, Store (with Bold/Filled variants)
  - **Gifts**: Gift, GiftBox (with Bold/Filled variants)
  - **Card Management**: CardHolder (with Bold/Filled variants)

  ### Label & Container Icons

  - **Container Labels**: CanLabel, BottleLabel, WineBottleLabel (with Bold/Filled variants)

  ## Modified Icons (192 total)

  Various existing icons have been updated with improved designs and consistency improvements.

  ## Total Impact

  - **1,665 total icon components** (up from 1,590)
  - **105 new icons** added
  - **192 existing icons** modified/improved
  - **1,368 unchanged icons** maintained

  This release significantly expands the chart and data visualization capabilities while adding essential business and alignment tools for modern UI development.

- Add new icons for testing version detection

## 3.1.0

### Minor Changes

- ff55d16: ## Icon Updates and Improvements

  ### Added

  - New chart axis icons with improved naming convention (chart-bar-x-axis, chart-bar-y-axis, chart-bar-x-y-axis)

  ### Changed

  - Updated icon naming convention for chart-related icons to use hyphens (e.g., chart-bar-xaxis → chart-bar-x-axis)
  - Improved SVG paths for various icons including globe, hand-right, image-pile, link, pencil, send, trophy, and x icons

  ### Removed

  - Deprecated flask-full-2 icons
  - Deprecated rulers-2 icons
  - Old chart axis icons with previous naming convention

  This update improves icon consistency and adds new chart visualization icons with better naming conventions.

## 3.0.3

### Patch Changes

- ## New Icons Added

  ### Annotation & Communication

  - `annotation` (regular, bold, filled)
  - `bubble` (regular, bold, filled)
  - `comment-bubble`
  - `reply` (regular, bold)

  ### Arrow & Navigation

  - `arrow-corner-down-left` (regular, bold, filled)
  - `arrow-corner-down-right` (regular, bold, filled)
  - `arrow-corner-up-left` (regular, bold, filled)
  - `arrow-corner-up-right` (regular, bold, filled)
  - `arrow-line-right` (bold, filled)
  - `arrow-up-down` (bold)

  ### Building & Architecture

  - `building` (regular, bold, filled)
  - `city` (regular, bold, filled)

  ### Chart & Data Visualization

  - `chart-bar-big` (regular, bold, filled)
  - `chart-bar-x-yaxis` (regular, bold, filled)
  - `chart-bar-xaxis-2` (regular, bold, filled)
  - `chart-bar-xaxis-big` (regular, bold, filled)
  - `chart-bar-xaxis` (regular, bold, filled)
  - `chart-bar-y-big` (regular, bold, filled)
  - `chart-bar-y` (regular, bold, filled)
  - `chart-bar-yaxis-big` (regular, bold, filled)
  - `chart-donut` (regular, bold, filled)
  - `chart-line` (regular, bold, filled)
  - `chart-pie-alt` (regular, bold, filled)

  ### Science & Laboratory

  - `flask` (regular, bold, filled)
  - `flask-full` (regular, bold, filled)
  - `flask-full-2` (regular, bold, filled)
  - `microscope` (regular, bold, filled)
  - `test-tube` (regular, bold, filled)
  - `test-tube-full` (regular, bold, filled)

  ### Tools & Measurement

  - `bounding-box` (regular, bold, filled)
  - `ruler` (regular, bold, filled)
  - `rulers` (regular, bold, filled)
  - `rulers-2` (regular, bold, filled)

  ### Space & Technology

  - `rocket` (regular, bold, filled)

  ### Nature & Growth

  - `seedling` (regular, bold, filled)

  ### Additional Icons

  - `astrisk` (regular, bold, filled)
  - `astrisk-alt`
  - `bell-x`
  - `check-badge` (regular, bold)
  - `check-filled`
  - `chevrons-right-filled`
  - `circle-divide-horizontal-filled`
  - `circle-slash`
  - `cli-bold`
  - `code` (regular, bold, filled)
  - `cog`
  - `cube` (regular, bold, filled)
  - `cube-package` (regular, bold)
  - `cube-package-simple-bold`
  - `currency-cent`
  - `cursor-click` (regular, bold, filled)
  - `cursor-pointer-bold`
  - `cursor`
  - `delete` (bold, filled)
  - `device-laptop` (regular, bold, filled)
  - `diamond` (regular, bold, filled)
  - `eye` (regular, bold, filled)
  - `eye-closed` (regular, bold)
  - `eye-off`
  - `flow-merge` (bold, filled)
  - `globe-filled`
  - `hand-right-bold`
  - `headphones`
  - `image-pile` (regular, bold, filled)
  - `keyhole` (regular, filled)
  - `label-alt`
  - `layers-filled`
  - `link-filled`
  - `list-check-two-filled`
  - `medal` (regular, bold)
  - `medal-star` (regular, filled)
  - `mic-off` (bold, filled)
  - `moon-crescent` (regular, bold, filled)
  - `paw-print-filled`
  - `pen` (regular, bold, filled)
  - `pen-nib` (regular, bold, filled)
  - `pencil` (regular, bold, filled)
  - `plug` (regular, bold, filled)
  - `receipt-alt-bold`
  - `save-bold`
  - `scissors` (regular, filled)
  - `send` (regular, bold, filled)
  - `send-horizontal` (regular, filled)
  - `send-vertical` (regular, bold, filled)
  - `shield-slash` (regular, bold, filled)
  - `sort` (regular, bold)
  - `sort-ascending` (regular, bold)
  - `sort-ascending-narrow-bold`
  - `sort-narrow-bold`
  - `speaker-off` (regular, bold)
  - `star` (regular, filled)
  - `star-half`
  - `tag` (regular, bold, filled)
  - `trophy` (regular, bold, filled)
  - `wave-sine-filled`
  - `wave-triangle`
  - `wifi` (regular, bold, filled)
  - `wifi-slash` (regular, bold, filled)
  - `x-filled`

  ## Changes

  - Renamed `chart-square-bar` to `chart-bar-square` for consistency
  - Updated 532 icons with latest designs
  - All tests passing, no linting errors

## 3.0.2

### Patch Changes

- ## New Icons Added

  ### Annotation & Communication

  - `annotation` (regular, bold, filled)
  - `bubble` (regular, bold, filled)
  - `comment-bubble`
  - `reply` (regular, bold)

  ### Arrow & Navigation

  - `arrow-corner-down-left` (regular, bold, filled)
  - `arrow-corner-down-right` (regular, bold, filled)
  - `arrow-corner-up-left` (regular, bold, filled)
  - `arrow-corner-up-right` (regular, bold, filled)
  - `arrow-line-right` (bold, filled)
  - `arrow-up-down` (bold)

  ### Building & Architecture

  - `building` (regular, bold, filled)
  - `city` (regular, bold, filled)

  ### Chart & Data Visualization

  - `chart-bar-big` (regular, bold, filled)
  - `chart-bar-x-yaxis` (regular, bold, filled)
  - `chart-bar-xaxis-2` (regular, bold, filled)
  - `chart-bar-xaxis-big` (regular, bold, filled)
  - `chart-bar-xaxis` (regular, bold, filled)
  - `chart-bar-y-big` (regular, bold, filled)
  - `chart-bar-y` (regular, bold, filled)
  - `chart-bar-yaxis-big` (regular, bold, filled)
  - `chart-donut` (regular, bold, filled)
  - `chart-line` (regular, bold, filled)
  - `chart-pie-alt` (regular, bold, filled)

  ### Science & Laboratory

  - `flask` (regular, bold, filled)
  - `flask-full` (regular, bold, filled)
  - `flask-full-2` (regular, bold, filled)
  - `microscope` (regular, bold, filled)
  - `test-tube` (regular, bold, filled)
  - `test-tube-full` (regular, bold, filled)

  ### Tools & Measurement

  - `bounding-box` (regular, bold, filled)
  - `ruler` (regular, bold, filled)
  - `rulers` (regular, bold, filled)
  - `rulers-2` (regular, bold, filled)

  ### Space & Technology

  - `rocket` (regular, bold, filled)

  ### Nature & Growth

  - `seedling` (regular, bold, filled)

  ### Additional Icons

  - `astrisk` (regular, bold, filled)
  - `astrisk-alt`
  - `bell-x`
  - `check-badge` (regular, bold)
  - `check-filled`
  - `chevrons-right-filled`
  - `circle-divide-horizontal-filled`
  - `circle-slash`
  - `cli-bold`
  - `code` (regular, bold, filled)
  - `cog`
  - `cube` (regular, bold, filled)
  - `cube-package` (regular, bold)
  - `cube-package-simple-bold`
  - `currency-cent`
  - `cursor-click` (regular, bold, filled)
  - `cursor-pointer-bold`
  - `cursor`
  - `delete` (bold, filled)
  - `device-laptop` (regular, bold, filled)
  - `diamond` (regular, bold, filled)
  - `eye` (regular, bold, filled)
  - `eye-closed` (regular, bold)
  - `eye-off`
  - `flow-merge` (bold, filled)
  - `globe-filled`
  - `hand-right-bold`
  - `headphones`
  - `image-pile` (regular, bold, filled)
  - `keyhole` (regular, filled)
  - `label-alt`
  - `layers-filled`
  - `link-filled`
  - `list-check-two-filled`
  - `medal` (regular, bold)
  - `medal-star` (regular, filled)
  - `mic-off` (bold, filled)
  - `moon-crescent` (regular, bold, filled)
  - `paw-print-filled`
  - `pen` (regular, bold, filled)
  - `pen-nib` (regular, bold, filled)
  - `pencil` (regular, bold, filled)
  - `plug` (regular, bold, filled)
  - `receipt-alt-bold`
  - `save-bold`
  - `scissors` (regular, filled)
  - `send` (regular, bold, filled)
  - `send-horizontal` (regular, filled)
  - `send-vertical` (regular, bold, filled)
  - `shield-slash` (regular, bold, filled)
  - `sort` (regular, bold)
  - `sort-ascending` (regular, bold)
  - `sort-ascending-narrow-bold`
  - `sort-narrow-bold`
  - `speaker-off` (regular, bold)
  - `star` (regular, filled)
  - `star-half`
  - `tag` (regular, bold, filled)
  - `trophy` (regular, bold, filled)
  - `wave-sine-filled`
  - `wave-triangle`
  - `wifi` (regular, bold, filled)
  - `wifi-slash` (regular, bold, filled)
  - `x-filled`

  ## Changes

  - Renamed `chart-square-bar` to `chart-bar-square` for consistency
  - Updated 532 icons with latest designs
  - All tests passing, no linting errors

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

  - **Renamed**: `envalope` → `mail`
  - **Removed**: `currency-euro-circle` (replaced with `currency-euro-cirlce`)

## 2.2.2

### Patch Changes

- e0e431d: Fix missing CheckBold export - ensure CheckBold component is properly exported from the package for users who renamed checkmark to check icons.

## 2.2.1

### Patch Changes

- 1d03a48: Fix icon rename issue

  - Updated build process to handle icon name changes gracefully
  - Prevents TypeScript errors when icons are renamed in icons-export.json

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

  - None - this is an additive update
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
