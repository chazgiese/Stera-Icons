import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronDownSquareRegular } from './ChevronDownSquareRegular.js';
import { ChevronDownSquareRegularDuotone } from './ChevronDownSquareRegularDuotone.js';
import { ChevronDownSquareBold } from './ChevronDownSquareBold.js';
import { ChevronDownSquareBoldDuotone } from './ChevronDownSquareBoldDuotone.js';
import { ChevronDownSquareFill } from './ChevronDownSquareFill.js';
import { ChevronDownSquareFillDuotone } from './ChevronDownSquareFillDuotone.js';

export interface ChevronDownSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronDownSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronDownSquareRegular } from 'stera-icons/icons/ChevronDownSquareRegular';
 */
const ChevronDownSquare = memo(forwardRef<SVGSVGElement, ChevronDownSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronDownSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronDownSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronDownSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronDownSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChevronDownSquareRegularDuotone ref={ref} {...rest} />;
  return <ChevronDownSquareRegular ref={ref} {...rest} />;
}));

ChevronDownSquare.displayName = 'ChevronDownSquare';

// Triple export pattern
export { ChevronDownSquare, ChevronDownSquare as ChevronDownSquareIcon, ChevronDownSquare as SiChevronDownSquare };
export default ChevronDownSquare;
