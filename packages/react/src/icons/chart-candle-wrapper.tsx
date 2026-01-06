import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartCandleIcon as RegularChartCandleIcon } from './chart-candle';
import { ChartCandleIconDuotone as ChartCandleIconDuotone } from './chart-candle-duotone';
import { ChartCandleIconBold as ChartCandleIconBold } from './chart-candle-bold';
import { ChartCandleIconBoldDuotone as ChartCandleIconBoldDuotone } from './chart-candle-bold-duotone';
import { ChartCandleIconFill as ChartCandleIconFill } from './chart-candle-fill';
import { ChartCandleIconFillDuotone as ChartCandleIconFillDuotone } from './chart-candle-fill-duotone';

export interface ChartCandleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartCandleIcon = memo(forwardRef<SVGSVGElement, ChartCandleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartCandleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartCandleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartCandleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartCandleIconFill ref={ref} {...props} />;
  if (duotone) return <ChartCandleIconDuotone ref={ref} {...props} />;
  return <RegularChartCandleIcon ref={ref} {...props} />;
}));

ChartCandleIcon.displayName = 'ChartCandleIcon';

export { ChartCandleIcon };
