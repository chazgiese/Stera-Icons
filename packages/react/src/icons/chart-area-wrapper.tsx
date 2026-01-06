import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartAreaIcon as RegularChartAreaIcon } from './chart-area';
import { ChartAreaIconDuotone as ChartAreaIconDuotone } from './chart-area-duotone';
import { ChartAreaIconBold as ChartAreaIconBold } from './chart-area-bold';
import { ChartAreaIconBoldDuotone as ChartAreaIconBoldDuotone } from './chart-area-bold-duotone';
import { ChartAreaIconFill as ChartAreaIconFill } from './chart-area-fill';
import { ChartAreaIconFillDuotone as ChartAreaIconFillDuotone } from './chart-area-fill-duotone';

export interface ChartAreaIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartAreaIcon = memo(forwardRef<SVGSVGElement, ChartAreaIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartAreaIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartAreaIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartAreaIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartAreaIconFill ref={ref} {...props} />;
  if (duotone) return <ChartAreaIconDuotone ref={ref} {...props} />;
  return <RegularChartAreaIcon ref={ref} {...props} />;
}));

ChartAreaIcon.displayName = 'ChartAreaIcon';

export { ChartAreaIcon };
