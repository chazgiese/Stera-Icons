import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowLeftSquareRegular } from './ArrowLeftSquareRegular.js';
import { ArrowLeftSquareRegularDuotone } from './ArrowLeftSquareRegularDuotone.js';
import { ArrowLeftSquareBold } from './ArrowLeftSquareBold.js';
import { ArrowLeftSquareBoldDuotone } from './ArrowLeftSquareBoldDuotone.js';
import { ArrowLeftSquareFill } from './ArrowLeftSquareFill.js';
import { ArrowLeftSquareFillDuotone } from './ArrowLeftSquareFillDuotone.js';

export interface ArrowLeftSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLeftSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLeftSquareRegular } from 'stera-icons/icons/ArrowLeftSquareRegular';
 */
const ArrowLeftSquare = memo(forwardRef<SVGSVGElement, ArrowLeftSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLeftSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLeftSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLeftSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLeftSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowLeftSquareRegular ref={ref} {...rest} />;
}));

ArrowLeftSquare.displayName = 'ArrowLeftSquare';

// Triple export pattern
export { ArrowLeftSquare, ArrowLeftSquare as ArrowLeftSquareIcon, ArrowLeftSquare as SiArrowLeftSquare };
export default ArrowLeftSquare;
