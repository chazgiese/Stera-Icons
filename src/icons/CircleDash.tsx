import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashRegular } from './CircleDashRegular';
import { CircleDashRegularDuotone } from './CircleDashRegularDuotone';
import { CircleDashBold } from './CircleDashBold';
import { CircleDashBoldDuotone } from './CircleDashBoldDuotone';
import { CircleDashFill } from './CircleDashFill';
import { CircleDashFillDuotone } from './CircleDashFillDuotone';

export interface CircleDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDashRegular } from 'stera-icons/icons/CircleDashRegular';
 */
const CircleDash = memo(forwardRef<SVGSVGElement, CircleDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDashFill ref={ref} {...rest} />;
  if (duotone) return <CircleDashRegularDuotone ref={ref} {...rest} />;
  return <CircleDashRegular ref={ref} {...rest} />;
}));

CircleDash.displayName = 'CircleDash';

// Triple export pattern (lucide-react style)
export { CircleDash, CircleDash as CircleDashIcon, CircleDash as SiCircleDash };
export default CircleDash;
