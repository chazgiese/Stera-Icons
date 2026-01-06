import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchIcon as RegularSearchIcon } from './search';
import { SearchIconDuotone as SearchIconDuotone } from './search-duotone';
import { SearchIconBold as SearchIconBold } from './search-bold';
import { SearchIconBoldDuotone as SearchIconBoldDuotone } from './search-bold-duotone';
import { SearchIconFill as SearchIconFill } from './search-fill';
import { SearchIconFillDuotone as SearchIconFillDuotone } from './search-fill-duotone';

export interface SearchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SearchIcon = memo(forwardRef<SVGSVGElement, SearchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SearchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SearchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SearchIconFill ref={ref} {...props} />;
  if (duotone) return <SearchIconDuotone ref={ref} {...props} />;
  return <RegularSearchIcon ref={ref} {...props} />;
}));

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
