import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartLineBarIcon as RegularChartLineBarIcon } from './chart-line-bar';
import { ChartLineBarIconBold } from './chart-line-bar-bold';
import { ChartLineBarIconFilled } from './chart-line-bar-filled';
import { ChartLineBarIconFilltone } from './chart-line-bar-filltone';
import { ChartLineBarIconLinetone } from './chart-line-bar-linetone';

export interface ChartLineBarIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartLineBarIcon = memo(forwardRef<SVGSVGElement, ChartLineBarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartLineBarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartLineBarIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartLineBarIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartLineBarIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartLineBarIcon ref={ref} {...props} />;
  }
}));

ChartLineBarIcon.displayName = 'ChartLineBarIcon';

export { ChartLineBarIcon };
