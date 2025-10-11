import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineChartXYIcon as LineChartXYIconRegular } from './line-chart-x-y';
import { LineChartXYIconBold } from './line-chart-x-y-bold';
import { LineChartXYIconFilled } from './line-chart-x-y-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineChartXYIconRegular ref={ref} {...props} />;
  }
}));

LineChartXYIcon.displayName = 'LineChartXYIcon';

export { LineChartXYIcon };
