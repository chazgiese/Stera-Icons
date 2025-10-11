import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineChartXYDescIcon as LineChartXYDescIconRegular } from './line-chart-x-y-desc';
import { LineChartXYDescIconBold } from './line-chart-x-y-desc-bold';
import { LineChartXYDescIconFilled } from './line-chart-x-y-desc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineChartXYDescIconRegular ref={ref} {...props} />;
  }
}));

LineChartXYDescIcon.displayName = 'LineChartXYDescIcon';

export { LineChartXYDescIcon };
