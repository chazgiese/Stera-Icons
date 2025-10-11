import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartRowIcon as BarChartRowIconRegular } from './bar-chart-row';
import { BarChartRowIconBold } from './bar-chart-row-bold';
import { BarChartRowIconFilled } from './bar-chart-row-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartRowIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartRowIcon = memo(forwardRef<SVGSVGElement, BarChartRowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartRowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartRowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowIcon.displayName = 'BarChartRowIcon';

export { BarChartRowIcon };
