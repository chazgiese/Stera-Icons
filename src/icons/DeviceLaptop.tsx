import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DeviceLaptopRegular } from './DeviceLaptopRegular.js';
import { DeviceLaptopRegularDuotone } from './DeviceLaptopRegularDuotone.js';
import { DeviceLaptopBold } from './DeviceLaptopBold.js';
import { DeviceLaptopBoldDuotone } from './DeviceLaptopBoldDuotone.js';
import { DeviceLaptopFill } from './DeviceLaptopFill.js';
import { DeviceLaptopFillDuotone } from './DeviceLaptopFillDuotone.js';

export interface DeviceLaptopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DeviceLaptop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DeviceLaptopRegular } from 'stera-icons/icons/DeviceLaptopRegular';
 */
const DeviceLaptop = memo(forwardRef<SVGSVGElement, DeviceLaptopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeviceLaptopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DeviceLaptopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DeviceLaptopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DeviceLaptopFill ref={ref} {...rest} />;
  if (duotone) return <DeviceLaptopRegularDuotone ref={ref} {...rest} />;
  return <DeviceLaptopRegular ref={ref} {...rest} />;
}));

DeviceLaptop.displayName = 'DeviceLaptop';

// Triple export pattern (lucide-react style)
export { DeviceLaptop, DeviceLaptop as DeviceLaptopIcon, DeviceLaptop as SiDeviceLaptop };
export default DeviceLaptop;
