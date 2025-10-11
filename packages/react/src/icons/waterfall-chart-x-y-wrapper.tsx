import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaterfallChartXYIcon as WaterfallChartXYIconRegular } from './waterfall-chart-x-y';
import { WaterfallChartXYIconBold } from './waterfall-chart-x-y-bold';
import { WaterfallChartXYIconFilled } from './waterfall-chart-x-y-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaterfallChartXYIconRegular ref={ref} {...props} />;
  }
}));

WaterfallChartXYIcon.displayName = 'WaterfallChartXYIcon';

export { WaterfallChartXYIcon };
