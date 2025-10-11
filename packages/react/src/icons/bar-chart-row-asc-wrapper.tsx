import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartRowAscIcon as BarChartRowAscIconRegular } from './bar-chart-row-asc';
import { BarChartRowAscIconBold } from './bar-chart-row-asc-bold';
import { BarChartRowAscIconFilled } from './bar-chart-row-asc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartRowAscIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartRowAscIcon = memo(forwardRef<SVGSVGElement, BarChartRowAscIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartRowAscIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartRowAscIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowAscIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowAscIcon.displayName = 'BarChartRowAscIcon';

export { BarChartRowAscIcon };
