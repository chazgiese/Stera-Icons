import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartWaterfallIcon as RegularChartWaterfallIcon } from './chart-waterfall';
import { ChartWaterfallIconBold } from './chart-waterfall-bold';
import { ChartWaterfallIconFilled } from './chart-waterfall-filled';
import { ChartWaterfallIconFilltone } from './chart-waterfall-filltone';
import { ChartWaterfallIconLinetone } from './chart-waterfall-linetone';

export interface ChartWaterfallIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartWaterfallIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartWaterfallIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartWaterfallIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartWaterfallIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartWaterfallIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartWaterfallIcon ref={ref} {...props} />;
  }
}));

ChartWaterfallIcon.displayName = 'ChartWaterfallIcon';

export { ChartWaterfallIcon };
