import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartAreaIcon as RegularChartAreaIcon } from './chart-area';
import { ChartAreaIconBold } from './chart-area-bold';
import { ChartAreaIconFilled } from './chart-area-filled';
import { ChartAreaIconFilltone } from './chart-area-filltone';
import { ChartAreaIconLinetone } from './chart-area-linetone';

export interface ChartAreaIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartAreaIcon = memo(forwardRef<SVGSVGElement, ChartAreaIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartAreaIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartAreaIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartAreaIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartAreaIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartAreaIcon ref={ref} {...props} />;
  }
}));

ChartAreaIcon.displayName = 'ChartAreaIcon';

export { ChartAreaIcon };
