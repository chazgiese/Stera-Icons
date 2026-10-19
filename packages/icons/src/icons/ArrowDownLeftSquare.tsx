import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownLeftSquareRegular } from './ArrowDownLeftSquareRegular.js';
import { ArrowDownLeftSquareRegularDuotone } from './ArrowDownLeftSquareRegularDuotone.js';
import { ArrowDownLeftSquareBold } from './ArrowDownLeftSquareBold.js';
import { ArrowDownLeftSquareBoldDuotone } from './ArrowDownLeftSquareBoldDuotone.js';
import { ArrowDownLeftSquareFill } from './ArrowDownLeftSquareFill.js';
import { ArrowDownLeftSquareFillDuotone } from './ArrowDownLeftSquareFillDuotone.js';

export interface ArrowDownLeftSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownLeftSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownLeftSquareRegular } from 'stera-icons/icons/ArrowDownLeftSquareRegular';
 */
const ArrowDownLeftSquare = memo(forwardRef<SVGSVGElement, ArrowDownLeftSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownLeftSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownLeftSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownLeftSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownLeftSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownLeftSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownLeftSquareRegular ref={ref} {...rest} />;
}));

ArrowDownLeftSquare.displayName = 'ArrowDownLeftSquare';

// Triple export pattern
export { ArrowDownLeftSquare, ArrowDownLeftSquare as ArrowDownLeftSquareIcon, ArrowDownLeftSquare as SiArrowDownLeftSquare };
export default ArrowDownLeftSquare;
