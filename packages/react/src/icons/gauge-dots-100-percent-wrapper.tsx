import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots100PercentIcon as RegularGaugeDots100PercentIcon } from './gauge-dots-100-percent';
import { GaugeDots100PercentIconDuotone as GaugeDots100PercentIconDuotone } from './gauge-dots-100-percent-duotone';
import { GaugeDots100PercentIconBold as GaugeDots100PercentIconBold } from './gauge-dots-100-percent-bold';
import { GaugeDots100PercentIconBoldDuotone as GaugeDots100PercentIconBoldDuotone } from './gauge-dots-100-percent-bold-duotone';
import { GaugeDots100PercentIconFill as GaugeDots100PercentIconFill } from './gauge-dots-100-percent-fill';
import { GaugeDots100PercentIconFillDuotone as GaugeDots100PercentIconFillDuotone } from './gauge-dots-100-percent-fill-duotone';

export interface GaugeDots100PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots100PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots100PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots100PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots100PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots100PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots100PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots100PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots100PercentIcon ref={ref} {...props} />;
}));

GaugeDots100PercentIcon.displayName = 'GaugeDots100PercentIcon';

export { GaugeDots100PercentIcon };
