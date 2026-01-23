import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Clock11Regular } from './Clock11Regular.js';
import { Clock11RegularDuotone } from './Clock11RegularDuotone.js';
import { Clock11Bold } from './Clock11Bold.js';
import { Clock11BoldDuotone } from './Clock11BoldDuotone.js';
import { Clock11Fill } from './Clock11Fill.js';
import { Clock11FillDuotone } from './Clock11FillDuotone.js';

export interface Clock11Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock11 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock11Regular } from 'stera-icons/icons/Clock11Regular';
 */
const Clock11 = memo(forwardRef<SVGSVGElement, Clock11Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock11BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock11Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock11FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock11Fill ref={ref} {...rest} />;
  if (duotone) return <Clock11RegularDuotone ref={ref} {...rest} />;
  return <Clock11Regular ref={ref} {...rest} />;
}));

Clock11.displayName = 'Clock11';

// Triple export pattern (lucide-react style)
export { Clock11, Clock11 as Clock11Icon, Clock11 as SiClock11 };
export default Clock11;
