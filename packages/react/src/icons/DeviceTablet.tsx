import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeviceTabletRegular } from './DeviceTabletRegular';
import { DeviceTabletRegularDuotone } from './DeviceTabletRegularDuotone';
import { DeviceTabletBold } from './DeviceTabletBold';
import { DeviceTabletBoldDuotone } from './DeviceTabletBoldDuotone';
import { DeviceTabletFill } from './DeviceTabletFill';
import { DeviceTabletFillDuotone } from './DeviceTabletFillDuotone';

export interface DeviceTabletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DeviceTablet with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { DeviceTabletRegular } from 'stera-icons/DeviceTabletRegular';
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

export { DeviceTablet };
