import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchSquareIcon as RegularSearchSquareIcon } from './search-square';
import { SearchSquareIconDuotone as SearchSquareIconDuotone } from './search-square-duotone';
import { SearchSquareIconBold as SearchSquareIconBold } from './search-square-bold';
import { SearchSquareIconBoldDuotone as SearchSquareIconBoldDuotone } from './search-square-bold-duotone';
import { SearchSquareIconFill as SearchSquareIconFill } from './search-square-fill';
import { SearchSquareIconFillDuotone as SearchSquareIconFillDuotone } from './search-square-fill-duotone';

export interface SearchSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SearchSquareIcon = memo(forwardRef<SVGSVGElement, SearchSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SearchSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SearchSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SearchSquareIconFill ref={ref} {...props} />;
  if (duotone) return <SearchSquareIconDuotone ref={ref} {...props} />;
  return <RegularSearchSquareIcon ref={ref} {...props} />;
}));

SearchSquareIcon.displayName = 'SearchSquareIcon';

export { SearchSquareIcon };
