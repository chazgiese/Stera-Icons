# @stera/icons

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
