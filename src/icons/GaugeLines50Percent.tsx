import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeLines50PercentRegular } from './GaugeLines50PercentRegular.js';
import { GaugeLines50PercentRegularDuotone } from './GaugeLines50PercentRegularDuotone.js';
import { GaugeLines50PercentBold } from './GaugeLines50PercentBold.js';
import { GaugeLines50PercentBoldDuotone } from './GaugeLines50PercentBoldDuotone.js';
import { GaugeLines50PercentFill } from './GaugeLines50PercentFill.js';
import { GaugeLines50PercentFillDuotone } from './GaugeLines50PercentFillDuotone.js';

export interface GaugeLines50PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines50Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines50PercentRegular } from 'stera-icons/icons/GaugeLines50PercentRegular';
 */
const GaugeLines50Percent = memo(forwardRef<SVGSVGElement, GaugeLines50PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines50PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines50PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines50PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines50PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines50PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines50PercentRegular ref={ref} {...rest} />;
}));

GaugeLines50Percent.displayName = 'GaugeLines50Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines50Percent, GaugeLines50Percent as GaugeLines50PercentIcon, GaugeLines50Percent as SiGaugeLines50Percent };
export default GaugeLines50Percent;
