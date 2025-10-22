import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaterfallChartXYIcon as RegularWaterfallChartXYIcon } from './waterfall-chart-x-y';
import { WaterfallChartXYIconBold } from './waterfall-chart-x-y-bold';
import { WaterfallChartXYIconFilled } from './waterfall-chart-x-y-filled';
import { WaterfallChartXYIconFilltone } from './waterfall-chart-x-y-filltone';
import { WaterfallChartXYIconLinetone } from './waterfall-chart-x-y-linetone';

export interface WaterfallChartXYIconProps extends IconProps {
  variant?: IconVariant;
}

const WaterfallChartXYIcon = memo(forwardRef<SVGSVGElement, WaterfallChartXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaterfallChartXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaterfallChartXYIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaterfallChartXYIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaterfallChartXYIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWaterfallChartXYIcon ref={ref} {...props} />;
  }
}));

WaterfallChartXYIcon.displayName = 'WaterfallChartXYIcon';

export { WaterfallChartXYIcon };
