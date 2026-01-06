import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallXYIcon as RegularChartWaterfallXYIcon } from './chart-waterfall-x-y';
import { ChartWaterfallXYIconDuotone as ChartWaterfallXYIconDuotone } from './chart-waterfall-x-y-duotone';
import { ChartWaterfallXYIconBold as ChartWaterfallXYIconBold } from './chart-waterfall-x-y-bold';
import { ChartWaterfallXYIconBoldDuotone as ChartWaterfallXYIconBoldDuotone } from './chart-waterfall-x-y-bold-duotone';
import { ChartWaterfallXYIconFill as ChartWaterfallXYIconFill } from './chart-waterfall-x-y-fill';
import { ChartWaterfallXYIconFillDuotone as ChartWaterfallXYIconFillDuotone } from './chart-waterfall-x-y-fill-duotone';

export interface ChartWaterfallXYIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartWaterfallXYIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallXYIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallXYIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartWaterfallXYIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallXYIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartWaterfallXYIconFill ref={ref} {...props} />;
  if (duotone) return <ChartWaterfallXYIconDuotone ref={ref} {...props} />;
  return <RegularChartWaterfallXYIcon ref={ref} {...props} />;
}));

ChartWaterfallXYIcon.displayName = 'ChartWaterfallXYIcon';

export { ChartWaterfallXYIcon };
