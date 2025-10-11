import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineChartIcon as LineChartIconRegular } from './line-chart';
import { LineChartIconBold } from './line-chart-bold';
import { LineChartIconFilled } from './line-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineChartIconRegular ref={ref} {...props} />;
  }
}));

LineChartIcon.displayName = 'LineChartIcon';

export { LineChartIcon };
