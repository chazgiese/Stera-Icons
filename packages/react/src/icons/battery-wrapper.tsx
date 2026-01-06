import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryIcon as RegularBatteryIcon } from './battery';
import { BatteryIconDuotone as BatteryIconDuotone } from './battery-duotone';
import { BatteryIconBold as BatteryIconBold } from './battery-bold';
import { BatteryIconBoldDuotone as BatteryIconBoldDuotone } from './battery-bold-duotone';
import { BatteryIconFill as BatteryIconFill } from './battery-fill';
import { BatteryIconFillDuotone as BatteryIconFillDuotone } from './battery-fill-duotone';

export interface BatteryIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BatteryIcon = memo(forwardRef<SVGSVGElement, BatteryIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BatteryIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BatteryIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BatteryIconFill ref={ref} {...props} />;
  if (duotone) return <BatteryIconDuotone ref={ref} {...props} />;
  return <RegularBatteryIcon ref={ref} {...props} />;
}));

BatteryIcon.displayName = 'BatteryIcon';

export { BatteryIcon };
