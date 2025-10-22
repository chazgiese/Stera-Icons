import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineChartXYDescIcon as LineChartXYDescIconRegular } from './line-chart-x-y-desc';
import { LineChartXYDescIconBold } from './line-chart-x-y-desc-bold';
import { LineChartXYDescIconFilled } from './line-chart-x-y-desc-filled';
import { LineChartXYDescIconFilltone } from './line-chart-x-y-desc-filltone';
import { LineChartXYDescIconLinetone } from './line-chart-x-y-desc-linetone';

export interface LineChartXYDescIconProps extends IconProps {
  variant?: IconVariant;
}

const LineChartXYDescIcon = memo(forwardRef<SVGSVGElement, LineChartXYDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineChartXYDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineChartXYDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineChartXYDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineChartXYDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineChartXYDescIconRegular ref={ref} {...props} />;
  }
}));

LineChartXYDescIcon.displayName = 'LineChartXYDescIcon';

export { LineChartXYDescIcon };
