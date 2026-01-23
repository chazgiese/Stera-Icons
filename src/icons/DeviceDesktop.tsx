import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DeviceDesktopRegular } from './DeviceDesktopRegular.js';
import { DeviceDesktopRegularDuotone } from './DeviceDesktopRegularDuotone.js';
import { DeviceDesktopBold } from './DeviceDesktopBold.js';
import { DeviceDesktopBoldDuotone } from './DeviceDesktopBoldDuotone.js';
import { DeviceDesktopFill } from './DeviceDesktopFill.js';
import { DeviceDesktopFillDuotone } from './DeviceDesktopFillDuotone.js';

export interface DeviceDesktopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DeviceDesktop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DeviceDesktopRegular } from 'stera-icons/icons/DeviceDesktopRegular';
 */
const DeviceDesktop = memo(forwardRef<SVGSVGElement, DeviceDesktopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceDesktopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DeviceDesktopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DeviceDesktopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DeviceDesktopFill ref={ref} {...rest} />;
  if (duotone) return <DeviceDesktopRegularDuotone ref={ref} {...rest} />;
  return <DeviceDesktopRegular ref={ref} {...rest} />;
}));

DeviceDesktop.displayName = 'DeviceDesktop';

// Triple export pattern (lucide-react style)
export { DeviceDesktop, DeviceDesktop as DeviceDesktopIcon, DeviceDesktop as SiDeviceDesktop };
export default DeviceDesktop;
