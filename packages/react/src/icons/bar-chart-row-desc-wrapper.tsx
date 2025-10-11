import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartRowDescIcon as BarChartRowDescIconRegular } from './bar-chart-row-desc';
import { BarChartRowDescIconBold } from './bar-chart-row-desc-bold';
import { BarChartRowDescIconFilled } from './bar-chart-row-desc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartRowDescIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartRowDescIcon = memo(forwardRef<SVGSVGElement, BarChartRowDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartRowDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartRowDescIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartRowDescIconRegular ref={ref} {...props} />;
  }
}));

BarChartRowDescIcon.displayName = 'BarChartRowDescIcon';

export { BarChartRowDescIcon };
