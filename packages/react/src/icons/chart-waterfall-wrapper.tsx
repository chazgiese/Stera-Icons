import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallIcon as RegularChartWaterfallIcon } from './chart-waterfall';
import { ChartWaterfallIconDuotone as ChartWaterfallIconDuotone } from './chart-waterfall-duotone';
import { ChartWaterfallIconBold as ChartWaterfallIconBold } from './chart-waterfall-bold';
import { ChartWaterfallIconBoldDuotone as ChartWaterfallIconBoldDuotone } from './chart-waterfall-bold-duotone';
import { ChartWaterfallIconFill as ChartWaterfallIconFill } from './chart-waterfall-fill';
import { ChartWaterfallIconFillDuotone as ChartWaterfallIconFillDuotone } from './chart-waterfall-fill-duotone';

export interface ChartWaterfallIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartWaterfallIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartWaterfallIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartWaterfallIconFill ref={ref} {...props} />;
  if (duotone) return <ChartWaterfallIconDuotone ref={ref} {...props} />;
  return <RegularChartWaterfallIcon ref={ref} {...props} />;
}));

ChartWaterfallIcon.displayName = 'ChartWaterfallIcon';

export { ChartWaterfallIcon };
