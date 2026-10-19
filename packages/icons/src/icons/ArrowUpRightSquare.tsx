import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpRightSquareRegular } from './ArrowUpRightSquareRegular.js';
import { ArrowUpRightSquareRegularDuotone } from './ArrowUpRightSquareRegularDuotone.js';
import { ArrowUpRightSquareBold } from './ArrowUpRightSquareBold.js';
import { ArrowUpRightSquareBoldDuotone } from './ArrowUpRightSquareBoldDuotone.js';
import { ArrowUpRightSquareFill } from './ArrowUpRightSquareFill.js';
import { ArrowUpRightSquareFillDuotone } from './ArrowUpRightSquareFillDuotone.js';

export interface ArrowUpRightSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpRightSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRightSquareRegular } from 'stera-icons/icons/ArrowUpRightSquareRegular';
 */
const ArrowUpRightSquare = memo(forwardRef<SVGSVGElement, ArrowUpRightSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpRightSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpRightSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRightSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRightSquareRegular ref={ref} {...rest} />;
}));

ArrowUpRightSquare.displayName = 'ArrowUpRightSquare';

// Triple export pattern
export { ArrowUpRightSquare, ArrowUpRightSquare as ArrowUpRightSquareIcon, ArrowUpRightSquare as SiArrowUpRightSquare };
export default ArrowUpRightSquare;
