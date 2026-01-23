import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BatteryHalfRegular } from './BatteryHalfRegular.js';
import { BatteryHalfRegularDuotone } from './BatteryHalfRegularDuotone.js';
import { BatteryHalfBold } from './BatteryHalfBold.js';
import { BatteryHalfBoldDuotone } from './BatteryHalfBoldDuotone.js';
import { BatteryHalfFill } from './BatteryHalfFill.js';
import { BatteryHalfFillDuotone } from './BatteryHalfFillDuotone.js';

export interface BatteryHalfProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BatteryHalf - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryHalfRegular } from 'stera-icons/icons/BatteryHalfRegular';
 */
const BatteryHalf = memo(forwardRef<SVGSVGElement, BatteryHalfProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryHalfBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryHalfBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryHalfFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryHalfFill ref={ref} {...rest} />;
  if (duotone) return <BatteryHalfRegularDuotone ref={ref} {...rest} />;
  return <BatteryHalfRegular ref={ref} {...rest} />;
}));

BatteryHalf.displayName = 'BatteryHalf';

// Triple export pattern (lucide-react style)
export { BatteryHalf, BatteryHalf as BatteryHalfIcon, BatteryHalf as SiBatteryHalf };
export default BatteryHalf;
