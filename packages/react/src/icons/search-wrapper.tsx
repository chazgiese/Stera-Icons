import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchIcon as SearchIconRegular } from './search';
import { SearchIconBold } from './search-bold';
import { SearchIconFilled } from './search-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SearchIconRegular ref={ref} {...props} />;
  }
}));

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
