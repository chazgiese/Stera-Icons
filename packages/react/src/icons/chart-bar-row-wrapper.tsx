import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarRowIcon as RegularChartBarRowIcon } from './chart-bar-row';
import { ChartBarRowIconBold } from './chart-bar-row-bold';
import { ChartBarRowIconFilled } from './chart-bar-row-filled';
import { ChartBarRowIconFilltone } from './chart-bar-row-filltone';
import { ChartBarRowIconLinetone } from './chart-bar-row-linetone';

export interface ChartBarRowIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarRowIcon = memo(forwardRef<SVGSVGElement, ChartBarRowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarRowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarRowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarRowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarRowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarRowIcon ref={ref} {...props} />;
  }
}));

ChartBarRowIcon.displayName = 'ChartBarRowIcon';

export { ChartBarRowIcon };
