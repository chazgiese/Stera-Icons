import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BatteryIcon as BatteryIconRegular } from './battery';
import { BatteryIconBold } from './battery-bold';
import { BatteryIconFilled } from './battery-filled';
import { BatteryIconFilltone } from './battery-filltone';
import { BatteryIconLinetone } from './battery-linetone';

export interface BatteryIconProps extends IconProps {
  variant?: IconVariant;
}

const BatteryIcon = memo(forwardRef<SVGSVGElement, BatteryIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BatteryIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BatteryIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BatteryIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BatteryIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BatteryIconRegular ref={ref} {...props} />;
  }
}));

BatteryIcon.displayName = 'BatteryIcon';

export { BatteryIcon };
