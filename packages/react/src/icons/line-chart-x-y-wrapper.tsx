import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineChartXYIcon as LineChartXYIconRegular } from './line-chart-x-y';
import { LineChartXYIconBold } from './line-chart-x-y-bold';
import { LineChartXYIconFilled } from './line-chart-x-y-filled';
import { LineChartXYIconFilltone } from './line-chart-x-y-filltone';
import { LineChartXYIconLinetone } from './line-chart-x-y-linetone';

export interface LineChartXYIconProps extends IconProps {
  variant?: IconVariant;
}

const LineChartXYIcon = memo(forwardRef<SVGSVGElement, LineChartXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineChartXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineChartXYIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineChartXYIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineChartXYIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineChartXYIconRegular ref={ref} {...props} />;
  }
}));

LineChartXYIcon.displayName = 'LineChartXYIcon';

export { LineChartXYIcon };
