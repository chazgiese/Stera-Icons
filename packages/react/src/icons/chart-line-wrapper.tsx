import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineIcon as RegularChartLineIcon } from './chart-line';
import { ChartLineIconDuotone as ChartLineIconDuotone } from './chart-line-duotone';
import { ChartLineIconBold as ChartLineIconBold } from './chart-line-bold';
import { ChartLineIconBoldDuotone as ChartLineIconBoldDuotone } from './chart-line-bold-duotone';
import { ChartLineIconFill as ChartLineIconFill } from './chart-line-fill';
import { ChartLineIconFillDuotone as ChartLineIconFillDuotone } from './chart-line-fill-duotone';

export interface ChartLineIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartLineIcon = memo(forwardRef<SVGSVGElement, ChartLineIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartLineIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartLineIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartLineIconFill ref={ref} {...props} />;
  if (duotone) return <ChartLineIconDuotone ref={ref} {...props} />;
  return <RegularChartLineIcon ref={ref} {...props} />;
}));

ChartLineIcon.displayName = 'ChartLineIcon';

export { ChartLineIcon };
