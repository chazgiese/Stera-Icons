import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BarChartDescIcon as RegularBarChartDescIcon } from './bar-chart-desc';
import { BarChartDescIconBold } from './bar-chart-desc-bold';
import { BarChartDescIconFilled } from './bar-chart-desc-filled';
import { BarChartDescIconFilltone } from './bar-chart-desc-filltone';
import { BarChartDescIconLinetone } from './bar-chart-desc-linetone';

export interface BarChartDescIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartDescIcon = memo(forwardRef<SVGSVGElement, BarChartDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BarChartDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BarChartDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBarChartDescIcon ref={ref} {...props} />;
  }
}));

BarChartDescIcon.displayName = 'BarChartDescIcon';

export { BarChartDescIcon };
