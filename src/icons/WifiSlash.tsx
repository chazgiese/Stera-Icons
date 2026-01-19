import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WifiSlashRegular } from './WifiSlashRegular';
import { WifiSlashRegularDuotone } from './WifiSlashRegularDuotone';
import { WifiSlashBold } from './WifiSlashBold';
import { WifiSlashBoldDuotone } from './WifiSlashBoldDuotone';
import { WifiSlashFill } from './WifiSlashFill';
import { WifiSlashFillDuotone } from './WifiSlashFillDuotone';

export interface WifiSlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WifiSlash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WifiSlashRegular } from 'stera-icons/icons/WifiSlashRegular';
 */
const WifiSlash = memo(forwardRef<SVGSVGElement, WifiSlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WifiSlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WifiSlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WifiSlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WifiSlashFill ref={ref} {...rest} />;
  if (duotone) return <WifiSlashRegularDuotone ref={ref} {...rest} />;
  return <WifiSlashRegular ref={ref} {...rest} />;
}));

WifiSlash.displayName = 'WifiSlash';

// Triple export pattern (lucide-react style)
export { WifiSlash, WifiSlash as WifiSlashIcon, WifiSlash as SiWifiSlash };
export default WifiSlash;
