import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots33PercentIcon as RegularGaugeDots33PercentIcon } from './gauge-dots-33-percent';
import { GaugeDots33PercentIconDuotone as GaugeDots33PercentIconDuotone } from './gauge-dots-33-percent-duotone';
import { GaugeDots33PercentIconBold as GaugeDots33PercentIconBold } from './gauge-dots-33-percent-bold';
import { GaugeDots33PercentIconBoldDuotone as GaugeDots33PercentIconBoldDuotone } from './gauge-dots-33-percent-bold-duotone';
import { GaugeDots33PercentIconFill as GaugeDots33PercentIconFill } from './gauge-dots-33-percent-fill';
import { GaugeDots33PercentIconFillDuotone as GaugeDots33PercentIconFillDuotone } from './gauge-dots-33-percent-fill-duotone';

export interface GaugeDots33PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots33PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots33PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots33PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots33PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots33PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots33PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots33PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots33PercentIcon ref={ref} {...props} />;
}));

GaugeDots33PercentIcon.displayName = 'GaugeDots33PercentIcon';

export { GaugeDots33PercentIcon };
