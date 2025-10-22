import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SearchIcon as SearchIconRegular } from './search';
import { SearchIconBold } from './search-bold';
import { SearchIconFilled } from './search-filled';
import { SearchIconFilltone } from './search-filltone';
import { SearchIconLinetone } from './search-linetone';

export interface SearchIconProps extends IconProps {
  variant?: IconVariant;
}

const SearchIcon = memo(forwardRef<SVGSVGElement, SearchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SearchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SearchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SearchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SearchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SearchIconRegular ref={ref} {...props} />;
  }
}));

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
