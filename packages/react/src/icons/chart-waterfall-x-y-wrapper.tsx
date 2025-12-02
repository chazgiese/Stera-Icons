import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartWaterfallXYIcon as RegularChartWaterfallXYIcon } from './chart-waterfall-x-y';
import { ChartWaterfallXYIconBold } from './chart-waterfall-x-y-bold';
import { ChartWaterfallXYIconFilled } from './chart-waterfall-x-y-filled';
import { ChartWaterfallXYIconFilltone } from './chart-waterfall-x-y-filltone';
import { ChartWaterfallXYIconLinetone } from './chart-waterfall-x-y-linetone';

export interface ChartWaterfallXYIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartWaterfallXYIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartWaterfallXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartWaterfallXYIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartWaterfallXYIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartWaterfallXYIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartWaterfallXYIcon ref={ref} {...props} />;
  }
}));

ChartWaterfallXYIcon.displayName = 'ChartWaterfallXYIcon';

export { ChartWaterfallXYIcon };
