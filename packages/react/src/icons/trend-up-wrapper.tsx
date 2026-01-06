import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrendUpIcon as RegularTrendUpIcon } from './trend-up';
import { TrendUpIconDuotone as TrendUpIconDuotone } from './trend-up-duotone';
import { TrendUpIconBold as TrendUpIconBold } from './trend-up-bold';
import { TrendUpIconBoldDuotone as TrendUpIconBoldDuotone } from './trend-up-bold-duotone';
import { TrendUpIconFill as TrendUpIconFill } from './trend-up-fill';
import { TrendUpIconFillDuotone as TrendUpIconFillDuotone } from './trend-up-fill-duotone';

export interface TrendUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TrendUpIcon = memo(forwardRef<SVGSVGElement, TrendUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrendUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TrendUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TrendUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TrendUpIconFill ref={ref} {...props} />;
  if (duotone) return <TrendUpIconDuotone ref={ref} {...props} />;
  return <RegularTrendUpIcon ref={ref} {...props} />;
}));

TrendUpIcon.displayName = 'TrendUpIcon';

export { TrendUpIcon };
