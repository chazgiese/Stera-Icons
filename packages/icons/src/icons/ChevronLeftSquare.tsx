import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronLeftSquareRegular } from './ChevronLeftSquareRegular.js';
import { ChevronLeftSquareRegularDuotone } from './ChevronLeftSquareRegularDuotone.js';
import { ChevronLeftSquareBold } from './ChevronLeftSquareBold.js';
import { ChevronLeftSquareBoldDuotone } from './ChevronLeftSquareBoldDuotone.js';
import { ChevronLeftSquareFill } from './ChevronLeftSquareFill.js';
import { ChevronLeftSquareFillDuotone } from './ChevronLeftSquareFillDuotone.js';

export interface ChevronLeftSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronLeftSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronLeftSquareRegular } from 'stera-icons/icons/ChevronLeftSquareRegular';
 */
const ChevronLeftSquare = memo(forwardRef<SVGSVGElement, ChevronLeftSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronLeftSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronLeftSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronLeftSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronLeftSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronLeftSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronLeftSquareRegular ref={ref} {...rest} />;
}));

ChevronLeftSquare.displayName = 'ChevronLeftSquare';

// Triple export pattern
export { ChevronLeftSquare, ChevronLeftSquare as ChevronLeftSquareIcon, ChevronLeftSquare as SiChevronLeftSquare };
export default ChevronLeftSquare;
