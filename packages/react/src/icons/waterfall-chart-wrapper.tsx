import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaterfallChartIcon as WaterfallChartIconRegular } from './waterfall-chart';
import { WaterfallChartIconBold } from './waterfall-chart-bold';
import { WaterfallChartIconFilled } from './waterfall-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaterfallChartIconRegular ref={ref} {...props} />;
  }
}));

WaterfallChartIcon.displayName = 'WaterfallChartIcon';

export { WaterfallChartIcon };
