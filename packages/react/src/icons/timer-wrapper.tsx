import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TimerIcon as TimerIconRegular } from './timer';
import { TimerIconBold } from './timer-bold';
import { TimerIconFilled } from './timer-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TimerIconProps extends IconProps {
  variant?: IconVariant;
}

const TimerIcon = memo(forwardRef<SVGSVGElement, TimerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TimerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TimerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TimerIconRegular ref={ref} {...props} />;
  }
}));

TimerIcon.displayName = 'TimerIcon';

export { TimerIcon };
