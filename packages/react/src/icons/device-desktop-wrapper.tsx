import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DeviceDesktopIcon as DeviceDesktopIconRegular } from './device-desktop';
import { DeviceDesktopIconBold } from './device-desktop-bold';
import { DeviceDesktopIconFilled } from './device-desktop-filled';
import { DeviceDesktopIconFilltone } from './device-desktop-filltone';
import { DeviceDesktopIconLinetone } from './device-desktop-linetone';

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
    case 'filltone':
      return <DeviceDesktopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DeviceDesktopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DeviceDesktopIconRegular ref={ref} {...props} />;
  }
}));

DeviceDesktopIcon.displayName = 'DeviceDesktopIcon';

export { DeviceDesktopIcon };
