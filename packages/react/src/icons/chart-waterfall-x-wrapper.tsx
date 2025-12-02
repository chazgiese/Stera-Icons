import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartWaterfallXIcon as RegularChartWaterfallXIcon } from './chart-waterfall-x';
import { ChartWaterfallXIconBold } from './chart-waterfall-x-bold';
import { ChartWaterfallXIconFilled } from './chart-waterfall-x-filled';
import { ChartWaterfallXIconFilltone } from './chart-waterfall-x-filltone';
import { ChartWaterfallXIconLinetone } from './chart-waterfall-x-linetone';

export interface ChartWaterfallXIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartWaterfallXIcon = memo(forwardRef<SVGSVGElement, ChartWaterfallXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartWaterfallXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartWaterfallXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartWaterfallXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartWaterfallXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartWaterfallXIcon ref={ref} {...props} />;
  }
}));

ChartWaterfallXIcon.displayName = 'ChartWaterfallXIcon';

export { ChartWaterfallXIcon };
