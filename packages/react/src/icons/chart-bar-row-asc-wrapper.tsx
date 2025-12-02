import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarRowAscIcon as RegularChartBarRowAscIcon } from './chart-bar-row-asc';
import { ChartBarRowAscIconBold } from './chart-bar-row-asc-bold';
import { ChartBarRowAscIconFilled } from './chart-bar-row-asc-filled';
import { ChartBarRowAscIconFilltone } from './chart-bar-row-asc-filltone';
import { ChartBarRowAscIconLinetone } from './chart-bar-row-asc-linetone';

export interface ChartBarRowAscIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarRowAscIcon = memo(forwardRef<SVGSVGElement, ChartBarRowAscIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarRowAscIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarRowAscIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarRowAscIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarRowAscIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarRowAscIcon ref={ref} {...props} />;
  }
}));

ChartBarRowAscIcon.displayName = 'ChartBarRowAscIcon';

export { ChartBarRowAscIcon };
