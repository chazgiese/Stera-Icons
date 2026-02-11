# @stera/icons

## 8.0.11

### Patch Changes

- a90be35: Fix color prop not applying to icon paths

  The `color` prop on icon components was being ignored because all generated `<path>` elements had an explicit `fill="currentColor"` attribute. This prevented paths from inheriting the `fill` value set on the parent `<svg>` element by `IconBase`. The `currentColor` keyword resolves to the CSS `color` property, not the SVG `fill` attribute, so the user-provided color never reached the paths.

  Removed the `convertColors` and `addAttributesToSVGElement` SVGO plugins that were adding `fill="currentColor"` to paths during the build. Paths now have no explicit `fill` attribute and correctly inherit from the parent SVG's `fill={color}` set by `IconBase`.

## 8.0.10

### Patch Changes

- a25c2a1: Fix circle element parsing in SVG builder - circles are now correctly converted to path elements instead of being silently dropped during the build process. This fixes 13 icon variants across 7 icons (atom, circle-checker, circle-dash, circle-dash-simple, device-tablet, flower, more, more-v) where circle elements were missing in the rendered output.

## 8.0.9

### Patch Changes

- dd011dd: Update the proportions of almost nearly all icons

## 8.0.8

### Patch Changes

- a470937: Fix production issues identified in package audit:

  - Add "use client" directive to DynamicIcon and IconBase for Next.js App Router compatibility
  - Remove redundant root-level convenience files (dynamic.mjs, dynamic.d.ts, dynamicIconImports.mjs, dynamicIconImports.d.ts)
  - Add missing ./dynamicIconImports export entry to package.json
  - Fix DynamicIcon type declaration (remove incorrect MemoExoticComponent wrapper)
  - Add LICENSE to published files array
  - Update React peer dependency from >=17.0.0 to >=17.0.2

  These changes address critical issues that could affect users in production environments, particularly Next.js users and those importing dynamicIconImports.

## 8.0.7

### Patch Changes

- 97b4627: Align dynamic icon documentation with lucide-react approach. Remove misleading icon picker example and clarify that dynamic imports are for small numbers of icons from external data sources, not bulk loading scenarios. Add "use client" directive for Next.js App Router compatibility.

## 8.0.6

### Patch Changes

- 2da6a96: Optimize package build for production (ESM-only)

  - Reduce package size from 249 MB to 12.5 MB (95% reduction)
  - Remove CJS output (ESM-only for modern bundlers and Node.js 18+)
  - Disable source maps
  - Change icons to import shared modules instead of bundling inline
  - Generate barrel files with re-exports instead of bundled code
  - Individual icon files reduced from ~1.4 KB to ~700 bytes

## 8.0.5

### Patch Changes

- 1ee557a: Update build configuration and add dynamic icon imports support

## 8.0.4

### Patch Changes

- 3f27e5f: Add duotone shorthand aliases so omitting weight defaults to Regular for duotone icons

  - `HomeDuotone` now imports `HomeRegularDuotone`
  - Follows the existing pattern where `Home` imports `HomeRegular`
  - All three alias forms supported: `HomeDuotone`, `HomeDuotoneIcon`, `SiHomeDuotone`

## 8.0.3

### Patch Changes

- 45f1014: Optimize default imports for better bundle efficiency

  - Base icon names (Search, Home, etc.) now resolve to Regular variants (~300 bytes) instead of dynamic wrappers (~1KB)
  - Added new `stera-icons/dynamic-variants` entry point for runtime variant switching
  - `import { Search } from 'stera-icons'` now gives you SearchRegular for optimal bundle size
  - Use `import { Search } from 'stera-icons/dynamic-variants'` when you need weight/duotone props at runtime

## 8.0.2

### Patch Changes

- b848ea8: Fix DynamicIcon key building for regular weight with duotone

  The `getIconComponent` function was incorrectly building icon keys for the "regular" weight, producing keys like `accessibility-regular-duotone` that don't exist in `dynamicIconImports`. The fix treats "regular" weight as the default (no suffix), so `weight="regular"` with `duotone=true` now correctly produces `accessibility-duotone` instead of `accessibility-regular-duotone`.

## 8.0.1

### Patch Changes

- 228aae8: Fix DynamicIcon failing to load icons due to missing default exports

  The DynamicIcon component expects modules with a `default` export, but generated icon modules only had named exports. This caused `module.default` to return `undefined`, silently failing to render icons.

  Added `export default` statements to both variant and wrapper component generators in the build script.

## 8.0.0

### Major Changes

- 3a319c3: ## Breaking Changes

  - **Minimum React version updated to 17.0.0** - The peer dependency has been updated from `>=16.8.0` to `>=17.0.0` to match the `react-jsx` JSX transform used in the build. Users on React 16.x will need to upgrade to React 17 or later.

  ## Additions

  - Added MIT LICENSE file for proper open source compliance
  - Added comprehensive test suite for core components:
    - IconBase component tests (rendering, props, accessibility, ref forwarding)
    - Icon component tests (variants, triple exports, wrapper components)
    - Utility function tests (mergeClasses, hasA11yProp, case converters)
    - DynamicIcon smoke tests

## 7.0.6

### Patch Changes

- 7821051: Fix TypeScript import path in generated type declarations for wrapper components. Changed import from '../index' to '../types' to correctly resolve IconProps interface and fix type errors with size property.

## 7.0.5

### Patch Changes

- 1f8fc37: Refactor build orchestration to root package.json - removes external script references from package-level scripts

## 7.0.4

### Patch Changes

- 637cdce: Simplify package exports using wildcard pattern for subpath imports

  - Changed from explicit exports for every icon alias to using `./icons/*` wildcard pattern
  - Updated import paths from `stera-icons/IconName` to `stera-icons/icons/IconName` (following lucide-react patterns)
  - Updated documentation with subpath imports section
  - Removed bundlephobia badge (not accurate for tree-shaking libraries)
  - Cleaned up build script output messages

## 7.0.3

### Patch Changes

- bbffafe: Add triple-aliased exports following lucide-react patterns

  - All icons now export with 3 naming styles: `IconName`, `IconNameIcon`, and `SiIconName`
  - Prevents name collisions when integrating with other icon libraries
  - Updated documentation to reflect new recommended import patterns
  - Improved JSDoc comments for wrapper components

## 7.0.2

### Patch Changes

- 99b23fe: fix: preserve opacity on duotone icon paths with group-level opacity

  Fixed an issue where 671 duotone icons (like speaker-high) were being built without the correct 40% opacity. The build script now properly handles SVGs that use `<g opacity="0.4">` wrapper groups to apply opacity to multiple paths, in addition to the existing support for path-level opacity attributes.

## 7.0.1

### Patch Changes

- 87cf26c: fix: move IconBase to separate subpath export to resolve type incompatibility

  Users can now import IconBase from `stera-icons/base` instead of the main entry point. This fixes TypeScript errors when using `import * as iconModule from 'stera-icons'` with dynamic icon access patterns.

## 7.0.0

### Major Changes

- 524ce95: ## Breaking Changes

  This release introduces a complete architecture overhaul for improved bundle size and developer experience.

  ### Export Naming Changes

  Wrapper components have been renamed to remove the `Icon` suffix:

  ```tsx
  // Before
  import { SearchIcon, HomeIcon } from "stera-icons";

  // After
  import { Search, Home } from "stera-icons";
  ```

  ### New Variant Naming Convention

  Direct variant imports now use a consistent `{Name}{Weight}` or `{Name}{Weight}Duotone` pattern:

  ```tsx
  // Before
  import { SearchBold, SearchFillDuotone } from "stera-icons";
  // (variants used kebab-case file structure internally)

  // After
  import { SearchBold, SearchFillDuotone } from "stera-icons";
  // Now also available: SearchRegular, SearchRegularDuotone, SearchBoldDuotone, etc.
  ```

  ### New Dynamic Variant API

  Wrapper components now accept `weight` and `duotone` props for runtime variant switching:

  ```tsx
  import { Search } from 'stera-icons';

  <Search />                        {/* Regular variant */}
  <Search weight="bold" />          {/* Bold variant */}
  <Search weight="fill" />          {/* Fill variant */}
  <Search duotone />                {/* Regular Duotone */}
  <Search weight="bold" duotone />  {/* Bold Duotone */}
  <Search weight="fill" duotone />  {/* Fill Duotone */}
  ```

  ### Migration Guide

  1. **Update wrapper imports**: Remove the `Icon` suffix

     - `SearchIcon` → `Search`
     - `HomeIcon` → `Home`

  2. **Direct variant imports**: Should work as before, but verify your specific imports

  3. **Bundle size optimization**: For the smallest bundle, import specific variants directly:

     ```tsx
     import { SearchBold } from "stera-icons";
     ```

     Use wrapper components only when you need runtime variant switching.

  ### Other Changes

  - Improved SVG path precision
  - New `IconProps` type with `weight` and `duotone` properties
  - Enhanced TypeScript support with better type inference
  - Reduced overall bundle footprint through IconBase architecture

## 6.2.1

### Patch Changes

- b1f159b: Patch icon SVG paths for improved precision

## 6.2.0

### Minor Changes

- 755f8f2: Add 32 new icons including activity, angle, and additional icon variants

## 6.1.1

### Patch Changes

- 703184f: Update icon modifications

## 6.1.0

### Minor Changes

- 8600661: Add new icons

## 6.0.0

### Major Changes

- 05a5326: Major API update: All icons now support `weight` and `duotone` props, providing 6 variants per icon (regular, bold, filled, filltone, linetone combinations).

## 5.13.0

### Minor Changes

- 27cd6be: Add 21 new icons and update existing icons

## 5.12.0

### Minor Changes

- d4ae62d: Add new icons

## 5.11.0

### Minor Changes

- 569863a: Add 8 new icons and update 2,840 existing icon variants.

  **New icons added:**

  - BoxesIcon (5 variants: regular, bold, filled, filltone, linetone)
  - FrameIcon (5 variants: regular, bold, filled, filltone, linetone)
  - PoundSterlingCircleIcon (5 variants: regular, bold, filled, filltone, linetone)
  - UserBanIcon (5 variants: regular, bold, filled, filltone, linetone)
  - UserMinusIcon (5 variants: regular, bold, filled, filltone, linetone)
  - UserPlusIcon (5 variants: regular, bold, filled, filltone, linetone)
  - UserSettingsIcon (5 variants: regular, bold, filled, filltone, linetone)
  - UserXIcon (5 variants: regular, bold, filled, filltone, linetone)

  **Total changes:**

  - 40 new icon variants (8 icons × 5 variants)
  - 2,840 modified icon variants
  - 390 unchanged icons

## 5.10.1

### Patch Changes

- e216834: Update icon metadata tags for existing icons to improve searchability and consistency.

## 5.10.0

### Minor Changes

- f16b0f9: Add alarm clock icons and refine existing time and alert icons.

## 5.9.0

### Minor Changes

- f4d109a: Add 5 new icons and update 2,607 existing icon variants

  **New icons added:**

  - CalendarBlankIcon (5 variants: regular, bold, filled, filltone, linetone)
  - CalendarClockIcon (5 variants: regular, bold, filled, filltone, linetone)
  - CalendarMinusIcon (5 variants: regular, bold, filled, filltone, linetone)
  - MapPinnedIcon (5 variants: regular, bold, filled, filltone, linetone)
  - ScanTextIcon (5 variants: regular, bold, filled, filltone, linetone)

  **Icon updates:**

  - 2,607 icon variants updated with latest SVG content from Figma export
  - All icon variants remain backward compatible

  **Summary:**

  - 25 new icon variants (5 icons × 5 variants each)
  - 2,607 modified icon variants
  - 433 unchanged icon variants
  - Total: 3,065 icon variants

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
