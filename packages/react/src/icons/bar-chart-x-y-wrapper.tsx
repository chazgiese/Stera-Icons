import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarChartXYIcon as BarChartXYIconRegular } from './bar-chart-x-y';
import { BarChartXYIconBold } from './bar-chart-x-y-bold';
import { BarChartXYIconFilled } from './bar-chart-x-y-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BarChartXYIconProps extends IconProps {
  variant?: IconVariant;
}

const BarChartXYIcon = memo(forwardRef<SVGSVGElement, BarChartXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BarChartXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BarChartXYIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BarChartXYIconRegular ref={ref} {...props} />;
  }
}));

BarChartXYIcon.displayName = 'BarChartXYIcon';

export { BarChartXYIcon };
