import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockIcon as RegularAlarmClockIcon } from './alarm-clock';
import { AlarmClockIconDuotone as AlarmClockIconDuotone } from './alarm-clock-duotone';
import { AlarmClockIconBold as AlarmClockIconBold } from './alarm-clock-bold';
import { AlarmClockIconBoldDuotone as AlarmClockIconBoldDuotone } from './alarm-clock-bold-duotone';
import { AlarmClockIconFill as AlarmClockIconFill } from './alarm-clock-fill';
import { AlarmClockIconFillDuotone as AlarmClockIconFillDuotone } from './alarm-clock-fill-duotone';

export interface AlarmClockIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlarmClockIcon = memo(forwardRef<SVGSVGElement, AlarmClockIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlarmClockIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlarmClockIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlarmClockIconFill ref={ref} {...props} />;
  if (duotone) return <AlarmClockIconDuotone ref={ref} {...props} />;
  return <RegularAlarmClockIcon ref={ref} {...props} />;
}));

AlarmClockIcon.displayName = 'AlarmClockIcon';

export { AlarmClockIcon };
