import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BatteryFullIcon as BatteryFullIconRegular } from './battery-full';
import { BatteryFullIconBold } from './battery-full-bold';
import { BatteryFullIconFilled } from './battery-full-filled';
import { BatteryFullIconFilltone } from './battery-full-filltone';
import { BatteryFullIconLinetone } from './battery-full-linetone';

export interface BatteryFullIconProps extends IconProps {
  variant?: IconVariant;
}

const BatteryFullIcon = memo(forwardRef<SVGSVGElement, BatteryFullIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BatteryFullIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BatteryFullIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BatteryFullIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BatteryFullIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BatteryFullIconRegular ref={ref} {...props} />;
  }
}));

BatteryFullIcon.displayName = 'BatteryFullIcon';

export { BatteryFullIcon };
