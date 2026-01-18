---
"stera-icons": major
---

## Breaking Changes

This release introduces a complete architecture overhaul for improved bundle size and developer experience.

### Export Naming Changes

Wrapper components have been renamed to remove the `Icon` suffix:

```tsx
// Before
import { SearchIcon, HomeIcon } from 'stera-icons';

// After
import { Search, Home } from 'stera-icons';
```

### New Variant Naming Convention

Direct variant imports now use a consistent `{Name}{Weight}` or `{Name}{Weight}Duotone` pattern:

```tsx
// Before
import { SearchBold, SearchFillDuotone } from 'stera-icons';
// (variants used kebab-case file structure internally)

// After  
import { SearchBold, SearchFillDuotone } from 'stera-icons';
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
   import { SearchBold } from 'stera-icons';
   ```
   
   Use wrapper components only when you need runtime variant switching.

### Other Changes

- Improved SVG path precision
- New `IconProps` type with `weight` and `duotone` properties
- Enhanced TypeScript support with better type inference
- Reduced overall bundle footprint through IconBase architecture
