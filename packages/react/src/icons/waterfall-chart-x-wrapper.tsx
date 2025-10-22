import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaterfallChartXIcon as RegularWaterfallChartXIcon } from './waterfall-chart-x';
import { WaterfallChartXIconBold } from './waterfall-chart-x-bold';
import { WaterfallChartXIconFilled } from './waterfall-chart-x-filled';
import { WaterfallChartXIconFilltone } from './waterfall-chart-x-filltone';
import { WaterfallChartXIconLinetone } from './waterfall-chart-x-linetone';

export interface WaterfallChartXIconProps extends IconProps {
  variant?: IconVariant;
}

const WaterfallChartXIcon = memo(forwardRef<SVGSVGElement, WaterfallChartXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaterfallChartXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaterfallChartXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaterfallChartXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaterfallChartXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWaterfallChartXIcon ref={ref} {...props} />;
  }
}));

WaterfallChartXIcon.displayName = 'WaterfallChartXIcon';

export { WaterfallChartXIcon };
