import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DeviceTabletIcon as DeviceTabletIconRegular } from './device-tablet';
import { DeviceTabletIconBold } from './device-tablet-bold';
import { DeviceTabletIconFilled } from './device-tablet-filled';
import { DeviceTabletIconFilltone } from './device-tablet-filltone';
import { DeviceTabletIconLinetone } from './device-tablet-linetone';

export interface DeviceTabletIconProps extends IconProps {
  variant?: IconVariant;
}

const DeviceTabletIcon = memo(forwardRef<SVGSVGElement, DeviceTabletIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DeviceTabletIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DeviceTabletIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DeviceTabletIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DeviceTabletIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DeviceTabletIconRegular ref={ref} {...props} />;
  }
}));

DeviceTabletIcon.displayName = 'DeviceTabletIcon';

export { DeviceTabletIcon };
