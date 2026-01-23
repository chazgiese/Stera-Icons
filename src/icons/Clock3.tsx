import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { Clock3Regular } from './Clock3Regular.js';
import { Clock3RegularDuotone } from './Clock3RegularDuotone.js';
import { Clock3Bold } from './Clock3Bold.js';
import { Clock3BoldDuotone } from './Clock3BoldDuotone.js';
import { Clock3Fill } from './Clock3Fill.js';
import { Clock3FillDuotone } from './Clock3FillDuotone.js';

export interface Clock3Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock3 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock3Regular } from 'stera-icons/icons/Clock3Regular';
 */
const Clock3 = memo(forwardRef<SVGSVGElement, Clock3Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock3BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock3Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock3FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock3Fill ref={ref} {...rest} />;
  if (duotone) return <Clock3RegularDuotone ref={ref} {...rest} />;
  return <Clock3Regular ref={ref} {...rest} />;
}));

Clock3.displayName = 'Clock3';

// Triple export pattern (lucide-react style)
export { Clock3, Clock3 as Clock3Icon, Clock3 as SiClock3 };
export default Clock3;
