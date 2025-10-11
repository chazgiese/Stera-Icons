import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryHalfIcon as BatteryHalfIconRegular } from './battery-half';
import { BatteryHalfIconBold } from './battery-half-bold';
import { BatteryHalfIconFilled } from './battery-half-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BatteryHalfIconProps extends IconProps {
  variant?: IconVariant;
}

const BatteryHalfIcon = memo(forwardRef<SVGSVGElement, BatteryHalfIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BatteryHalfIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BatteryHalfIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BatteryHalfIconRegular ref={ref} {...props} />;
  }
}));

BatteryHalfIcon.displayName = 'BatteryHalfIcon';

export { BatteryHalfIcon };
