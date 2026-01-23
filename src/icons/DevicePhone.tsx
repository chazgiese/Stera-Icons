import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DevicePhoneRegular } from './DevicePhoneRegular.js';
import { DevicePhoneRegularDuotone } from './DevicePhoneRegularDuotone.js';
import { DevicePhoneBold } from './DevicePhoneBold.js';
import { DevicePhoneBoldDuotone } from './DevicePhoneBoldDuotone.js';
import { DevicePhoneFill } from './DevicePhoneFill.js';
import { DevicePhoneFillDuotone } from './DevicePhoneFillDuotone.js';

export interface DevicePhoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DevicePhone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DevicePhoneRegular } from 'stera-icons/icons/DevicePhoneRegular';
 */
const DevicePhone = memo(forwardRef<SVGSVGElement, DevicePhoneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DevicePhoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DevicePhoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DevicePhoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DevicePhoneFill ref={ref} {...rest} />;
  if (duotone) return <DevicePhoneRegularDuotone ref={ref} {...rest} />;
  return <DevicePhoneRegular ref={ref} {...rest} />;
}));

DevicePhone.displayName = 'DevicePhone';

// Triple export pattern (lucide-react style)
export { DevicePhone, DevicePhone as DevicePhoneIcon, DevicePhone as SiDevicePhone };
export default DevicePhone;
