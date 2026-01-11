import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines100PercentIcon as RegularGaugeLines100PercentIcon } from './gauge-lines-100-percent';
import { GaugeLines100PercentIconDuotone as GaugeLines100PercentIconDuotone } from './gauge-lines-100-percent-duotone';
import { GaugeLines100PercentIconBold as GaugeLines100PercentIconBold } from './gauge-lines-100-percent-bold';
import { GaugeLines100PercentIconBoldDuotone as GaugeLines100PercentIconBoldDuotone } from './gauge-lines-100-percent-bold-duotone';
import { GaugeLines100PercentIconFill as GaugeLines100PercentIconFill } from './gauge-lines-100-percent-fill';
import { GaugeLines100PercentIconFillDuotone as GaugeLines100PercentIconFillDuotone } from './gauge-lines-100-percent-fill-duotone';

export interface GaugeLines100PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines100PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines100PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines100PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines100PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines100PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines100PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines100PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines100PercentIcon ref={ref} {...props} />;
}));

GaugeLines100PercentIcon.displayName = 'GaugeLines100PercentIcon';

export { GaugeLines100PercentIcon };
