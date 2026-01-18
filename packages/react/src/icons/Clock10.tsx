import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock10Regular } from './Clock10Regular';
import { Clock10RegularDuotone } from './Clock10RegularDuotone';
import { Clock10Bold } from './Clock10Bold';
import { Clock10BoldDuotone } from './Clock10BoldDuotone';
import { Clock10Fill } from './Clock10Fill';
import { Clock10FillDuotone } from './Clock10FillDuotone';

export interface Clock10Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock10 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock10Regular } from 'stera-icons/Clock10Regular';
 */
const Clock10 = memo(forwardRef<SVGSVGElement, Clock10Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock10BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock10Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock10FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock10Fill ref={ref} {...rest} />;
  if (duotone) return <Clock10RegularDuotone ref={ref} {...rest} />;
  return <Clock10Regular ref={ref} {...rest} />;
}));

Clock10.displayName = 'Clock10';

// Triple export pattern (lucide-react style)
export { Clock10, Clock10 as Clock10Icon, Clock10 as SiClock10 };
