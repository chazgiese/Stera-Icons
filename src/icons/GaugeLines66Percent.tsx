import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines66PercentRegular } from './GaugeLines66PercentRegular';
import { GaugeLines66PercentRegularDuotone } from './GaugeLines66PercentRegularDuotone';
import { GaugeLines66PercentBold } from './GaugeLines66PercentBold';
import { GaugeLines66PercentBoldDuotone } from './GaugeLines66PercentBoldDuotone';
import { GaugeLines66PercentFill } from './GaugeLines66PercentFill';
import { GaugeLines66PercentFillDuotone } from './GaugeLines66PercentFillDuotone';

export interface GaugeLines66PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines66Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines66PercentRegular } from 'stera-icons/icons/GaugeLines66PercentRegular';
 */
const GaugeLines66Percent = memo(forwardRef<SVGSVGElement, GaugeLines66PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines66PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines66PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines66PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines66PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines66PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines66PercentRegular ref={ref} {...rest} />;
}));

GaugeLines66Percent.displayName = 'GaugeLines66Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines66Percent, GaugeLines66Percent as GaugeLines66PercentIcon, GaugeLines66Percent as SiGaugeLines66Percent };
export default GaugeLines66Percent;
