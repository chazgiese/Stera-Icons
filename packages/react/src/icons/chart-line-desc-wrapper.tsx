import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartLineDescIcon as RegularChartLineDescIcon } from './chart-line-desc';
import { ChartLineDescIconBold } from './chart-line-desc-bold';
import { ChartLineDescIconFilled } from './chart-line-desc-filled';
import { ChartLineDescIconFilltone } from './chart-line-desc-filltone';
import { ChartLineDescIconLinetone } from './chart-line-desc-linetone';

export interface ChartLineDescIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartLineDescIcon = memo(forwardRef<SVGSVGElement, ChartLineDescIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartLineDescIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartLineDescIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartLineDescIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartLineDescIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartLineDescIcon ref={ref} {...props} />;
  }
}));

ChartLineDescIcon.displayName = 'ChartLineDescIcon';

export { ChartLineDescIcon };
