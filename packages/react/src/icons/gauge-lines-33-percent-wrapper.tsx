import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines33PercentIcon as RegularGaugeLines33PercentIcon } from './gauge-lines-33-percent';
import { GaugeLines33PercentIconDuotone as GaugeLines33PercentIconDuotone } from './gauge-lines-33-percent-duotone';
import { GaugeLines33PercentIconBold as GaugeLines33PercentIconBold } from './gauge-lines-33-percent-bold';
import { GaugeLines33PercentIconBoldDuotone as GaugeLines33PercentIconBoldDuotone } from './gauge-lines-33-percent-bold-duotone';
import { GaugeLines33PercentIconFill as GaugeLines33PercentIconFill } from './gauge-lines-33-percent-fill';
import { GaugeLines33PercentIconFillDuotone as GaugeLines33PercentIconFillDuotone } from './gauge-lines-33-percent-fill-duotone';

export interface GaugeLines33PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines33PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines33PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines33PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines33PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines33PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines33PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines33PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines33PercentIcon ref={ref} {...props} />;
}));

GaugeLines33PercentIcon.displayName = 'GaugeLines33PercentIcon';

export { GaugeLines33PercentIcon };
