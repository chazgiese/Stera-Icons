import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallXIcon as RegularChartWaterfallXIcon } from './chart-waterfall-x';
import { ChartWaterfallXIconDuotone as ChartWaterfallXIconDuotone } from './chart-waterfall-x-duotone';
import { ChartWaterfallXIconBold as ChartWaterfallXIconBold } from './chart-waterfall-x-bold';
import { ChartWaterfallXIconBoldDuotone as ChartWaterfallXIconBoldDuotone } from './chart-waterfall-x-bold-duotone';
import { ChartWaterfallXIconFill as ChartWaterfallXIconFill } from './chart-waterfall-x-fill';
import { ChartWaterfallXIconFillDuotone as ChartWaterfallXIconFillDuotone } from './chart-waterfall-x-fill-duotone';

export interface ChartWaterfallXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartWaterfallXIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartWaterfallXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartWaterfallXIconFill ref={ref} {...props} />;
  if (duotone) return <ChartWaterfallXIconDuotone ref={ref} {...props} />;
  return <RegularChartWaterfallXIcon ref={ref} {...props} />;
}));

ChartWaterfallXIcon.displayName = 'ChartWaterfallXIcon';

export { ChartWaterfallXIcon };
