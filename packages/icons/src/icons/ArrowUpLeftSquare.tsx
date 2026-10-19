import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ArrowUpLeftSquareRegular } from './ArrowUpLeftSquareRegular.js';
import { ArrowUpLeftSquareRegularDuotone } from './ArrowUpLeftSquareRegularDuotone.js';
import { ArrowUpLeftSquareBold } from './ArrowUpLeftSquareBold.js';
import { ArrowUpLeftSquareBoldDuotone } from './ArrowUpLeftSquareBoldDuotone.js';
import { ArrowUpLeftSquareFill } from './ArrowUpLeftSquareFill.js';
import { ArrowUpLeftSquareFillDuotone } from './ArrowUpLeftSquareFillDuotone.js';

export interface ArrowUpLeftSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpLeftSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpLeftSquareRegular } from 'stera-icons/icons/ArrowUpLeftSquareRegular';
 */
const ArrowUpLeftSquare = memo(forwardRef<SVGSVGElement, ArrowUpLeftSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpLeftSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpLeftSquareFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpLeftSquareRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpLeftSquareRegular ref={ref} {...rest} />;
}));

ArrowUpLeftSquare.displayName = 'ArrowUpLeftSquare';

// Triple export pattern
export { ArrowUpLeftSquare, ArrowUpLeftSquare as ArrowUpLeftSquareIcon, ArrowUpLeftSquare as SiArrowUpLeftSquare };
export default ArrowUpLeftSquare;
