import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots0PercentIcon as RegularGaugeDots0PercentIcon } from './gauge-dots-0-percent';
import { GaugeDots0PercentIconDuotone as GaugeDots0PercentIconDuotone } from './gauge-dots-0-percent-duotone';
import { GaugeDots0PercentIconBold as GaugeDots0PercentIconBold } from './gauge-dots-0-percent-bold';
import { GaugeDots0PercentIconBoldDuotone as GaugeDots0PercentIconBoldDuotone } from './gauge-dots-0-percent-bold-duotone';
import { GaugeDots0PercentIconFill as GaugeDots0PercentIconFill } from './gauge-dots-0-percent-fill';
import { GaugeDots0PercentIconFillDuotone as GaugeDots0PercentIconFillDuotone } from './gauge-dots-0-percent-fill-duotone';

export interface GaugeDots0PercentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GaugeDots0PercentIcon = memo(forwardRef<SVGSVGElement, GaugeDots0PercentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots0PercentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GaugeDots0PercentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GaugeDots0PercentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GaugeDots0PercentIconFill ref={ref} {...props} />;
  if (duotone) return <GaugeDots0PercentIconDuotone ref={ref} {...props} />;
  return <RegularGaugeDots0PercentIcon ref={ref} {...props} />;
}));

GaugeDots0PercentIcon.displayName = 'GaugeDots0PercentIcon';

export { GaugeDots0PercentIcon };
