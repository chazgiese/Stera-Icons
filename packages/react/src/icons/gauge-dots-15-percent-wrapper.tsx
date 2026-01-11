import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots15PercentIcon as RegularGaugeDots15PercentIcon } from './gauge-dots-15-percent';
import { GaugeDots15PercentIconDuotone as GaugeDots15PercentIconDuotone } from './gauge-dots-15-percent-duotone';
import { GaugeDots15PercentIconBold as GaugeDots15PercentIconBold } from './gauge-dots-15-percent-bold';
import { GaugeDots15PercentIconBoldDuotone as GaugeDots15PercentIconBoldDuotone } from './gauge-dots-15-percent-bold-duotone';
import { GaugeDots15PercentIconFill as GaugeDots15PercentIconFill } from './gauge-dots-15-percent-fill';
import { GaugeDots15PercentIconFillDuotone as GaugeDots15PercentIconFillDuotone } from './gauge-dots-15-percent-fill-duotone';

export interface GaugeDots15PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots15PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots15PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots15PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots15PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots15PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots15PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots15PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots15PercentIcon ref={ref} {...props} />;
}));

GaugeDots15PercentIcon.displayName = 'GaugeDots15PercentIcon';

export { GaugeDots15PercentIcon };
