import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowRightSquareRegular } from './ArrowRightSquareRegular.js';
import { ArrowRightSquareRegularDuotone } from './ArrowRightSquareRegularDuotone.js';
import { ArrowRightSquareBold } from './ArrowRightSquareBold.js';
import { ArrowRightSquareBoldDuotone } from './ArrowRightSquareBoldDuotone.js';
import { ArrowRightSquareFill } from './ArrowRightSquareFill.js';
import { ArrowRightSquareFillDuotone } from './ArrowRightSquareFillDuotone.js';

export interface ArrowRightSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowRightSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowRightSquareRegular } from 'stera-icons/icons/ArrowRightSquareRegular';
 */
const ArrowRightSquare = memo(forwardRef<SVGSVGElement, ArrowRightSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowRightSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowRightSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowRightSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowRightSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowRightSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowRightSquareRegular ref={ref} {...rest} />;
}));

ArrowRightSquare.displayName = 'ArrowRightSquare';

// Triple export pattern
export { ArrowRightSquare, ArrowRightSquare as ArrowRightSquareIcon, ArrowRightSquare as SiArrowRightSquare };
export default ArrowRightSquare;
