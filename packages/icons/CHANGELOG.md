# stera-icons

## 8.11.0

### Minor Changes

- 811bdea: Align circle and square icons to the new grid, and rename the circle and square arrow and chevron icons.

  **New grid.** The base circle is now 19×19 and the base square 18×18 on the 24-unit grid, 1px larger than before. 138 icons were redrawn to match, including `circle`, `square`, the `clock-*`, `emote-*` and `scan-*` icons, and every `*-circle` and `*-square` icon.

  **Renamed icons.** The direction now comes before the shape, so these icons sort next to their plain counterparts. The old names keep working as deprecated aliases until 9.0.0:

  - `arrow-circle-down` → `arrow-down-circle`
  - `arrow-circle-down-left` → `arrow-down-left-circle`
  - `arrow-circle-down-right` → `arrow-down-right-circle`
  - `arrow-circle-left` → `arrow-left-circle`
  - `arrow-circle-right` → `arrow-right-circle`
  - `arrow-circle-up` → `arrow-up-circle`
  - `arrow-circle-up-left` → `arrow-up-left-circle`
  - `arrow-circle-up-right` → `arrow-up-right-circle`
  - `arrow-square-down` → `arrow-down-square`
  - `arrow-square-down-left` → `arrow-down-left-square`
  - `arrow-square-down-right` → `arrow-down-right-square`
  - `arrow-square-left` → `arrow-left-square`
  - `arrow-square-right` → `arrow-right-square`
  - `arrow-square-up` → `arrow-up-square`
  - `arrow-square-up-left` → `arrow-up-left-square`
  - `arrow-square-up-right` → `arrow-up-right-square`
  - `chevron-circle-down` → `chevron-down-circle`
  - `chevron-circle-left` → `chevron-left-circle`
  - `chevron-circle-right` → `chevron-right-circle`
  - `chevron-circle-up` → `chevron-up-circle`
  - `chevron-square-down` → `chevron-down-square`
  - `chevron-square-left` → `chevron-left-square`
  - `chevron-square-right` → `chevron-right-square`
  - `chevron-square-up` → `chevron-up-square`
  - `chevron-full-circle-down` → `chevron-full-down-circle`
  - `chevron-full-circle-left` → `chevron-full-left-circle`
  - `chevron-full-circle-right` → `chevron-full-right-circle`
  - `chevron-full-circle-up` → `chevron-full-up-circle`
  - `chevron-full-square-left` → `chevron-full-left-square`
  - `chevron-full-square-right` → `chevron-full-right-square`
  - `chevron-full-square-up` → `chevron-full-up-square`
  - `circle-divide-alt` → `circle-divide-h`

## 8.10.0

### Minor Changes

- 5b3b210: Icons now carry a stable `id`, the Figma component set key, in `icons-export.json` and in every `icons.meta.json` entry. `IconMetadata` and `IconsExport` gain the `id` field. The build matches icons by id, so a renamed icon keeps its version history, and it writes the deprecated alias for a rename into `icon-aliases.json` itself.

## 8.9.0

### Minor Changes

- 4d827c8: Add icon categories, four new icons, and rename the currency icons.

  **Categories.** Every icon now belongs to one to three of 25 categories (for example `arrows`, `charts`, `communication`), listed primary first in a new `categories` field on each entry in `icons.meta.json`.

  **New icons.** `activity-circle`, `activity-square`, `console-handheld`, `gamepad`.

  **Renamed icons.** The old names keep working as deprecated aliases until 9.0.0:

  - `currency-cent` → `cent`
  - `currency-circle-dollar` → `dollar-circle`
  - `currency-dollar` → `dollar`
  - `currency-euro` → `euro`
  - `currency-euro-cirlce` → `euro-circle`

  **Tag fixes.** Corrected the tags on `align-vertical-top`, `spiral` and `swatch-book`.

## 8.8.3

### Patch Changes

- ac2220d: Fix circular icons being drawn slightly off-centre. The optimizer was converting curves to arcs and rounding the arc radius, which shifted full circles by about 0.3 units on the 24-unit grid (for example `circle`, `target`, `baseball` and the `arrow-circle-*` icons). Curves are now kept as curves, so icons match the source artwork. Path data is slightly larger as a result.

## 8.8.2

### Patch Changes

- ed2520f: Update build tooling to the latest versions. The newer SVGO rounds stray floating-point values in 12 icon paths (for example `6.099999999999999` becomes `6.1`). Icons render the same.

## 8.8.1

### Patch Changes

- 8ed599e: Fix the `arrow-big-up` regular fill variant, which drew its shape twice with two overlapping, slightly offset paths. It is now a single path.

## 8.8.0

### Minor Changes

- 28c32fe: Rename the `device-*` icons (old names keep working as deprecated aliases), add 22 new icons and refine 241 existing icons.

  **Renamed icons**

  The `device-` prefix is dropped from the four device icons. The old names still work as deprecated aliases and will be removed in 9.0.0.

  | Old name         | New name     | Old exports                                             | New exports                                    |
  | ---------------- | ------------ | ------------------------------------------------------- | ---------------------------------------------- |
  | `device-desktop` | `monitor`    | `DeviceDesktop`, `DeviceDesktopIcon`, `SiDeviceDesktop` | `Monitor`, `MonitorIcon`, `SiMonitor`          |
  | `device-laptop`  | `laptop`     | `DeviceLaptop`, `DeviceLaptopIcon`, `SiDeviceLaptop`    | `Laptop`, `LaptopIcon`, `SiLaptop`             |
  | `device-phone`   | `smartphone` | `DevicePhone`, `DevicePhoneIcon`, `SiDevicePhone`       | `Smartphone`, `SmartphoneIcon`, `SiSmartphone` |
  | `device-tablet`  | `tablet`     | `DeviceTablet`, `DeviceTabletIcon`, `SiDeviceTablet`    | `Tablet`, `TabletIcon`, `SiTablet`             |

  **Migration:** replace each old name with the new one before 9.0.0. This applies to every variant export (for example `DeviceLaptopBoldDuotone` → `LaptopBoldDuotone`), to per-icon import paths (`stera-icons/icons/DeviceLaptop` → `stera-icons/icons/Laptop`) and to `DynamicIcon` names (`name="device-laptop"` → `name="laptop"`). Tags are unchanged.

  Two things change right away: `iconNames`, `dynamicIconImports` and `icons.meta.json` list only the new names, and a component's `displayName` is the new name.

  **Deprecated aliases for renamed icons**

  Renamed icons now keep their old names for a grace period:

  - Old exports are re-exported from every entry point and marked `@deprecated` in the types, with the replacement and removal version in the JSDoc.
  - `DynamicIcon` accepts the old kebab-case name and logs a one-time warning outside production.

  **New icons**

  Add 22 new icons (all 6 variants each):

  - Food and drink: apple, avocado, cake, carrot, cheese, cherry, citrus, egg, hamburger, martini, pepper, pizza, popcorn, popsicle
  - Maps: map-pin-area, map-pin-area-circle, map-pin-x
  - Git: git-diff, git-diff-square
  - Other: camera-plus, hard-drive, user-square

  **Refined icons**

  Refine 241 existing icons (801 variants) in a broad consistency pass, including the align-\*, chevron-full-\*, flow-\*, gauge-\*, mail-\*, message-\*, send-\*, sort-\*, speaker-\*, user-\* and scan-\* families. `monitor` also carries refined artwork compared to `device-desktop`.

### Patch Changes

- 28c32fe: Fix the `DynamicIconImports` type so `forwardRef` icon components are assignable to it under React 18 types. Adds the `DynamicIconComponent` type.

## 8.7.0

### Minor Changes

- 5bd733d: Fix and improve icon accessibility defaults, and refresh the shipped docs.

  **Accessibility**

  - Decorative icons (no `aria-label`, `aria-labelledby`, `title`, `role` or other `aria-*` prop) now render `aria-hidden="true"`. Previously every icon rendered `aria-hidden="false"`.
  - Icons with an accessible name (`aria-label`, `aria-labelledby` or `title`) no longer render `aria-hidden` and default to `role="img"`. A `role` you pass is kept.
  - `title` now renders a `<title>` element as the first child of the `<svg>` instead of a `title` attribute.
  - An explicit `aria-hidden` prop always wins.
  - Props set to `undefined` or `null` are no longer treated as provided. `hasA11yProp` follows the same rule.

  **Types**

  - Removed the stale `iconName` prop from the published `IconBaseProps` declaration. The prop itself was removed in 8.1.2.
  - Corrected the `size` JSDoc: there is no default size.

  **Docs**

  - Updated `README.md` and `llms.txt` to match the current API, icon count and Node requirement.

  **Migration:** update snapshots, and replace any `svg[title]` selectors with a query for the `<title>` element.

## 8.6.0

### Minor Changes

- 62812e0: Add 9 new icons: bone, certificate, circle-dot, crown, history, key-h, key-v, mountain, pill (all 6 weights each).

  Replace `key-alt` with the directional `key-h` and `key-v` icons. The `KeyAlt`, `KeyAltIcon`, and `SiKeyAlt` exports are removed — migrate to `KeyH` or `KeyV`.

  Refine 48 existing icons (244 variants), primarily consistency passes across the square-container family (audio-bars-square, brackets-curly-square, brackets-square-square, chevron-full-square-\*, cli-square, image-square, more-square, more-square-v, percent-square, plus-square, search-square, sparkle-square), the calendar family (calendar, -blank, -clock, -fold, -minus, -plus, -slash, -x), line-segment/-h/-v, label, label-alt, note, note-text, rectangle, rectangle-dashed, robot, robot-humanoid, image-stack, candle, key, and partial touch-ups to gauge-0/15/33/50/66/85/100, shapes, shapes-plus, pen-nib-alt, align-horizontal-center.

## 8.5.0

### Minor Changes

- 7e080fc: Add 6 new icons: contrast-circle, pen-nib-alt, pyramid, shapes, shapes-plus, stethoscope

## 8.4.0

### Minor Changes

- 36235ad: Added message-circle-sparkle, message-square-sparkle, power, and radar icons (all 6 weights each). Renamed the chat-box-_ family to message-square-_ (alert, check, dashed, dot, dots, off, plus, question, text) and the chat-bubble-_ family to message-circle-_ (alert, check, dashed, dot, dots, off, plus, question, text); chat-messages renamed to message-messages. SVG path edits to existing icons.

## 8.3.1

### Patch Changes

- b62da07: fix: AgentWorkflow icon opacity

## 8.3.0

### Minor Changes

- 22f5540: added binary, biohazard, case-sensitive, cloud-cli, user-list, user-refresh (all 6 weights each). broad SVG path refinement across 271 existing icons including the full shield family (shield, shield-alert, shield-ban, shield-check, shield-half, shield-slash), bell family (bell, bell-dot, bell-off, bell-x), home family (home, home-heart, home-simple, home-x), phone family (phone, phone-incoming, phone-off, phone-outgoing), arrow and chevron families, asterisk/asterisk-alt, atom/atom-ai/atom-orbit, calendar/calendar-clock/calendar-off, and many others

## 8.2.0

### Minor Changes

- 528c977: Added new icons and updated existing icons

## 8.1.2

### Patch Changes

- 3736bfc: Remove default CSS classes from SVG icons. Icons no longer automatically include `stera` and `stera-[icon-name]` classes when rendered. Custom `className` props are still passed through as expected.

## 8.1.1

### Patch Changes

- a527381: fix: `build:icons` now regenerates TypeScript declarations so new icons appear in `index.d.ts`

## 8.1.0

### Minor Changes

- c8806bb: Updated fill weight stroke (was 2px now 1.75px), removed brand icons, added a few icons

## 8.0.16

### Patch Changes

- 36e7ef7: Renamed main entry files from `stera-icons.js`/`stera-icons.d.ts` to `index.js`/`index.d.ts` for improved LLM and developer discoverability. Added a search hint comment at the top of the type definitions file and a "Finding Icons" section to the README explaining how to search `@tags` in `index.d.ts`.

## 8.0.15

### Patch Changes

- b6c0075: fixed: removed explicit `aria-hidden?: boolean` from `IconProps` to inherit the wider `Booleanish | undefined` type from `SVGProps<SVGSVGElement>`, fixing TypeScript errors when spreading `ComponentProps<"svg">` onto icon components

## 8.0.14

### Patch Changes

- c108b65: Add JSDoc `@component` and `@tags` annotations to all generated type declarations for LLM discoverability

## 8.0.13

### Patch Changes

- 68ae630: fix: omit width/height SVG attributes when size prop is not provided

  Icons no longer render `width="24" height="24"` by default. When the `size` prop is omitted, no `width` or `height` attributes are added to the SVG element, giving CSS classes (e.g. Tailwind `size-3`, `w-4 h-4`) full, uncontested control over icon dimensions.

  Explicit `size` prop usage is unchanged: `<Search size={32} />` still renders `width="32" height="32"`.

  **Migration:** If you rely on icons defaulting to 24px without any CSS or `size` prop, add `size={24}` or a CSS size class such as `className="size-6"` to maintain the previous size.

## 8.0.12

### Patch Changes

- 9c43cb4: Icon component updates, remove deprecated Astrisk typo icons, and build/config improvements

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
