import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryFullIcon as RegularBatteryFullIcon } from './battery-full';
import { BatteryFullIconDuotone as BatteryFullIconDuotone } from './battery-full-duotone';
import { BatteryFullIconBold as BatteryFullIconBold } from './battery-full-bold';
import { BatteryFullIconBoldDuotone as BatteryFullIconBoldDuotone } from './battery-full-bold-duotone';
import { BatteryFullIconFill as BatteryFullIconFill } from './battery-full-fill';
import { BatteryFullIconFillDuotone as BatteryFullIconFillDuotone } from './battery-full-fill-duotone';

export interface BatteryFullIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BatteryFullIcon = memo(forwardRef<SVGSVGElement, BatteryFullIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryFullIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BatteryFullIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BatteryFullIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BatteryFullIconFill ref={ref} {...props} />;
  if (duotone) return <BatteryFullIconDuotone ref={ref} {...props} />;
  return <RegularBatteryFullIcon ref={ref} {...props} />;
}));

BatteryFullIcon.displayName = 'BatteryFullIcon';

export { BatteryFullIcon };
