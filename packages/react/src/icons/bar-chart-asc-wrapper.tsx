import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartAscIcon as BarChartAscIconRegular } from './bar-chart-asc';
import { BarChartAscIconBold } from './bar-chart-asc-bold';
import { BarChartAscIconFilled } from './bar-chart-asc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartAscIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartAscIcon = memo(forwardRef<SVGSVGElement, BarChartAscIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartAscIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartAscIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartAscIconRegular ref={ref} {...props} />;
  }
}));

BarChartAscIcon.displayName = 'BarChartAscIcon';

export { BarChartAscIcon };
