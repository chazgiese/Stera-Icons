---
"stera-icons": major
---

# Major Update: Bold Variants Added

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