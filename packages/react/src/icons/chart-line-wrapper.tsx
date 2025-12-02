import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartLineIcon as RegularChartLineIcon } from './chart-line';
import { ChartLineIconBold } from './chart-line-bold';
import { ChartLineIconFilled } from './chart-line-filled';
import { ChartLineIconFilltone } from './chart-line-filltone';
import { ChartLineIconLinetone } from './chart-line-linetone';

export interface ChartLineIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartLineIcon = memo(forwardRef<SVGSVGElement, ChartLineIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartLineIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartLineIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartLineIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartLineIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartLineIcon ref={ref} {...props} />;
  }
}));

ChartLineIcon.displayName = 'ChartLineIcon';

export { ChartLineIcon };
