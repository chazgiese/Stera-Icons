import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryLowRegular } from './BatteryLowRegular';
import { BatteryLowRegularDuotone } from './BatteryLowRegularDuotone';
import { BatteryLowBold } from './BatteryLowBold';
import { BatteryLowBoldDuotone } from './BatteryLowBoldDuotone';
import { BatteryLowFill } from './BatteryLowFill';
import { BatteryLowFillDuotone } from './BatteryLowFillDuotone';

export interface BatteryLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BatteryLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryLowRegular } from 'stera-icons/icons/BatteryLowRegular';
 */
const BatteryLow = memo(forwardRef<SVGSVGElement, BatteryLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryLowFill ref={ref} {...rest} />;
  if (duotone) return <BatteryLowRegularDuotone ref={ref} {...rest} />;
  return <BatteryLowRegular ref={ref} {...rest} />;
}));

BatteryLow.displayName = 'BatteryLow';

// Triple export pattern (lucide-react style)
export { BatteryLow, BatteryLow as BatteryLowIcon, BatteryLow as SiBatteryLow };
