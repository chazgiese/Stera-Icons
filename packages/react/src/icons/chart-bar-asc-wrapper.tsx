import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarAscIcon as RegularChartBarAscIcon } from './chart-bar-asc';
import { ChartBarAscIconDuotone as ChartBarAscIconDuotone } from './chart-bar-asc-duotone';
import { ChartBarAscIconBold as ChartBarAscIconBold } from './chart-bar-asc-bold';
import { ChartBarAscIconBoldDuotone as ChartBarAscIconBoldDuotone } from './chart-bar-asc-bold-duotone';
import { ChartBarAscIconFill as ChartBarAscIconFill } from './chart-bar-asc-fill';
import { ChartBarAscIconFillDuotone as ChartBarAscIconFillDuotone } from './chart-bar-asc-fill-duotone';

export interface ChartBarAscIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarAscIcon = memo(forwardRef<SVGSVGElement, ChartBarAscIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarAscIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarAscIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarAscIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarAscIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarAscIconDuotone ref={ref} {...props} />;
  return <RegularChartBarAscIcon ref={ref} {...props} />;
}));

ChartBarAscIcon.displayName = 'ChartBarAscIcon';

export { ChartBarAscIcon };
