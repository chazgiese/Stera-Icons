import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CandleChartIcon as CandleChartIconRegular } from './candle-chart';
import { CandleChartIconBold } from './candle-chart-bold';
import { CandleChartIconFilled } from './candle-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CandleChartIconRegular ref={ref} {...props} />;
  }
}));

CandleChartIcon.displayName = 'CandleChartIcon';

export { CandleChartIcon };
