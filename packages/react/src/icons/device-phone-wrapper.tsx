import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DevicePhoneIcon as RegularDevicePhoneIcon } from './device-phone';
import { DevicePhoneIconDuotone as DevicePhoneIconDuotone } from './device-phone-duotone';
import { DevicePhoneIconBold as DevicePhoneIconBold } from './device-phone-bold';
import { DevicePhoneIconBoldDuotone as DevicePhoneIconBoldDuotone } from './device-phone-bold-duotone';
import { DevicePhoneIconFill as DevicePhoneIconFill } from './device-phone-fill';
import { DevicePhoneIconFillDuotone as DevicePhoneIconFillDuotone } from './device-phone-fill-duotone';

export interface DevicePhoneIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DevicePhoneIcon = memo(forwardRef<SVGSVGElement, DevicePhoneIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DevicePhoneIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DevicePhoneIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DevicePhoneIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DevicePhoneIconFill ref={ref} {...props} />;
  if (duotone) return <DevicePhoneIconDuotone ref={ref} {...props} />;
  return <RegularDevicePhoneIcon ref={ref} {...props} />;
}));

DevicePhoneIcon.displayName = 'DevicePhoneIcon';

export { DevicePhoneIcon };
