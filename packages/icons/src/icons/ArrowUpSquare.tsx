import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpSquareRegular } from './ArrowUpSquareRegular.js';
import { ArrowUpSquareRegularDuotone } from './ArrowUpSquareRegularDuotone.js';
import { ArrowUpSquareBold } from './ArrowUpSquareBold.js';
import { ArrowUpSquareBoldDuotone } from './ArrowUpSquareBoldDuotone.js';
import { ArrowUpSquareFill } from './ArrowUpSquareFill.js';
import { ArrowUpSquareFillDuotone } from './ArrowUpSquareFillDuotone.js';

export interface ArrowUpSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpSquareRegular } from 'stera-icons/icons/ArrowUpSquareRegular';
 */
const ArrowUpSquare = memo(forwardRef<SVGSVGElement, ArrowUpSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpSquareRegular ref={ref} {...rest} />;
}));

ArrowUpSquare.displayName = 'ArrowUpSquare';

// Triple export pattern
export { ArrowUpSquare, ArrowUpSquare as ArrowUpSquareIcon, ArrowUpSquare as SiArrowUpSquare };
export default ArrowUpSquare;
