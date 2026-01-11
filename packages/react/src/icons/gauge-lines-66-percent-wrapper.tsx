import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeLines66PercentIcon as RegularGaugeLines66PercentIcon } from './gauge-lines-66-percent';
import { GaugeLines66PercentIconDuotone as GaugeLines66PercentIconDuotone } from './gauge-lines-66-percent-duotone';
import { GaugeLines66PercentIconBold as GaugeLines66PercentIconBold } from './gauge-lines-66-percent-bold';
import { GaugeLines66PercentIconBoldDuotone as GaugeLines66PercentIconBoldDuotone } from './gauge-lines-66-percent-bold-duotone';
import { GaugeLines66PercentIconFill as GaugeLines66PercentIconFill } from './gauge-lines-66-percent-fill';
import { GaugeLines66PercentIconFillDuotone as GaugeLines66PercentIconFillDuotone } from './gauge-lines-66-percent-fill-duotone';

export interface GaugeLines66PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeLines66PercentIcon = memo(forwardRef<SVGSVGElement, GaugeLines66PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeLines66PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeLines66PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeLines66PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeLines66PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeLines66PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeLines66PercentIcon ref={ref} {...props} />;
}));

GaugeLines66PercentIcon.displayName = 'GaugeLines66PercentIcon';

export { GaugeLines66PercentIcon };
