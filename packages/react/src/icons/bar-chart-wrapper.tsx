import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartIcon as BarChartIconRegular } from './bar-chart';
import { BarChartIconBold } from './bar-chart-bold';
import { BarChartIconFilled } from './bar-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartIcon = memo(forwardRef<SVGSVGElement, BarChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartIconRegular ref={ref} {...props} />;
  }
}));

BarChartIcon.displayName = 'BarChartIcon';

export { BarChartIcon };
