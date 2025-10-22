import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BatteryHalfIcon as RegularBatteryHalfIcon } from './battery-half';
import { BatteryHalfIconBold } from './battery-half-bold';
import { BatteryHalfIconFilled } from './battery-half-filled';
import { BatteryHalfIconFilltone } from './battery-half-filltone';
import { BatteryHalfIconLinetone } from './battery-half-linetone';

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
    case 'filltone':
      return <BatteryHalfIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BatteryHalfIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBatteryHalfIcon ref={ref} {...props} />;
  }
}));

BatteryHalfIcon.displayName = 'BatteryHalfIcon';

export { BatteryHalfIcon };
