import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock6Regular } from './Clock6Regular';
import { Clock6RegularDuotone } from './Clock6RegularDuotone';
import { Clock6Bold } from './Clock6Bold';
import { Clock6BoldDuotone } from './Clock6BoldDuotone';
import { Clock6Fill } from './Clock6Fill';
import { Clock6FillDuotone } from './Clock6FillDuotone';

export interface Clock6Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock6 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock6Regular } from 'stera-icons/Clock6Regular';
 */
const Clock6 = memo(forwardRef<SVGSVGElement, Clock6Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock6BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock6Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock6FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock6Fill ref={ref} {...rest} />;
  if (duotone) return <Clock6RegularDuotone ref={ref} {...rest} />;
  return <Clock6Regular ref={ref} {...rest} />;
}));

Clock6.displayName = 'Clock6';

// Triple export pattern (lucide-react style)
export { Clock6, Clock6 as Clock6Icon, Clock6 as SiClock6 };
