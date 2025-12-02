import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarRowDescIcon as RegularChartBarRowDescIcon } from './chart-bar-row-desc';
import { ChartBarRowDescIconBold } from './chart-bar-row-desc-bold';
import { ChartBarRowDescIconFilled } from './chart-bar-row-desc-filled';
import { ChartBarRowDescIconFilltone } from './chart-bar-row-desc-filltone';
import { ChartBarRowDescIconLinetone } from './chart-bar-row-desc-linetone';

export interface ChartBarRowDescIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarRowDescIcon = memo(forwardRef<SVGSVGElement, ChartBarRowDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarRowDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarRowDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarRowDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarRowDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarRowDescIcon ref={ref} {...props} />;
  }
}));

ChartBarRowDescIcon.displayName = 'ChartBarRowDescIcon';

export { ChartBarRowDescIcon };
