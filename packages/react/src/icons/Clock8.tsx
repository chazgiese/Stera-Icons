import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Clock8Regular } from './Clock8Regular';
import { Clock8RegularDuotone } from './Clock8RegularDuotone';
import { Clock8Bold } from './Clock8Bold';
import { Clock8BoldDuotone } from './Clock8BoldDuotone';
import { Clock8Fill } from './Clock8Fill';
import { Clock8FillDuotone } from './Clock8FillDuotone';

export interface Clock8Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock8 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { Clock8Regular } from 'stera-icons/Clock8Regular';
 */
const Clock8 = memo(forwardRef<SVGSVGElement, Clock8Props>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <Clock8BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <Clock8Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <Clock8FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <Clock8Fill ref={ref} {...rest} />;
  if (duotone) return <Clock8RegularDuotone ref={ref} {...rest} />;
  return <Clock8Regular ref={ref} {...rest} />;
}));

Clock8.displayName = 'Clock8';

// Triple export pattern (lucide-react style)
export { Clock8, Clock8 as Clock8Icon, Clock8 as SiClock8 };
