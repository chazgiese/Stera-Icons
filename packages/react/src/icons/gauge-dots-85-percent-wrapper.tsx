import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots85PercentIcon as RegularGaugeDots85PercentIcon } from './gauge-dots-85-percent';
import { GaugeDots85PercentIconDuotone as GaugeDots85PercentIconDuotone } from './gauge-dots-85-percent-duotone';
import { GaugeDots85PercentIconBold as GaugeDots85PercentIconBold } from './gauge-dots-85-percent-bold';
import { GaugeDots85PercentIconBoldDuotone as GaugeDots85PercentIconBoldDuotone } from './gauge-dots-85-percent-bold-duotone';
import { GaugeDots85PercentIconFill as GaugeDots85PercentIconFill } from './gauge-dots-85-percent-fill';
import { GaugeDots85PercentIconFillDuotone as GaugeDots85PercentIconFillDuotone } from './gauge-dots-85-percent-fill-duotone';

export interface GaugeDots85PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots85PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots85PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots85PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots85PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots85PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots85PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots85PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots85PercentIcon ref={ref} {...props} />;
}));

GaugeDots85PercentIcon.displayName = 'GaugeDots85PercentIcon';

export { GaugeDots85PercentIcon };
