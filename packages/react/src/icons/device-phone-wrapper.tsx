import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DevicePhoneIcon as RegularDevicePhoneIcon } from './device-phone';
import { DevicePhoneIconBold } from './device-phone-bold';
import { DevicePhoneIconFilled } from './device-phone-filled';
import { DevicePhoneIconFilltone } from './device-phone-filltone';
import { DevicePhoneIconLinetone } from './device-phone-linetone';

export interface DevicePhoneIconProps extends IconProps {
  variant?: IconVariant;
}

const DevicePhoneIcon = memo(forwardRef<SVGSVGElement, DevicePhoneIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DevicePhoneIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DevicePhoneIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DevicePhoneIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DevicePhoneIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDevicePhoneIcon ref={ref} {...props} />;
  }
}));

DevicePhoneIcon.displayName = 'DevicePhoneIcon';

export { DevicePhoneIcon };
