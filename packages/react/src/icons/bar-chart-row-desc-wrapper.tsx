import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartRowDescIcon as BarChartRowDescIconRegular } from './bar-chart-row-desc';
import { BarChartRowDescIconBold } from './bar-chart-row-desc-bold';
import { BarChartRowDescIconFilled } from './bar-chart-row-desc-filled';
import { BarChartRowDescIconFilltone } from './bar-chart-row-desc-filltone';
import { BarChartRowDescIconLinetone } from './bar-chart-row-desc-linetone';

export interface BarChartRowDescIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartRowDescIcon = memo(forwardRef<SVGSVGElement, BarChartRowDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartRowDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartRowDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BarChartRowDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartRowDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowDescIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowDescIcon.displayName = 'BarChartRowDescIcon';

export { BarChartRowDescIcon };
