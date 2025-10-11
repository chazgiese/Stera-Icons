import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScatterChartIcon as ScatterChartIconRegular } from './scatter-chart';
import { ScatterChartIconBold } from './scatter-chart-bold';
import { ScatterChartIconFilled } from './scatter-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ScatterChartIconProps extends IconProps {
  variant?: IconVariant;
}

const ScatterChartIcon = memo(forwardRef<SVGSVGElement, ScatterChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScatterChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScatterChartIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScatterChartIconRegular ref={ref} {...props} />;
  }
}));

ScatterChartIcon.displayName = 'ScatterChartIcon';

export { ScatterChartIcon };
