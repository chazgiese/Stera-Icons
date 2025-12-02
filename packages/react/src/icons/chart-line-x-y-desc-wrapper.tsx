import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartLineXYDescIcon as RegularChartLineXYDescIcon } from './chart-line-x-y-desc';
import { ChartLineXYDescIconBold } from './chart-line-x-y-desc-bold';
import { ChartLineXYDescIconFilled } from './chart-line-x-y-desc-filled';
import { ChartLineXYDescIconFilltone } from './chart-line-x-y-desc-filltone';
import { ChartLineXYDescIconLinetone } from './chart-line-x-y-desc-linetone';

export interface ChartLineXYDescIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartLineXYDescIcon = memo(forwardRef<SVGSVGElement, ChartLineXYDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartLineXYDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartLineXYDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartLineXYDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartLineXYDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartLineXYDescIcon ref={ref} {...props} />;
  }
}));

ChartLineXYDescIcon.displayName = 'ChartLineXYDescIcon';

export { ChartLineXYDescIcon };
