import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeLines15PercentRegular } from './GaugeLines15PercentRegular.js';
import { GaugeLines15PercentRegularDuotone } from './GaugeLines15PercentRegularDuotone.js';
import { GaugeLines15PercentBold } from './GaugeLines15PercentBold.js';
import { GaugeLines15PercentBoldDuotone } from './GaugeLines15PercentBoldDuotone.js';
import { GaugeLines15PercentFill } from './GaugeLines15PercentFill.js';
import { GaugeLines15PercentFillDuotone } from './GaugeLines15PercentFillDuotone.js';

export interface GaugeLines15PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines15Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines15PercentRegular } from 'stera-icons/icons/GaugeLines15PercentRegular';
 */
const GaugeLines15Percent = memo(forwardRef<SVGSVGElement, GaugeLines15PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines15PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines15PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines15PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines15PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines15PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines15PercentRegular ref={ref} {...rest} />;
}));

GaugeLines15Percent.displayName = 'GaugeLines15Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines15Percent, GaugeLines15Percent as GaugeLines15PercentIcon, GaugeLines15Percent as SiGaugeLines15Percent };
export default GaugeLines15Percent;
