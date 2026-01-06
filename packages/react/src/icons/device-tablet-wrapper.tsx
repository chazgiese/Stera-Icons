import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceTabletIcon as RegularDeviceTabletIcon } from './device-tablet';
import { DeviceTabletIconDuotone as DeviceTabletIconDuotone } from './device-tablet-duotone';
import { DeviceTabletIconBold as DeviceTabletIconBold } from './device-tablet-bold';
import { DeviceTabletIconBoldDuotone as DeviceTabletIconBoldDuotone } from './device-tablet-bold-duotone';
import { DeviceTabletIconFill as DeviceTabletIconFill } from './device-tablet-fill';
import { DeviceTabletIconFillDuotone as DeviceTabletIconFillDuotone } from './device-tablet-fill-duotone';

export interface DeviceTabletIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DeviceTabletIcon = memo(forwardRef<SVGSVGElement, DeviceTabletIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceTabletIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DeviceTabletIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DeviceTabletIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DeviceTabletIconFill ref={ref} {...props} />;
  if (duotone) return <DeviceTabletIconDuotone ref={ref} {...props} />;
  return <RegularDeviceTabletIcon ref={ref} {...props} />;
}));

DeviceTabletIcon.displayName = 'DeviceTabletIcon';

export { DeviceTabletIcon };
