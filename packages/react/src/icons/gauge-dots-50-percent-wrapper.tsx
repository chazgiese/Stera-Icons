import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots50PercentIcon as RegularGaugeDots50PercentIcon } from './gauge-dots-50-percent';
import { GaugeDots50PercentIconDuotone as GaugeDots50PercentIconDuotone } from './gauge-dots-50-percent-duotone';
import { GaugeDots50PercentIconBold as GaugeDots50PercentIconBold } from './gauge-dots-50-percent-bold';
import { GaugeDots50PercentIconBoldDuotone as GaugeDots50PercentIconBoldDuotone } from './gauge-dots-50-percent-bold-duotone';
import { GaugeDots50PercentIconFill as GaugeDots50PercentIconFill } from './gauge-dots-50-percent-fill';
import { GaugeDots50PercentIconFillDuotone as GaugeDots50PercentIconFillDuotone } from './gauge-dots-50-percent-fill-duotone';

export interface GaugeDots50PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots50PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots50PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots50PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots50PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots50PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots50PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots50PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots50PercentIcon ref={ref} {...props} />;
}));

GaugeDots50PercentIcon.displayName = 'GaugeDots50PercentIcon';

export { GaugeDots50PercentIcon };
