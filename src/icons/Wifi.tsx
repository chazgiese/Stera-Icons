import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WifiRegular } from './WifiRegular.js';
import { WifiRegularDuotone } from './WifiRegularDuotone.js';
import { WifiBold } from './WifiBold.js';
import { WifiBoldDuotone } from './WifiBoldDuotone.js';
import { WifiFill } from './WifiFill.js';
import { WifiFillDuotone } from './WifiFillDuotone.js';

export interface WifiProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Wifi - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WifiRegular } from 'stera-icons/icons/WifiRegular';
 */
const Wifi = memo(forwardRef<SVGSVGElement, WifiProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WifiBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WifiBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WifiFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WifiFill ref={ref} {...rest} />;
  if (duotone) return <WifiRegularDuotone ref={ref} {...rest} />;
  return <WifiRegular ref={ref} {...rest} />;
}));

Wifi.displayName = 'Wifi';

// Triple export pattern (lucide-react style)
export { Wifi, Wifi as WifiIcon, Wifi as SiWifi };
export default Wifi;
