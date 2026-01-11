import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines15PercentIcon as RegularGaugeLines15PercentIcon } from './gauge-lines-15-percent';
import { GaugeLines15PercentIconDuotone as GaugeLines15PercentIconDuotone } from './gauge-lines-15-percent-duotone';
import { GaugeLines15PercentIconBold as GaugeLines15PercentIconBold } from './gauge-lines-15-percent-bold';
import { GaugeLines15PercentIconBoldDuotone as GaugeLines15PercentIconBoldDuotone } from './gauge-lines-15-percent-bold-duotone';
import { GaugeLines15PercentIconFill as GaugeLines15PercentIconFill } from './gauge-lines-15-percent-fill';
import { GaugeLines15PercentIconFillDuotone as GaugeLines15PercentIconFillDuotone } from './gauge-lines-15-percent-fill-duotone';

export interface GaugeLines15PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines15PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines15PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines15PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines15PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines15PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines15PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines15PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines15PercentIcon ref={ref} {...props} />;
}));

GaugeLines15PercentIcon.displayName = 'GaugeLines15PercentIcon';

export { GaugeLines15PercentIcon };
