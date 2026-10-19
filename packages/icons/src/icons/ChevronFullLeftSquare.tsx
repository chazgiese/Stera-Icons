import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullLeftSquareRegular } from './ChevronFullLeftSquareRegular.js';
import { ChevronFullLeftSquareRegularDuotone } from './ChevronFullLeftSquareRegularDuotone.js';
import { ChevronFullLeftSquareBold } from './ChevronFullLeftSquareBold.js';
import { ChevronFullLeftSquareBoldDuotone } from './ChevronFullLeftSquareBoldDuotone.js';
import { ChevronFullLeftSquareFill } from './ChevronFullLeftSquareFill.js';
import { ChevronFullLeftSquareFillDuotone } from './ChevronFullLeftSquareFillDuotone.js';

export interface ChevronFullLeftSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullLeftSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullLeftSquareRegular } from 'stera-icons/icons/ChevronFullLeftSquareRegular';
 */
const ChevronFullLeftSquare = memo(forwardRef<SVGSVGElement, ChevronFullLeftSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullLeftSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullLeftSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullLeftSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullLeftSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullLeftSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullLeftSquareRegular ref={ref} {...rest} />;
}));

ChevronFullLeftSquare.displayName = 'ChevronFullLeftSquare';

// Triple export pattern
export { ChevronFullLeftSquare, ChevronFullLeftSquare as ChevronFullLeftSquareIcon, ChevronFullLeftSquare as SiChevronFullLeftSquare };
export default ChevronFullLeftSquare;
