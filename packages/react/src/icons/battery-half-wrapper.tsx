import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryHalfIcon as RegularBatteryHalfIcon } from './battery-half';
import { BatteryHalfIconDuotone as BatteryHalfIconDuotone } from './battery-half-duotone';
import { BatteryHalfIconBold as BatteryHalfIconBold } from './battery-half-bold';
import { BatteryHalfIconBoldDuotone as BatteryHalfIconBoldDuotone } from './battery-half-bold-duotone';
import { BatteryHalfIconFill as BatteryHalfIconFill } from './battery-half-fill';
import { BatteryHalfIconFillDuotone as BatteryHalfIconFillDuotone } from './battery-half-fill-duotone';

export interface BatteryHalfIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BatteryHalfIcon = memo(forwardRef<SVGSVGElement, BatteryHalfIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryHalfIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BatteryHalfIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BatteryHalfIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BatteryHalfIconFill ref={ref} {...props} />;
  if (duotone) return <BatteryHalfIconDuotone ref={ref} {...props} />;
  return <RegularBatteryHalfIcon ref={ref} {...props} />;
}));

BatteryHalfIcon.displayName = 'BatteryHalfIcon';

export { BatteryHalfIcon };
