import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TimerRegular } from './TimerRegular.js';
import { TimerRegularDuotone } from './TimerRegularDuotone.js';
import { TimerBold } from './TimerBold.js';
import { TimerBoldDuotone } from './TimerBoldDuotone.js';
import { TimerFill } from './TimerFill.js';
import { TimerFillDuotone } from './TimerFillDuotone.js';

export interface TimerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Timer - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TimerRegular } from 'stera-icons/icons/TimerRegular';
 */
const Timer = memo(forwardRef<SVGSVGElement, TimerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TimerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TimerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TimerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TimerFill ref={ref} {...rest} />;
  if (duotone) return <TimerRegularDuotone ref={ref} {...rest} />;
  return <TimerRegular ref={ref} {...rest} />;
}));

Timer.displayName = 'Timer';

// Triple export pattern (lucide-react style)
export { Timer, Timer as TimerIcon, Timer as SiTimer };
export default Timer;
