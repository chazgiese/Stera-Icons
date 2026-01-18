import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines33PercentRegular } from './GaugeLines33PercentRegular';
import { GaugeLines33PercentRegularDuotone } from './GaugeLines33PercentRegularDuotone';
import { GaugeLines33PercentBold } from './GaugeLines33PercentBold';
import { GaugeLines33PercentBoldDuotone } from './GaugeLines33PercentBoldDuotone';
import { GaugeLines33PercentFill } from './GaugeLines33PercentFill';
import { GaugeLines33PercentFillDuotone } from './GaugeLines33PercentFillDuotone';

export interface GaugeLines33PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeLines33Percent with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeLines33PercentRegular } from 'stera-icons/GaugeLines33PercentRegular';
 */
const GaugeLines33Percent = memo(forwardRef<SVGSVGElement, GaugeLines33PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines33PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeLines33PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeLines33PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeLines33PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeLines33PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeLines33PercentRegular ref={ref} {...rest} />;
}));

GaugeLines33Percent.displayName = 'GaugeLines33Percent';

export { GaugeLines33Percent };
