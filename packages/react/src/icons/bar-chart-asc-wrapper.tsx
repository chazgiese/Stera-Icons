import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartAscIcon as RegularBarChartAscIcon } from './bar-chart-asc';
import { BarChartAscIconBold } from './bar-chart-asc-bold';
import { BarChartAscIconFilled } from './bar-chart-asc-filled';
import { BarChartAscIconFilltone } from './bar-chart-asc-filltone';
import { BarChartAscIconLinetone } from './bar-chart-asc-linetone';

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
    case 'filltone':
      return <BarChartAscIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartAscIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBarChartAscIcon ref={ref} {...props} />;
  }
}));

BarChartAscIcon.displayName = 'BarChartAscIcon';

export { BarChartAscIcon };
