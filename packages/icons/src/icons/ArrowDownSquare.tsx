import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownSquareRegular } from './ArrowDownSquareRegular.js';
import { ArrowDownSquareRegularDuotone } from './ArrowDownSquareRegularDuotone.js';
import { ArrowDownSquareBold } from './ArrowDownSquareBold.js';
import { ArrowDownSquareBoldDuotone } from './ArrowDownSquareBoldDuotone.js';
import { ArrowDownSquareFill } from './ArrowDownSquareFill.js';
import { ArrowDownSquareFillDuotone } from './ArrowDownSquareFillDuotone.js';

export interface ArrowDownSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownSquareRegular } from 'stera-icons/icons/ArrowDownSquareRegular';
 */
const ArrowDownSquare = memo(forwardRef<SVGSVGElement, ArrowDownSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownSquareRegular ref={ref} {...rest} />;
}));

ArrowDownSquare.displayName = 'ArrowDownSquare';

// Triple export pattern
export { ArrowDownSquare, ArrowDownSquare as ArrowDownSquareIcon, ArrowDownSquare as SiArrowDownSquare };
export default ArrowDownSquare;
