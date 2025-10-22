import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineChartIcon as RegularLineChartIcon } from './line-chart';
import { LineChartIconBold } from './line-chart-bold';
import { LineChartIconFilled } from './line-chart-filled';
import { LineChartIconFilltone } from './line-chart-filltone';
import { LineChartIconLinetone } from './line-chart-linetone';

export interface LineChartIconProps extends IconProps {
  variant?: IconVariant;
}

const LineChartIcon = memo(forwardRef<SVGSVGElement, LineChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineChartIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLineChartIcon ref={ref} {...props} />;
  }
}));

LineChartIcon.displayName = 'LineChartIcon';

export { LineChartIcon };
