import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlarmClockPlusIcon as RegularAlarmClockPlusIcon } from './alarm-clock-plus';
import { AlarmClockPlusIconBold } from './alarm-clock-plus-bold';
import { AlarmClockPlusIconFilled } from './alarm-clock-plus-filled';
import { AlarmClockPlusIconFilltone } from './alarm-clock-plus-filltone';
import { AlarmClockPlusIconLinetone } from './alarm-clock-plus-linetone';

export interface AlarmClockPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const AlarmClockPlusIcon = memo(forwardRef<SVGSVGElement, AlarmClockPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlarmClockPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlarmClockPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlarmClockPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlarmClockPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlarmClockPlusIcon ref={ref} {...props} />;
  }
}));

AlarmClockPlusIcon.displayName = 'AlarmClockPlusIcon';

export { AlarmClockPlusIcon };
