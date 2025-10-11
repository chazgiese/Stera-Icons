import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockIcon as AlarmClockIconRegular } from './alarm-clock';
import { AlarmClockIconBold } from './alarm-clock-bold';
import { AlarmClockIconFilled } from './alarm-clock-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlarmClockIconProps extends IconProps {
  variant?: IconVariant;
}

const AlarmClockIcon = memo(forwardRef<SVGSVGElement, AlarmClockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlarmClockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlarmClockIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlarmClockIconRegular ref={ref} {...props} />;
  }
}));

AlarmClockIcon.displayName = 'AlarmClockIcon';

export { AlarmClockIcon };
