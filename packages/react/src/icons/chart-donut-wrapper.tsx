import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartDonutIcon as RegularChartDonutIcon } from './chart-donut';
import { ChartDonutIconBold } from './chart-donut-bold';
import { ChartDonutIconFilled } from './chart-donut-filled';
import { ChartDonutIconFilltone } from './chart-donut-filltone';
import { ChartDonutIconLinetone } from './chart-donut-linetone';

export interface ChartDonutIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartDonutIcon = memo(forwardRef<SVGSVGElement, ChartDonutIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartDonutIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartDonutIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartDonutIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartDonutIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartDonutIcon ref={ref} {...props} />;
  }
}));

ChartDonutIcon.displayName = 'ChartDonutIcon';

export { ChartDonutIcon };
