import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaterfallChartXIcon as WaterfallChartXIconRegular } from './waterfall-chart-x';
import { WaterfallChartXIconBold } from './waterfall-chart-x-bold';
import { WaterfallChartXIconFilled } from './waterfall-chart-x-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaterfallChartXIconRegular ref={ref} {...props} />;
  }
}));

WaterfallChartXIcon.displayName = 'WaterfallChartXIcon';

export { WaterfallChartXIcon };
