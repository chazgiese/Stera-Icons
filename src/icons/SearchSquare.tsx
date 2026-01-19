import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchSquareRegular } from './SearchSquareRegular';
import { SearchSquareRegularDuotone } from './SearchSquareRegularDuotone';
import { SearchSquareBold } from './SearchSquareBold';
import { SearchSquareBoldDuotone } from './SearchSquareBoldDuotone';
import { SearchSquareFill } from './SearchSquareFill';
import { SearchSquareFillDuotone } from './SearchSquareFillDuotone';

export interface SearchSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SearchSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SearchSquareRegular } from 'stera-icons/icons/SearchSquareRegular';
 */
const SearchSquare = memo(forwardRef<SVGSVGElement, SearchSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SearchSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SearchSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SearchSquareFill ref={ref} {...rest} />;
  if (duotone) return <SearchSquareRegularDuotone ref={ref} {...rest} />;
  return <SearchSquareRegular ref={ref} {...rest} />;
}));

SearchSquare.displayName = 'SearchSquare';

// Triple export pattern (lucide-react style)
export { SearchSquare, SearchSquare as SearchSquareIcon, SearchSquare as SiSearchSquare };
