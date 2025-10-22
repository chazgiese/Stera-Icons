import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaterfallChartIcon as RegularWaterfallChartIcon } from './waterfall-chart';
import { WaterfallChartIconBold } from './waterfall-chart-bold';
import { WaterfallChartIconFilled } from './waterfall-chart-filled';
import { WaterfallChartIconFilltone } from './waterfall-chart-filltone';
import { WaterfallChartIconLinetone } from './waterfall-chart-linetone';

export interface WaterfallChartIconProps extends IconProps {
  variant?: IconVariant;
}

const WaterfallChartIcon = memo(forwardRef<SVGSVGElement, WaterfallChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaterfallChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaterfallChartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaterfallChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaterfallChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWaterfallChartIcon ref={ref} {...props} />;
  }
}));

WaterfallChartIcon.displayName = 'WaterfallChartIcon';

export { WaterfallChartIcon };
