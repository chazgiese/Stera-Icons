import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartRowAscIcon as BarChartRowAscIconRegular } from './bar-chart-row-asc';
import { BarChartRowAscIconBold } from './bar-chart-row-asc-bold';
import { BarChartRowAscIconFilled } from './bar-chart-row-asc-filled';
import { BarChartRowAscIconFilltone } from './bar-chart-row-asc-filltone';
import { BarChartRowAscIconLinetone } from './bar-chart-row-asc-linetone';

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
    case 'filltone':
      return <BarChartRowAscIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartRowAscIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowAscIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowAscIcon.displayName = 'BarChartRowAscIcon';

export { BarChartRowAscIcon };
