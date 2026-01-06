import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchCircleIcon as RegularSearchCircleIcon } from './search-circle';
import { SearchCircleIconDuotone as SearchCircleIconDuotone } from './search-circle-duotone';
import { SearchCircleIconBold as SearchCircleIconBold } from './search-circle-bold';
import { SearchCircleIconBoldDuotone as SearchCircleIconBoldDuotone } from './search-circle-bold-duotone';
import { SearchCircleIconFill as SearchCircleIconFill } from './search-circle-fill';
import { SearchCircleIconFillDuotone as SearchCircleIconFillDuotone } from './search-circle-fill-duotone';

export interface SearchCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SearchCircleIcon = memo(forwardRef<SVGSVGElement, SearchCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SearchCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SearchCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SearchCircleIconFill ref={ref} {...props} />;
  if (duotone) return <SearchCircleIconDuotone ref={ref} {...props} />;
  return <RegularSearchCircleIcon ref={ref} {...props} />;
}));

SearchCircleIcon.displayName = 'SearchCircleIcon';

export { SearchCircleIcon };
