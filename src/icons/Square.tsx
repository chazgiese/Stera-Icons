import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SquareRegular } from './SquareRegular.js';
import { SquareRegularDuotone } from './SquareRegularDuotone.js';
import { SquareBold } from './SquareBold.js';
import { SquareBoldDuotone } from './SquareBoldDuotone.js';
import { SquareFill } from './SquareFill.js';
import { SquareFillDuotone } from './SquareFillDuotone.js';

export interface SquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Square - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SquareRegular } from 'stera-icons/icons/SquareRegular';
 */
const Square = memo(forwardRef<SVGSVGElement, SquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquareFill ref={ref} {...rest} />;
  if (duotone) return <SquareRegularDuotone ref={ref} {...rest} />;
  return <SquareRegular ref={ref} {...rest} />;
}));

Square.displayName = 'Square';

// Triple export pattern (lucide-react style)
export { Square, Square as SquareIcon, Square as SiSquare };
export default Square;
