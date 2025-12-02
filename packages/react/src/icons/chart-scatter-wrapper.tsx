import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartScatterIcon as RegularChartScatterIcon } from './chart-scatter';
import { ChartScatterIconBold } from './chart-scatter-bold';
import { ChartScatterIconFilled } from './chart-scatter-filled';
import { ChartScatterIconFilltone } from './chart-scatter-filltone';
import { ChartScatterIconLinetone } from './chart-scatter-linetone';

export interface ChartScatterIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartScatterIcon = memo(forwardRef<SVGSVGElement, ChartScatterIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartScatterIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartScatterIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartScatterIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartScatterIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartScatterIcon ref={ref} {...props} />;
  }
}));

ChartScatterIcon.displayName = 'ChartScatterIcon';

export { ChartScatterIcon };
