import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartScatterIcon as RegularChartScatterIcon } from './chart-scatter';
import { ChartScatterIconDuotone as ChartScatterIconDuotone } from './chart-scatter-duotone';
import { ChartScatterIconBold as ChartScatterIconBold } from './chart-scatter-bold';
import { ChartScatterIconBoldDuotone as ChartScatterIconBoldDuotone } from './chart-scatter-bold-duotone';
import { ChartScatterIconFill as ChartScatterIconFill } from './chart-scatter-fill';
import { ChartScatterIconFillDuotone as ChartScatterIconFillDuotone } from './chart-scatter-fill-duotone';

export interface ChartScatterIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartScatterIcon = memo(forwardRef<SVGSVGElement, ChartScatterIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartScatterIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartScatterIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartScatterIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartScatterIconFill ref={ref} {...props} />;
  if (duotone) return <ChartScatterIconDuotone ref={ref} {...props} />;
  return <RegularChartScatterIcon ref={ref} {...props} />;
}));

ChartScatterIcon.displayName = 'ChartScatterIcon';

export { ChartScatterIcon };
