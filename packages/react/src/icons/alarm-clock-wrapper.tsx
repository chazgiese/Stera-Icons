import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlarmClockIcon as RegularAlarmClockIcon } from './alarm-clock';
import { AlarmClockIconBold } from './alarm-clock-bold';
import { AlarmClockIconFilled } from './alarm-clock-filled';
import { AlarmClockIconFilltone } from './alarm-clock-filltone';
import { AlarmClockIconLinetone } from './alarm-clock-linetone';

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
    case 'filltone':
      return <AlarmClockIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlarmClockIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlarmClockIcon ref={ref} {...props} />;
  }
}));

AlarmClockIcon.displayName = 'AlarmClockIcon';

export { AlarmClockIcon };
