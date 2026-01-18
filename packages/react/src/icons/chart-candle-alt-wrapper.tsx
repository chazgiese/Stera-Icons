import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartCandleAltIcon as RegularChartCandleAltIcon } from './chart-candle-alt';
import { ChartCandleAltIconDuotone as ChartCandleAltIconDuotone } from './chart-candle-alt-duotone';
import { ChartCandleAltIconBold as ChartCandleAltIconBold } from './chart-candle-alt-bold';
import { ChartCandleAltIconBoldDuotone as ChartCandleAltIconBoldDuotone } from './chart-candle-alt-bold-duotone';
import { ChartCandleAltIconFill as ChartCandleAltIconFill } from './chart-candle-alt-fill';
import { ChartCandleAltIconFillDuotone as ChartCandleAltIconFillDuotone } from './chart-candle-alt-fill-duotone';

export interface ChartCandleAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartCandleAltIcon = memo(forwardRef<SVGSVGElement, ChartCandleAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartCandleAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartCandleAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartCandleAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartCandleAltIconFill ref={ref} {...props} />;
  if (duotone) return <ChartCandleAltIconDuotone ref={ref} {...props} />;
  return <RegularChartCandleAltIcon ref={ref} {...props} />;
}));

ChartCandleAltIcon.displayName = 'ChartCandleAltIcon';

export { ChartCandleAltIcon };
