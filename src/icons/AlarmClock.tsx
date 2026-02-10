import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';


export interface AlarmClockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlarmClock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlarmClock } from 'stera-icons/icons/AlarmClock';
 */
const AlarmClock = memo(forwardRef<SVGSVGElement, AlarmClockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  return <undefined ref={ref} {...rest} />;
}));

AlarmClock.displayName = 'AlarmClock';

// Triple export pattern (lucide-react style)
export { AlarmClock, AlarmClock as AlarmClockIcon, AlarmClock as SiAlarmClock };
export default AlarmClock;
