import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceLaptopIcon as RegularDeviceLaptopIcon } from './device-laptop';
import { DeviceLaptopIconDuotone as DeviceLaptopIconDuotone } from './device-laptop-duotone';
import { DeviceLaptopIconBold as DeviceLaptopIconBold } from './device-laptop-bold';
import { DeviceLaptopIconBoldDuotone as DeviceLaptopIconBoldDuotone } from './device-laptop-bold-duotone';
import { DeviceLaptopIconFill as DeviceLaptopIconFill } from './device-laptop-fill';
import { DeviceLaptopIconFillDuotone as DeviceLaptopIconFillDuotone } from './device-laptop-fill-duotone';

export interface DeviceLaptopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DeviceLaptopIcon = memo(forwardRef<SVGSVGElement, DeviceLaptopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceLaptopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DeviceLaptopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DeviceLaptopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DeviceLaptopIconFill ref={ref} {...props} />;
  if (duotone) return <DeviceLaptopIconDuotone ref={ref} {...props} />;
  return <RegularDeviceLaptopIcon ref={ref} {...props} />;
}));

DeviceLaptopIcon.displayName = 'DeviceLaptopIcon';

export { DeviceLaptopIcon };
