import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TimerIcon as TimerIconRegular } from './timer';
import { TimerIconBold } from './timer-bold';
import { TimerIconFilled } from './timer-filled';
import { TimerIconFilltone } from './timer-filltone';
import { TimerIconLinetone } from './timer-linetone';

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
    case 'filltone':
      return <TimerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TimerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TimerIconRegular ref={ref} {...props} />;
  }
}));

TimerIcon.displayName = 'TimerIcon';

export { TimerIcon };
