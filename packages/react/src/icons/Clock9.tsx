import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock9Regular } from './Clock9Regular';
import { Clock9RegularDuotone } from './Clock9RegularDuotone';
import { Clock9Bold } from './Clock9Bold';
import { Clock9BoldDuotone } from './Clock9BoldDuotone';
import { Clock9Fill } from './Clock9Fill';
import { Clock9FillDuotone } from './Clock9FillDuotone';

export interface Clock9Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock9 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock9Regular } from 'stera-icons/Clock9Regular';
 */
const Clock9 = memo(forwardRef<SVGSVGElement, Clock9Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock9BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock9Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock9FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock9Fill ref={ref} {...rest} />;
  if (duotone) return <Clock9RegularDuotone ref={ref} {...rest} />;
  return <Clock9Regular ref={ref} {...rest} />;
}));

Clock9.displayName = 'Clock9';

// Triple export pattern (lucide-react style)
export { Clock9, Clock9 as Clock9Icon, Clock9 as SiClock9 };
