import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartRowIcon as BarChartRowIconRegular } from './bar-chart-row';
import { BarChartRowIconBold } from './bar-chart-row-bold';
import { BarChartRowIconFilled } from './bar-chart-row-filled';
import { BarChartRowIconFilltone } from './bar-chart-row-filltone';
import { BarChartRowIconLinetone } from './bar-chart-row-linetone';

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
    case 'filltone':
      return <BarChartRowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartRowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowIcon.displayName = 'BarChartRowIcon';

export { BarChartRowIcon };
