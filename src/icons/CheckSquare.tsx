import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CheckSquareRegular } from './CheckSquareRegular.js';
import { CheckSquareRegularDuotone } from './CheckSquareRegularDuotone.js';
import { CheckSquareBold } from './CheckSquareBold.js';
import { CheckSquareBoldDuotone } from './CheckSquareBoldDuotone.js';
import { CheckSquareFill } from './CheckSquareFill.js';
import { CheckSquareFillDuotone } from './CheckSquareFillDuotone.js';

export interface CheckSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CheckSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CheckSquareRegular } from 'stera-icons/icons/CheckSquareRegular';
 */
const CheckSquare = memo(forwardRef<SVGSVGElement, CheckSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheckSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheckSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheckSquareFill ref={ref} {...rest} />;
  if (duotone) return <CheckSquareRegularDuotone ref={ref} {...rest} />;
  return <CheckSquareRegular ref={ref} {...rest} />;
}));

CheckSquare.displayName = 'CheckSquare';

// Triple export pattern (lucide-react style)
export { CheckSquare, CheckSquare as CheckSquareIcon, CheckSquare as SiCheckSquare };
export default CheckSquare;
