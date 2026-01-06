import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartDonutIcon as RegularChartDonutIcon } from './chart-donut';
import { ChartDonutIconDuotone as ChartDonutIconDuotone } from './chart-donut-duotone';
import { ChartDonutIconBold as ChartDonutIconBold } from './chart-donut-bold';
import { ChartDonutIconBoldDuotone as ChartDonutIconBoldDuotone } from './chart-donut-bold-duotone';
import { ChartDonutIconFill as ChartDonutIconFill } from './chart-donut-fill';
import { ChartDonutIconFillDuotone as ChartDonutIconFillDuotone } from './chart-donut-fill-duotone';

export interface ChartDonutIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartDonutIcon = memo(forwardRef<SVGSVGElement, ChartDonutIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartDonutIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartDonutIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartDonutIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartDonutIconFill ref={ref} {...props} />;
  if (duotone) return <ChartDonutIconDuotone ref={ref} {...props} />;
  return <RegularChartDonutIcon ref={ref} {...props} />;
}));

ChartDonutIcon.displayName = 'ChartDonutIcon';

export { ChartDonutIcon };
