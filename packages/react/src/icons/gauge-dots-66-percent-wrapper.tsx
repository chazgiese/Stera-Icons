import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots66PercentIcon as RegularGaugeDots66PercentIcon } from './gauge-dots-66-percent';
import { GaugeDots66PercentIconDuotone as GaugeDots66PercentIconDuotone } from './gauge-dots-66-percent-duotone';
import { GaugeDots66PercentIconBold as GaugeDots66PercentIconBold } from './gauge-dots-66-percent-bold';
import { GaugeDots66PercentIconBoldDuotone as GaugeDots66PercentIconBoldDuotone } from './gauge-dots-66-percent-bold-duotone';
import { GaugeDots66PercentIconFill as GaugeDots66PercentIconFill } from './gauge-dots-66-percent-fill';
import { GaugeDots66PercentIconFillDuotone as GaugeDots66PercentIconFillDuotone } from './gauge-dots-66-percent-fill-duotone';

export interface GaugeDots66PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots66PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots66PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots66PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots66PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots66PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots66PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots66PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots66PercentIcon ref={ref} {...props} />;
}));

GaugeDots66PercentIcon.displayName = 'GaugeDots66PercentIcon';

export { GaugeDots66PercentIcon };
