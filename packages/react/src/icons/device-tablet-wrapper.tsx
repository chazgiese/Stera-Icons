import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceTabletIcon as DeviceTabletIconRegular } from './device-tablet';
import { DeviceTabletIconBold } from './device-tablet-bold';
import { DeviceTabletIconFilled } from './device-tablet-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DeviceTabletIconRegular ref={ref} {...props} />;
  }
}));

DeviceTabletIcon.displayName = 'DeviceTabletIcon';

export { DeviceTabletIcon };
