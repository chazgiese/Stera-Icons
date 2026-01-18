import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines50PercentRegular } from './GaugeLines50PercentRegular';
import { GaugeLines50PercentRegularDuotone } from './GaugeLines50PercentRegularDuotone';
import { GaugeLines50PercentBold } from './GaugeLines50PercentBold';
import { GaugeLines50PercentBoldDuotone } from './GaugeLines50PercentBoldDuotone';
import { GaugeLines50PercentFill } from './GaugeLines50PercentFill';
import { GaugeLines50PercentFillDuotone } from './GaugeLines50PercentFillDuotone';

export interface GaugeLines50PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines50Percent with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines50PercentRegular } from 'stera-icons/GaugeLines50PercentRegular';
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

export { GaugeLines50Percent };
