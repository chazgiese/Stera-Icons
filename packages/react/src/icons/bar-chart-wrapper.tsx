import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartIcon as BarChartIconRegular } from './bar-chart';
import { BarChartIconBold } from './bar-chart-bold';
import { BarChartIconFilled } from './bar-chart-filled';
import { BarChartIconFilltone } from './bar-chart-filltone';
import { BarChartIconLinetone } from './bar-chart-linetone';

export interface BarChartIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartIcon = memo(forwardRef<SVGSVGElement, BarChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BarChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartIconRegular ref={ref} {...props} />;
  }
}));

BarChartIcon.displayName = 'BarChartIcon';

export { BarChartIcon };
