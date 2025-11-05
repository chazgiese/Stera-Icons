import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineBarChartIcon as RegularLineBarChartIcon } from './line-bar-chart';
import { LineBarChartIconBold } from './line-bar-chart-bold';
import { LineBarChartIconFilled } from './line-bar-chart-filled';
import { LineBarChartIconFilltone } from './line-bar-chart-filltone';
import { LineBarChartIconLinetone } from './line-bar-chart-linetone';

export interface LineBarChartIconProps extends IconProps {
  variant?: IconVariant;
}

const LineBarChartIcon = memo(forwardRef<SVGSVGElement, LineBarChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineBarChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineBarChartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineBarChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineBarChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLineBarChartIcon ref={ref} {...props} />;
  }
}));

LineBarChartIcon.displayName = 'LineBarChartIcon';

export { LineBarChartIcon };
