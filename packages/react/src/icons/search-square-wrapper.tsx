import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchSquareIcon as SearchSquareIconRegular } from './search-square';
import { SearchSquareIconBold } from './search-square-bold';
import { SearchSquareIconFilled } from './search-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SearchSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const SearchSquareIcon = memo(forwardRef<SVGSVGElement, SearchSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SearchSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SearchSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SearchSquareIconRegular ref={ref} {...props} />;
  }
}));

SearchSquareIcon.displayName = 'SearchSquareIcon';

export { SearchSquareIcon };
