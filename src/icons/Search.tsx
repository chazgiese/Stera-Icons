import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchRegular } from './SearchRegular';
import { SearchRegularDuotone } from './SearchRegularDuotone';
import { SearchBold } from './SearchBold';
import { SearchBoldDuotone } from './SearchBoldDuotone';
import { SearchFill } from './SearchFill';
import { SearchFillDuotone } from './SearchFillDuotone';

export interface SearchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Search - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SearchRegular } from 'stera-icons/icons/SearchRegular';
 */
const Search = memo(forwardRef<SVGSVGElement, SearchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SearchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SearchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SearchFill ref={ref} {...rest} />;
  if (duotone) return <SearchRegularDuotone ref={ref} {...rest} />;
  return <SearchRegular ref={ref} {...rest} />;
}));

Search.displayName = 'Search';

// Triple export pattern (lucide-react style)
export { Search, Search as SearchIcon, Search as SiSearch };
