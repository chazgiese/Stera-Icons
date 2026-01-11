import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines0PercentIcon as RegularGaugeLines0PercentIcon } from './gauge-lines-0-percent';
import { GaugeLines0PercentIconDuotone as GaugeLines0PercentIconDuotone } from './gauge-lines-0-percent-duotone';
import { GaugeLines0PercentIconBold as GaugeLines0PercentIconBold } from './gauge-lines-0-percent-bold';
import { GaugeLines0PercentIconBoldDuotone as GaugeLines0PercentIconBoldDuotone } from './gauge-lines-0-percent-bold-duotone';
import { GaugeLines0PercentIconFill as GaugeLines0PercentIconFill } from './gauge-lines-0-percent-fill';
import { GaugeLines0PercentIconFillDuotone as GaugeLines0PercentIconFillDuotone } from './gauge-lines-0-percent-fill-duotone';

export interface GaugeLines0PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines0PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines0PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines0PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines0PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines0PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines0PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines0PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines0PercentIcon ref={ref} {...props} />;
}));

GaugeLines0PercentIcon.displayName = 'GaugeLines0PercentIcon';

export { GaugeLines0PercentIcon };
