import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowAscIcon as RegularChartBarRowAscIcon } from './chart-bar-row-asc';
import { ChartBarRowAscIconDuotone as ChartBarRowAscIconDuotone } from './chart-bar-row-asc-duotone';
import { ChartBarRowAscIconBold as ChartBarRowAscIconBold } from './chart-bar-row-asc-bold';
import { ChartBarRowAscIconBoldDuotone as ChartBarRowAscIconBoldDuotone } from './chart-bar-row-asc-bold-duotone';
import { ChartBarRowAscIconFill as ChartBarRowAscIconFill } from './chart-bar-row-asc-fill';
import { ChartBarRowAscIconFillDuotone as ChartBarRowAscIconFillDuotone } from './chart-bar-row-asc-fill-duotone';

export interface ChartBarRowAscIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarRowAscIcon = memo(forwardRef<SVGSVGElement, ChartBarRowAscIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowAscIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarRowAscIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarRowAscIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarRowAscIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarRowAscIconDuotone ref={ref} {...props} />;
  return <RegularChartBarRowAscIcon ref={ref} {...props} />;
}));

ChartBarRowAscIcon.displayName = 'ChartBarRowAscIcon';

export { ChartBarRowAscIcon };
