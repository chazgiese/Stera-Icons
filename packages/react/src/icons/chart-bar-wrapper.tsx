import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarIcon as RegularChartBarIcon } from './chart-bar';
import { ChartBarIconBold } from './chart-bar-bold';
import { ChartBarIconFilled } from './chart-bar-filled';
import { ChartBarIconFilltone } from './chart-bar-filltone';
import { ChartBarIconLinetone } from './chart-bar-linetone';

export interface ChartBarIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarIcon = memo(forwardRef<SVGSVGElement, ChartBarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarIcon ref={ref} {...props} />;
  }
}));

ChartBarIcon.displayName = 'ChartBarIcon';

export { ChartBarIcon };
