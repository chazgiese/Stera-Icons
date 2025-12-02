import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartCandleIcon as RegularChartCandleIcon } from './chart-candle';
import { ChartCandleIconBold } from './chart-candle-bold';
import { ChartCandleIconFilled } from './chart-candle-filled';
import { ChartCandleIconFilltone } from './chart-candle-filltone';
import { ChartCandleIconLinetone } from './chart-candle-linetone';

export interface ChartCandleIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartCandleIcon = memo(forwardRef<SVGSVGElement, ChartCandleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartCandleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartCandleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartCandleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartCandleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartCandleIcon ref={ref} {...props} />;
  }
}));

ChartCandleIcon.displayName = 'ChartCandleIcon';

export { ChartCandleIcon };
