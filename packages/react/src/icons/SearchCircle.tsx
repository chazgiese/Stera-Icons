import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SearchCircleRegular } from './SearchCircleRegular';
import { SearchCircleRegularDuotone } from './SearchCircleRegularDuotone';
import { SearchCircleBold } from './SearchCircleBold';
import { SearchCircleBoldDuotone } from './SearchCircleBoldDuotone';
import { SearchCircleFill } from './SearchCircleFill';
import { SearchCircleFillDuotone } from './SearchCircleFillDuotone';

export interface SearchCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SearchCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SearchCircleRegular } from 'stera-icons/SearchCircleRegular';
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

export { SearchCircle };
