import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockPlusIcon as RegularAlarmClockPlusIcon } from './alarm-clock-plus';
import { AlarmClockPlusIconDuotone as AlarmClockPlusIconDuotone } from './alarm-clock-plus-duotone';
import { AlarmClockPlusIconBold as AlarmClockPlusIconBold } from './alarm-clock-plus-bold';
import { AlarmClockPlusIconBoldDuotone as AlarmClockPlusIconBoldDuotone } from './alarm-clock-plus-bold-duotone';
import { AlarmClockPlusIconFill as AlarmClockPlusIconFill } from './alarm-clock-plus-fill';
import { AlarmClockPlusIconFillDuotone as AlarmClockPlusIconFillDuotone } from './alarm-clock-plus-fill-duotone';

export interface AlarmClockPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlarmClockPlusIcon = memo(forwardRef<SVGSVGElement, AlarmClockPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlarmClockPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlarmClockPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlarmClockPlusIconFill ref={ref} {...props} />;
  if (duotone) return <AlarmClockPlusIconDuotone ref={ref} {...props} />;
  return <RegularAlarmClockPlusIcon ref={ref} {...props} />;
}));

AlarmClockPlusIcon.displayName = 'AlarmClockPlusIcon';

export { AlarmClockPlusIcon };
