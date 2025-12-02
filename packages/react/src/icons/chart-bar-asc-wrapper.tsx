import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarAscIcon as RegularChartBarAscIcon } from './chart-bar-asc';
import { ChartBarAscIconBold } from './chart-bar-asc-bold';
import { ChartBarAscIconFilled } from './chart-bar-asc-filled';
import { ChartBarAscIconFilltone } from './chart-bar-asc-filltone';
import { ChartBarAscIconLinetone } from './chart-bar-asc-linetone';

export interface ChartBarAscIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarAscIcon = memo(forwardRef<SVGSVGElement, ChartBarAscIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarAscIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarAscIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarAscIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarAscIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarAscIcon ref={ref} {...props} />;
  }
}));

ChartBarAscIcon.displayName = 'ChartBarAscIcon';

export { ChartBarAscIcon };
