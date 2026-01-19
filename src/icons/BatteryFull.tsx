import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryFullRegular } from './BatteryFullRegular';
import { BatteryFullRegularDuotone } from './BatteryFullRegularDuotone';
import { BatteryFullBold } from './BatteryFullBold';
import { BatteryFullBoldDuotone } from './BatteryFullBoldDuotone';
import { BatteryFullFill } from './BatteryFullFill';
import { BatteryFullFillDuotone } from './BatteryFullFillDuotone';

export interface BatteryFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BatteryFull - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryFullRegular } from 'stera-icons/icons/BatteryFullRegular';
 */
const BatteryFull = memo(forwardRef<SVGSVGElement, BatteryFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryFullFill ref={ref} {...rest} />;
  if (duotone) return <BatteryFullRegularDuotone ref={ref} {...rest} />;
  return <BatteryFullRegular ref={ref} {...rest} />;
}));

BatteryFull.displayName = 'BatteryFull';

// Triple export pattern (lucide-react style)
export { BatteryFull, BatteryFull as BatteryFullIcon, BatteryFull as SiBatteryFull };
export default BatteryFull;
