import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceDesktopIcon as DeviceDesktopIconRegular } from './device-desktop';
import { DeviceDesktopIconBold } from './device-desktop-bold';
import { DeviceDesktopIconFilled } from './device-desktop-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DeviceDesktopIconProps extends IconProps {
  variant?: IconVariant;
}

const DeviceDesktopIcon = memo(forwardRef<SVGSVGElement, DeviceDesktopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DeviceDesktopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DeviceDesktopIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DeviceDesktopIconRegular ref={ref} {...props} />;
  }
}));

DeviceDesktopIcon.displayName = 'DeviceDesktopIcon';

export { DeviceDesktopIcon };
