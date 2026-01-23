import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Clock4Regular } from './Clock4Regular.js';
import { Clock4RegularDuotone } from './Clock4RegularDuotone.js';
import { Clock4Bold } from './Clock4Bold.js';
import { Clock4BoldDuotone } from './Clock4BoldDuotone.js';
import { Clock4Fill } from './Clock4Fill.js';
import { Clock4FillDuotone } from './Clock4FillDuotone.js';

export interface Clock4Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock4 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock4Regular } from 'stera-icons/icons/Clock4Regular';
 */
const Clock4 = memo(forwardRef<SVGSVGElement, Clock4Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock4BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock4Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock4FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock4Fill ref={ref} {...rest} />;
  if (duotone) return <Clock4RegularDuotone ref={ref} {...rest} />;
  return <Clock4Regular ref={ref} {...rest} />;
}));

Clock4.displayName = 'Clock4';

// Triple export pattern (lucide-react style)
export { Clock4, Clock4 as Clock4Icon, Clock4 as SiClock4 };
export default Clock4;
