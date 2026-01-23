import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Clock12Regular } from './Clock12Regular.js';
import { Clock12RegularDuotone } from './Clock12RegularDuotone.js';
import { Clock12Bold } from './Clock12Bold.js';
import { Clock12BoldDuotone } from './Clock12BoldDuotone.js';
import { Clock12Fill } from './Clock12Fill.js';
import { Clock12FillDuotone } from './Clock12FillDuotone.js';

export interface Clock12Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock12 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock12Regular } from 'stera-icons/icons/Clock12Regular';
 */
const Clock12 = memo(forwardRef<SVGSVGElement, Clock12Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock12BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock12Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock12FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock12Fill ref={ref} {...rest} />;
  if (duotone) return <Clock12RegularDuotone ref={ref} {...rest} />;
  return <Clock12Regular ref={ref} {...rest} />;
}));

Clock12.displayName = 'Clock12';

// Triple export pattern (lucide-react style)
export { Clock12, Clock12 as Clock12Icon, Clock12 as SiClock12 };
export default Clock12;
