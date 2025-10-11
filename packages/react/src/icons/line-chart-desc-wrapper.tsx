import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineChartDescIcon as LineChartDescIconRegular } from './line-chart-desc';
import { LineChartDescIconBold } from './line-chart-desc-bold';
import { LineChartDescIconFilled } from './line-chart-desc-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineChartDescIconRegular ref={ref} {...props} />;
  }
}));

LineChartDescIcon.displayName = 'LineChartDescIcon';

export { LineChartDescIcon };
