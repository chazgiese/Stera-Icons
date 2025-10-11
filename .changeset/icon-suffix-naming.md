---
"stera-icons": major
---

**BREAKING CHANGE: All icon components now have "Icon" suffix**

To prevent naming conflicts with user components, all icon component names now include an "Icon" suffix. This aligns with industry standards from Material-UI Icons, Heroicons, and other popular icon libraries.

**Migration:**

Update all icon imports to use the new naming convention:

```tsx
// Before
import { Search, Heart, Home, User } from 'stera-icons';

// After
import { SearchIcon, HeartIcon, HomeIcon, UserIcon } from 'stera-icons';
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

