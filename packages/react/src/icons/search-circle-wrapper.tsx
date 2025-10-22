import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SearchCircleIcon as SearchCircleIconRegular } from './search-circle';
import { SearchCircleIconBold } from './search-circle-bold';
import { SearchCircleIconFilled } from './search-circle-filled';
import { SearchCircleIconFilltone } from './search-circle-filltone';
import { SearchCircleIconLinetone } from './search-circle-linetone';

export interface SearchCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const SearchCircleIcon = memo(forwardRef<SVGSVGElement, SearchCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SearchCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SearchCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SearchCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SearchCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SearchCircleIconRegular ref={ref} {...props} />;
  }
}));

SearchCircleIcon.displayName = 'SearchCircleIcon';

export { SearchCircleIcon };
