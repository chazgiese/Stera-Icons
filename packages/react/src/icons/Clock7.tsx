import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock7Regular } from './Clock7Regular';
import { Clock7RegularDuotone } from './Clock7RegularDuotone';
import { Clock7Bold } from './Clock7Bold';
import { Clock7BoldDuotone } from './Clock7BoldDuotone';
import { Clock7Fill } from './Clock7Fill';
import { Clock7FillDuotone } from './Clock7FillDuotone';

export interface Clock7Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock7 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock7Regular } from 'stera-icons/Clock7Regular';
 */
const Clock7 = memo(forwardRef<SVGSVGElement, Clock7Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock7BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock7Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock7FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock7Fill ref={ref} {...rest} />;
  if (duotone) return <Clock7RegularDuotone ref={ref} {...rest} />;
  return <Clock7Regular ref={ref} {...rest} />;
}));

Clock7.displayName = 'Clock7';

// Triple export pattern (lucide-react style)
export { Clock7, Clock7 as Clock7Icon, Clock7 as SiClock7 };
