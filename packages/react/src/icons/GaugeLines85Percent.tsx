import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines85PercentRegular } from './GaugeLines85PercentRegular';
import { GaugeLines85PercentRegularDuotone } from './GaugeLines85PercentRegularDuotone';
import { GaugeLines85PercentBold } from './GaugeLines85PercentBold';
import { GaugeLines85PercentBoldDuotone } from './GaugeLines85PercentBoldDuotone';
import { GaugeLines85PercentFill } from './GaugeLines85PercentFill';
import { GaugeLines85PercentFillDuotone } from './GaugeLines85PercentFillDuotone';

export interface GaugeLines85PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines85Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines85PercentRegular } from 'stera-icons/GaugeLines85PercentRegular';
 */
const GaugeLines85Percent = memo(forwardRef<SVGSVGElement, GaugeLines85PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines85PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines85PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines85PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines85PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines85PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines85PercentRegular ref={ref} {...rest} />;
}));

GaugeLines85Percent.displayName = 'GaugeLines85Percent';

// Triple export pattern (lucide-react style)
export { GaugeLines85Percent, GaugeLines85Percent as GaugeLines85PercentIcon, GaugeLines85Percent as SiGaugeLines85Percent };
