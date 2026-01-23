import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SearchCircleRegular } from './SearchCircleRegular.js';
import { SearchCircleRegularDuotone } from './SearchCircleRegularDuotone.js';
import { SearchCircleBold } from './SearchCircleBold.js';
import { SearchCircleBoldDuotone } from './SearchCircleBoldDuotone.js';
import { SearchCircleFill } from './SearchCircleFill.js';
import { SearchCircleFillDuotone } from './SearchCircleFillDuotone.js';

export interface SearchCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SearchCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SearchCircleRegular } from 'stera-icons/icons/SearchCircleRegular';
 */
const SearchCircle = memo(forwardRef<SVGSVGElement, SearchCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SearchCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SearchCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SearchCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SearchCircleFill ref={ref} {...rest} />;
  if (duotone) return <SearchCircleRegularDuotone ref={ref} {...rest} />;
  return <SearchCircleRegular ref={ref} {...rest} />;
}));

SearchCircle.displayName = 'SearchCircle';

// Triple export pattern (lucide-react style)
export { SearchCircle, SearchCircle as SearchCircleIcon, SearchCircle as SiSearchCircle };
export default SearchCircle;
