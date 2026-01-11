import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines85PercentIcon as RegularGaugeLines85PercentIcon } from './gauge-lines-85-percent';
import { GaugeLines85PercentIconDuotone as GaugeLines85PercentIconDuotone } from './gauge-lines-85-percent-duotone';
import { GaugeLines85PercentIconBold as GaugeLines85PercentIconBold } from './gauge-lines-85-percent-bold';
import { GaugeLines85PercentIconBoldDuotone as GaugeLines85PercentIconBoldDuotone } from './gauge-lines-85-percent-bold-duotone';
import { GaugeLines85PercentIconFill as GaugeLines85PercentIconFill } from './gauge-lines-85-percent-fill';
import { GaugeLines85PercentIconFillDuotone as GaugeLines85PercentIconFillDuotone } from './gauge-lines-85-percent-fill-duotone';

export interface GaugeLines85PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines85PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines85PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines85PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines85PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines85PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines85PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines85PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines85PercentIcon ref={ref} {...props} />;
}));

GaugeLines85PercentIcon.displayName = 'GaugeLines85PercentIcon';

export { GaugeLines85PercentIcon };
