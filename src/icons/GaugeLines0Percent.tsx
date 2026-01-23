import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GaugeLines0PercentRegular } from './GaugeLines0PercentRegular.js';
import { GaugeLines0PercentRegularDuotone } from './GaugeLines0PercentRegularDuotone.js';
import { GaugeLines0PercentBold } from './GaugeLines0PercentBold.js';
import { GaugeLines0PercentBoldDuotone } from './GaugeLines0PercentBoldDuotone.js';
import { GaugeLines0PercentFill } from './GaugeLines0PercentFill.js';
import { GaugeLines0PercentFillDuotone } from './GaugeLines0PercentFillDuotone.js';

export interface GaugeLines0PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines0Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines0PercentRegular } from 'stera-icons/icons/GaugeLines0PercentRegular';
 */
const GaugeLines0Percent = memo(forwardRef<SVGSVGElement, GaugeLines0PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines0PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines0PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines0PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines0PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines0PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines0PercentRegular ref={ref} {...rest} />;
}));

GaugeLines0Percent.displayName = 'GaugeLines0Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines0Percent, GaugeLines0Percent as GaugeLines0PercentIcon, GaugeLines0Percent as SiGaugeLines0Percent };
export default GaugeLines0Percent;
