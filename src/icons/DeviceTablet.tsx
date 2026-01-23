import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DeviceTabletRegular } from './DeviceTabletRegular.js';
import { DeviceTabletRegularDuotone } from './DeviceTabletRegularDuotone.js';
import { DeviceTabletBold } from './DeviceTabletBold.js';
import { DeviceTabletBoldDuotone } from './DeviceTabletBoldDuotone.js';
import { DeviceTabletFill } from './DeviceTabletFill.js';
import { DeviceTabletFillDuotone } from './DeviceTabletFillDuotone.js';

export interface DeviceTabletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DeviceTablet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DeviceTabletRegular } from 'stera-icons/icons/DeviceTabletRegular';
 */
const DeviceTablet = memo(forwardRef<SVGSVGElement, DeviceTabletProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceTabletBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DeviceTabletBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DeviceTabletFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DeviceTabletFill ref={ref} {...rest} />;
  if (duotone) return <DeviceTabletRegularDuotone ref={ref} {...rest} />;
  return <DeviceTabletRegular ref={ref} {...rest} />;
}));

DeviceTablet.displayName = 'DeviceTablet';

// Triple export pattern (lucide-react style)
export { DeviceTablet, DeviceTablet as DeviceTabletIcon, DeviceTablet as SiDeviceTablet };
export default DeviceTablet;
