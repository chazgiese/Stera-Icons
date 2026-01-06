import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowIcon as RegularChartBarRowIcon } from './chart-bar-row';
import { ChartBarRowIconDuotone as ChartBarRowIconDuotone } from './chart-bar-row-duotone';
import { ChartBarRowIconBold as ChartBarRowIconBold } from './chart-bar-row-bold';
import { ChartBarRowIconBoldDuotone as ChartBarRowIconBoldDuotone } from './chart-bar-row-bold-duotone';
import { ChartBarRowIconFill as ChartBarRowIconFill } from './chart-bar-row-fill';
import { ChartBarRowIconFillDuotone as ChartBarRowIconFillDuotone } from './chart-bar-row-fill-duotone';

export interface ChartBarRowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarRowIcon = memo(forwardRef<SVGSVGElement, ChartBarRowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarRowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarRowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarRowIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarRowIconDuotone ref={ref} {...props} />;
  return <RegularChartBarRowIcon ref={ref} {...props} />;
}));

ChartBarRowIcon.displayName = 'ChartBarRowIcon';

export { ChartBarRowIcon };
