import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MoreSquareRegular } from './MoreSquareRegular.js';
import { MoreSquareRegularDuotone } from './MoreSquareRegularDuotone.js';
import { MoreSquareBold } from './MoreSquareBold.js';
import { MoreSquareBoldDuotone } from './MoreSquareBoldDuotone.js';
import { MoreSquareFill } from './MoreSquareFill.js';
import { MoreSquareFillDuotone } from './MoreSquareFillDuotone.js';

export interface MoreSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MoreSquareRegular } from 'stera-icons/icons/MoreSquareRegular';
 */
const MoreSquare = memo(forwardRef<SVGSVGElement, MoreSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreSquareFill ref={ref} {...rest} />;
  if (duotone) return <MoreSquareRegularDuotone ref={ref} {...rest} />;
  return <MoreSquareRegular ref={ref} {...rest} />;
}));

MoreSquare.displayName = 'MoreSquare';

// Triple export pattern (lucide-react style)
export { MoreSquare, MoreSquare as MoreSquareIcon, MoreSquare as SiMoreSquare };
export default MoreSquare;
