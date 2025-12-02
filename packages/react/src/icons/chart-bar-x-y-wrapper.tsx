import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarXYIcon as RegularChartBarXYIcon } from './chart-bar-x-y';
import { ChartBarXYIconBold } from './chart-bar-x-y-bold';
import { ChartBarXYIconFilled } from './chart-bar-x-y-filled';
import { ChartBarXYIconFilltone } from './chart-bar-x-y-filltone';
import { ChartBarXYIconLinetone } from './chart-bar-x-y-linetone';

export interface ChartBarXYIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarXYIcon = memo(forwardRef<SVGSVGElement, ChartBarXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarXYIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarXYIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarXYIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarXYIcon ref={ref} {...props} />;
  }
}));

ChartBarXYIcon.displayName = 'ChartBarXYIcon';

export { ChartBarXYIcon };
