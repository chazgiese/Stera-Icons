import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DeviceLaptopIcon as RegularDeviceLaptopIcon } from './device-laptop';
import { DeviceLaptopIconBold } from './device-laptop-bold';
import { DeviceLaptopIconFilled } from './device-laptop-filled';
import { DeviceLaptopIconFilltone } from './device-laptop-filltone';
import { DeviceLaptopIconLinetone } from './device-laptop-linetone';

export interface DeviceLaptopIconProps extends IconProps {
  variant?: IconVariant;
}

const DeviceLaptopIcon = memo(forwardRef<SVGSVGElement, DeviceLaptopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DeviceLaptopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DeviceLaptopIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DeviceLaptopIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DeviceLaptopIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDeviceLaptopIcon ref={ref} {...props} />;
  }
}));

DeviceLaptopIcon.displayName = 'DeviceLaptopIcon';

export { DeviceLaptopIcon };
