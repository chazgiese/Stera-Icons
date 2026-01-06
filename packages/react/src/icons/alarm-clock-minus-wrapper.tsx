import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlarmClockMinusIcon as RegularAlarmClockMinusIcon } from './alarm-clock-minus';
import { AlarmClockMinusIconDuotone as AlarmClockMinusIconDuotone } from './alarm-clock-minus-duotone';
import { AlarmClockMinusIconBold as AlarmClockMinusIconBold } from './alarm-clock-minus-bold';
import { AlarmClockMinusIconBoldDuotone as AlarmClockMinusIconBoldDuotone } from './alarm-clock-minus-bold-duotone';
import { AlarmClockMinusIconFill as AlarmClockMinusIconFill } from './alarm-clock-minus-fill';
import { AlarmClockMinusIconFillDuotone as AlarmClockMinusIconFillDuotone } from './alarm-clock-minus-fill-duotone';

export interface AlarmClockMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlarmClockMinusIcon = memo(forwardRef<SVGSVGElement, AlarmClockMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlarmClockMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlarmClockMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlarmClockMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlarmClockMinusIconFill ref={ref} {...props} />;
  if (duotone) return <AlarmClockMinusIconDuotone ref={ref} {...props} />;
  return <RegularAlarmClockMinusIcon ref={ref} {...props} />;
}));

AlarmClockMinusIcon.displayName = 'AlarmClockMinusIcon';

export { AlarmClockMinusIcon };
