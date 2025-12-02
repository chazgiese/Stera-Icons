import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarDescIcon as RegularChartBarDescIcon } from './chart-bar-desc';
import { ChartBarDescIconBold } from './chart-bar-desc-bold';
import { ChartBarDescIconFilled } from './chart-bar-desc-filled';
import { ChartBarDescIconFilltone } from './chart-bar-desc-filltone';
import { ChartBarDescIconLinetone } from './chart-bar-desc-linetone';

export interface ChartBarDescIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarDescIcon = memo(forwardRef<SVGSVGElement, ChartBarDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarDescIcon ref={ref} {...props} />;
  }
}));

ChartBarDescIcon.displayName = 'ChartBarDescIcon';

export { ChartBarDescIcon };
