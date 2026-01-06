import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TimerIcon as RegularTimerIcon } from './timer';
import { TimerIconDuotone as TimerIconDuotone } from './timer-duotone';
import { TimerIconBold as TimerIconBold } from './timer-bold';
import { TimerIconBoldDuotone as TimerIconBoldDuotone } from './timer-bold-duotone';
import { TimerIconFill as TimerIconFill } from './timer-fill';
import { TimerIconFillDuotone as TimerIconFillDuotone } from './timer-fill-duotone';

export interface TimerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TimerIcon = memo(forwardRef<SVGSVGElement, TimerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TimerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TimerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TimerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TimerIconFill ref={ref} {...props} />;
  if (duotone) return <TimerIconDuotone ref={ref} {...props} />;
  return <RegularTimerIcon ref={ref} {...props} />;
}));

TimerIcon.displayName = 'TimerIcon';

export { TimerIcon };
