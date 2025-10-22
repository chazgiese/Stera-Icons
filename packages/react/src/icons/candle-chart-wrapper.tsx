import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CandleChartIcon as RegularCandleChartIcon } from './candle-chart';
import { CandleChartIconBold } from './candle-chart-bold';
import { CandleChartIconFilled } from './candle-chart-filled';
import { CandleChartIconFilltone } from './candle-chart-filltone';
import { CandleChartIconLinetone } from './candle-chart-linetone';

export interface CandleChartIconProps extends IconProps {
  variant?: IconVariant;
}

const CandleChartIcon = memo(forwardRef<SVGSVGElement, CandleChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CandleChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CandleChartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CandleChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CandleChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCandleChartIcon ref={ref} {...props} />;
  }
}));

CandleChartIcon.displayName = 'CandleChartIcon';

export { CandleChartIcon };
