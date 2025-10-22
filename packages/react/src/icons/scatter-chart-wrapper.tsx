import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScatterChartIcon as RegularScatterChartIcon } from './scatter-chart';
import { ScatterChartIconBold } from './scatter-chart-bold';
import { ScatterChartIconFilled } from './scatter-chart-filled';
import { ScatterChartIconFilltone } from './scatter-chart-filltone';
import { ScatterChartIconLinetone } from './scatter-chart-linetone';

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
    case 'filltone':
      return <ScatterChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScatterChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScatterChartIcon ref={ref} {...props} />;
  }
}));

ScatterChartIcon.displayName = 'ScatterChartIcon';

export { ScatterChartIcon };
