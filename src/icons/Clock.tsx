import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ClockRegular } from './ClockRegular.js';
import { ClockRegularDuotone } from './ClockRegularDuotone.js';
import { ClockBold } from './ClockBold.js';
import { ClockBoldDuotone } from './ClockBoldDuotone.js';
import { ClockFill } from './ClockFill.js';
import { ClockFillDuotone } from './ClockFillDuotone.js';

export interface ClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Clock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ClockRegular } from 'stera-icons/icons/ClockRegular';
 */
const Clock = memo(forwardRef<SVGSVGElement, ClockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ClockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ClockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ClockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ClockFill ref={ref} {...rest} />;
  if (duotone) return <ClockRegularDuotone ref={ref} {...rest} />;
  return <ClockRegular ref={ref} {...rest} />;
}));

Clock.displayName = 'Clock';

// Triple export pattern (lucide-react style)
export { Clock, Clock as ClockIcon, Clock as SiClock };
export default Clock;
