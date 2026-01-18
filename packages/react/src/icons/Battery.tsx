import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryRegular } from './BatteryRegular';
import { BatteryRegularDuotone } from './BatteryRegularDuotone';
import { BatteryBold } from './BatteryBold';
import { BatteryBoldDuotone } from './BatteryBoldDuotone';
import { BatteryFill } from './BatteryFill';
import { BatteryFillDuotone } from './BatteryFillDuotone';

export interface BatteryProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Battery - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryRegular } from 'stera-icons/BatteryRegular';
 */
const Battery = memo(forwardRef<SVGSVGElement, BatteryProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryFill ref={ref} {...rest} />;
  if (duotone) return <BatteryRegularDuotone ref={ref} {...rest} />;
  return <BatteryRegular ref={ref} {...rest} />;
}));

Battery.displayName = 'Battery';

// Triple export pattern (lucide-react style)
export { Battery, Battery as BatteryIcon, Battery as SiBattery };
