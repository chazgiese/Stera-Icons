import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DevicePhoneIosIcon as DevicePhoneIosIconRegular } from './device-phone-ios';
import { DevicePhoneIosIconBold } from './device-phone-ios-bold';
import { DevicePhoneIosIconFilled } from './device-phone-ios-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DevicePhoneIosIconProps extends IconProps {
  variant?: IconVariant;
}

const DevicePhoneIosIcon = memo(forwardRef<SVGSVGElement, DevicePhoneIosIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DevicePhoneIosIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DevicePhoneIosIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DevicePhoneIosIconRegular ref={ref} {...props} />;
  }
}));

DevicePhoneIosIcon.displayName = 'DevicePhoneIosIcon';

export { DevicePhoneIosIcon };
