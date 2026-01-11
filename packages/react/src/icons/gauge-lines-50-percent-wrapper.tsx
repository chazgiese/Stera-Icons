import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines50PercentIcon as RegularGaugeLines50PercentIcon } from './gauge-lines-50-percent';
import { GaugeLines50PercentIconDuotone as GaugeLines50PercentIconDuotone } from './gauge-lines-50-percent-duotone';
import { GaugeLines50PercentIconBold as GaugeLines50PercentIconBold } from './gauge-lines-50-percent-bold';
import { GaugeLines50PercentIconBoldDuotone as GaugeLines50PercentIconBoldDuotone } from './gauge-lines-50-percent-bold-duotone';
import { GaugeLines50PercentIconFill as GaugeLines50PercentIconFill } from './gauge-lines-50-percent-fill';
import { GaugeLines50PercentIconFillDuotone as GaugeLines50PercentIconFillDuotone } from './gauge-lines-50-percent-fill-duotone';

export interface GaugeLines50PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines50PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines50PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines50PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines50PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines50PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines50PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines50PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines50PercentIcon ref={ref} {...props} />;
}));

GaugeLines50PercentIcon.displayName = 'GaugeLines50PercentIcon';

export { GaugeLines50PercentIcon };
