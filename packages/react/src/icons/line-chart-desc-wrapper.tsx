import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineChartDescIcon as LineChartDescIconRegular } from './line-chart-desc';
import { LineChartDescIconBold } from './line-chart-desc-bold';
import { LineChartDescIconFilled } from './line-chart-desc-filled';
import { LineChartDescIconFilltone } from './line-chart-desc-filltone';
import { LineChartDescIconLinetone } from './line-chart-desc-linetone';

export interface LineChartDescIconProps extends IconProps {
  variant?: IconVariant;
}

const LineChartDescIcon = memo(forwardRef<SVGSVGElement, LineChartDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineChartDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineChartDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineChartDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineChartDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineChartDescIconRegular ref={ref} {...props} />;
  }
}));

LineChartDescIcon.displayName = 'LineChartDescIcon';

export { LineChartDescIcon };
