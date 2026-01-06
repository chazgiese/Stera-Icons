import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarIcon as RegularChartBarIcon } from './chart-bar';
import { ChartBarIconDuotone as ChartBarIconDuotone } from './chart-bar-duotone';
import { ChartBarIconBold as ChartBarIconBold } from './chart-bar-bold';
import { ChartBarIconBoldDuotone as ChartBarIconBoldDuotone } from './chart-bar-bold-duotone';
import { ChartBarIconFill as ChartBarIconFill } from './chart-bar-fill';
import { ChartBarIconFillDuotone as ChartBarIconFillDuotone } from './chart-bar-fill-duotone';

export interface ChartBarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarIcon = memo(forwardRef<SVGSVGElement, ChartBarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarIconDuotone ref={ref} {...props} />;
  return <RegularChartBarIcon ref={ref} {...props} />;
}));

ChartBarIcon.displayName = 'ChartBarIcon';

export { ChartBarIcon };
