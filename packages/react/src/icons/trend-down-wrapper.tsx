import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrendDownIcon as RegularTrendDownIcon } from './trend-down';
import { TrendDownIconDuotone as TrendDownIconDuotone } from './trend-down-duotone';
import { TrendDownIconBold as TrendDownIconBold } from './trend-down-bold';
import { TrendDownIconBoldDuotone as TrendDownIconBoldDuotone } from './trend-down-bold-duotone';
import { TrendDownIconFill as TrendDownIconFill } from './trend-down-fill';
import { TrendDownIconFillDuotone as TrendDownIconFillDuotone } from './trend-down-fill-duotone';

export interface TrendDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TrendDownIcon = memo(forwardRef<SVGSVGElement, TrendDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrendDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TrendDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TrendDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TrendDownIconFill ref={ref} {...props} />;
  if (duotone) return <TrendDownIconDuotone ref={ref} {...props} />;
  return <RegularTrendDownIcon ref={ref} {...props} />;
}));

TrendDownIcon.displayName = 'TrendDownIcon';

export { TrendDownIcon };
