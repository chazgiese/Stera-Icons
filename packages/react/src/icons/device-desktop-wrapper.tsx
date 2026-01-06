import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceDesktopIcon as RegularDeviceDesktopIcon } from './device-desktop';
import { DeviceDesktopIconDuotone as DeviceDesktopIconDuotone } from './device-desktop-duotone';
import { DeviceDesktopIconBold as DeviceDesktopIconBold } from './device-desktop-bold';
import { DeviceDesktopIconBoldDuotone as DeviceDesktopIconBoldDuotone } from './device-desktop-bold-duotone';
import { DeviceDesktopIconFill as DeviceDesktopIconFill } from './device-desktop-fill';
import { DeviceDesktopIconFillDuotone as DeviceDesktopIconFillDuotone } from './device-desktop-fill-duotone';

export interface DeviceDesktopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DeviceDesktopIcon = memo(forwardRef<SVGSVGElement, DeviceDesktopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceDesktopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DeviceDesktopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DeviceDesktopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DeviceDesktopIconFill ref={ref} {...props} />;
  if (duotone) return <DeviceDesktopIconDuotone ref={ref} {...props} />;
  return <RegularDeviceDesktopIcon ref={ref} {...props} />;
}));

DeviceDesktopIcon.displayName = 'DeviceDesktopIcon';

export { DeviceDesktopIcon };
