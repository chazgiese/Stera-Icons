import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlarmClockMinusIcon as RegularAlarmClockMinusIcon } from './alarm-clock-minus';
import { AlarmClockMinusIconBold } from './alarm-clock-minus-bold';
import { AlarmClockMinusIconFilled } from './alarm-clock-minus-filled';
import { AlarmClockMinusIconFilltone } from './alarm-clock-minus-filltone';
import { AlarmClockMinusIconLinetone } from './alarm-clock-minus-linetone';

export interface AlarmClockMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const AlarmClockMinusIcon = memo(forwardRef<SVGSVGElement, AlarmClockMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlarmClockMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlarmClockMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlarmClockMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlarmClockMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlarmClockMinusIcon ref={ref} {...props} />;
  }
}));

AlarmClockMinusIcon.displayName = 'AlarmClockMinusIcon';

export { AlarmClockMinusIcon };
