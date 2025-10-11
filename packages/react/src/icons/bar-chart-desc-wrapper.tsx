import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartDescIcon as BarChartDescIconRegular } from './bar-chart-desc';
import { BarChartDescIconBold } from './bar-chart-desc-bold';
import { BarChartDescIconFilled } from './bar-chart-desc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartDescIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartDescIcon = memo(forwardRef<SVGSVGElement, BarChartDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartDescIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartDescIconRegular ref={ref} {...props} />;
  }
}));

BarChartDescIcon.displayName = 'BarChartDescIcon';

export { BarChartDescIcon };
