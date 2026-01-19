import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines100PercentRegular } from './GaugeLines100PercentRegular';
import { GaugeLines100PercentRegularDuotone } from './GaugeLines100PercentRegularDuotone';
import { GaugeLines100PercentBold } from './GaugeLines100PercentBold';
import { GaugeLines100PercentBoldDuotone } from './GaugeLines100PercentBoldDuotone';
import { GaugeLines100PercentFill } from './GaugeLines100PercentFill';
import { GaugeLines100PercentFillDuotone } from './GaugeLines100PercentFillDuotone';

export interface GaugeLines100PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines100Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines100PercentRegular } from 'stera-icons/icons/GaugeLines100PercentRegular';
 */
const GaugeLines100Percent = memo(forwardRef<SVGSVGElement, GaugeLines100PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines100PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines100PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines100PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines100PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines100PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines100PercentRegular ref={ref} {...rest} />;
}));

GaugeLines100Percent.displayName = 'GaugeLines100Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines100Percent, GaugeLines100Percent as GaugeLines100PercentIcon, GaugeLines100Percent as SiGaugeLines100Percent };
