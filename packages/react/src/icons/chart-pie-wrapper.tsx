import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartPieIcon as RegularChartPieIcon } from './chart-pie';
import { ChartPieIconDuotone as ChartPieIconDuotone } from './chart-pie-duotone';
import { ChartPieIconBold as ChartPieIconBold } from './chart-pie-bold';
import { ChartPieIconBoldDuotone as ChartPieIconBoldDuotone } from './chart-pie-bold-duotone';
import { ChartPieIconFill as ChartPieIconFill } from './chart-pie-fill';
import { ChartPieIconFillDuotone as ChartPieIconFillDuotone } from './chart-pie-fill-duotone';

export interface ChartPieIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartPieIcon = memo(forwardRef<SVGSVGElement, ChartPieIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPieIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartPieIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartPieIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartPieIconFill ref={ref} {...props} />;
  if (duotone) return <ChartPieIconDuotone ref={ref} {...props} />;
  return <RegularChartPieIcon ref={ref} {...props} />;
}));

ChartPieIcon.displayName = 'ChartPieIcon';

export { ChartPieIcon };
