---
"stera-icons": major
---

## Breaking Changes

- **Minimum React version updated to 17.0.0** - The peer dependency has been updated from `>=16.8.0` to `>=17.0.0` to match the `react-jsx` JSX transform used in the build. Users on React 16.x will need to upgrade to React 17 or later.

## Additions

- Added MIT LICENSE file for proper open source compliance
- Added comprehensive test suite for core components:
  - IconBase component tests (rendering, props, accessibility, ref forwarding)
  - Icon component tests (variants, triple exports, wrapper components)
  - Utility function tests (mergeClasses, hasA11yProp, case converters)
  - DynamicIcon smoke tests
