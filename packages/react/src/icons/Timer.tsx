import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TimerRegular } from './TimerRegular';
import { TimerRegularDuotone } from './TimerRegularDuotone';
import { TimerBold } from './TimerBold';
import { TimerBoldDuotone } from './TimerBoldDuotone';
import { TimerFill } from './TimerFill';
import { TimerFillDuotone } from './TimerFillDuotone';

export interface TimerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Timer with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TimerRegular } from 'stera-icons/TimerRegular';
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

export { Timer };
