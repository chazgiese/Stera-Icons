import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceLaptopIcon as DeviceLaptopIconRegular } from './device-laptop';
import { DeviceLaptopIconBold } from './device-laptop-bold';
import { DeviceLaptopIconFilled } from './device-laptop-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DeviceLaptopIconRegular ref={ref} {...props} />;
  }
}));

DeviceLaptopIcon.displayName = 'DeviceLaptopIcon';

export { DeviceLaptopIcon };
