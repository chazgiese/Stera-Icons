import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryLowIcon as RegularBatteryLowIcon } from './battery-low';
import { BatteryLowIconDuotone as BatteryLowIconDuotone } from './battery-low-duotone';
import { BatteryLowIconBold as BatteryLowIconBold } from './battery-low-bold';
import { BatteryLowIconBoldDuotone as BatteryLowIconBoldDuotone } from './battery-low-bold-duotone';
import { BatteryLowIconFill as BatteryLowIconFill } from './battery-low-fill';
import { BatteryLowIconFillDuotone as BatteryLowIconFillDuotone } from './battery-low-fill-duotone';

export interface BatteryLowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BatteryLowIcon = memo(forwardRef<SVGSVGElement, BatteryLowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryLowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BatteryLowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BatteryLowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BatteryLowIconFill ref={ref} {...props} />;
  if (duotone) return <BatteryLowIconDuotone ref={ref} {...props} />;
  return <RegularBatteryLowIcon ref={ref} {...props} />;
}));

BatteryLowIcon.displayName = 'BatteryLowIcon';

export { BatteryLowIcon };
