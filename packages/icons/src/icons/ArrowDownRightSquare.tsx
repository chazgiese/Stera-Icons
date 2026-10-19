import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowDownRightSquareRegular } from './ArrowDownRightSquareRegular.js';
import { ArrowDownRightSquareRegularDuotone } from './ArrowDownRightSquareRegularDuotone.js';
import { ArrowDownRightSquareBold } from './ArrowDownRightSquareBold.js';
import { ArrowDownRightSquareBoldDuotone } from './ArrowDownRightSquareBoldDuotone.js';
import { ArrowDownRightSquareFill } from './ArrowDownRightSquareFill.js';
import { ArrowDownRightSquareFillDuotone } from './ArrowDownRightSquareFillDuotone.js';

export interface ArrowDownRightSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownRightSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownRightSquareRegular } from 'stera-icons/icons/ArrowDownRightSquareRegular';
 */
const ArrowDownRightSquare = memo(forwardRef<SVGSVGElement, ArrowDownRightSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownRightSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownRightSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownRightSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownRightSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownRightSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownRightSquareRegular ref={ref} {...rest} />;
}));

ArrowDownRightSquare.displayName = 'ArrowDownRightSquare';

// Triple export pattern
export { ArrowDownRightSquare, ArrowDownRightSquare as ArrowDownRightSquareIcon, ArrowDownRightSquare as SiArrowDownRightSquare };
export default ArrowDownRightSquare;
