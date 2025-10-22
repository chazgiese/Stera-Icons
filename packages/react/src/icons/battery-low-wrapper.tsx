import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BatteryLowIcon as BatteryLowIconRegular } from './battery-low';
import { BatteryLowIconBold } from './battery-low-bold';
import { BatteryLowIconFilled } from './battery-low-filled';
import { BatteryLowIconFilltone } from './battery-low-filltone';
import { BatteryLowIconLinetone } from './battery-low-linetone';

export interface BatteryLowIconProps extends IconProps {
  variant?: IconVariant;
}

const BatteryLowIcon = memo(forwardRef<SVGSVGElement, BatteryLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BatteryLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BatteryLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BatteryLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BatteryLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BatteryLowIconRegular ref={ref} {...props} />;
  }
}));

BatteryLowIcon.displayName = 'BatteryLowIcon';

export { BatteryLowIcon };
