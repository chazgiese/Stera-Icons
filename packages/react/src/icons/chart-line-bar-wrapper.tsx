import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineBarIcon as RegularChartLineBarIcon } from './chart-line-bar';
import { ChartLineBarIconDuotone as ChartLineBarIconDuotone } from './chart-line-bar-duotone';
import { ChartLineBarIconBold as ChartLineBarIconBold } from './chart-line-bar-bold';
import { ChartLineBarIconBoldDuotone as ChartLineBarIconBoldDuotone } from './chart-line-bar-bold-duotone';
import { ChartLineBarIconFill as ChartLineBarIconFill } from './chart-line-bar-fill';
import { ChartLineBarIconFillDuotone as ChartLineBarIconFillDuotone } from './chart-line-bar-fill-duotone';

export interface ChartLineBarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartLineBarIcon = memo(forwardRef<SVGSVGElement, ChartLineBarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineBarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartLineBarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartLineBarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartLineBarIconFill ref={ref} {...props} />;
  if (duotone) return <ChartLineBarIconDuotone ref={ref} {...props} />;
  return <RegularChartLineBarIcon ref={ref} {...props} />;
}));

ChartLineBarIcon.displayName = 'ChartLineBarIcon';

export { ChartLineBarIcon };
