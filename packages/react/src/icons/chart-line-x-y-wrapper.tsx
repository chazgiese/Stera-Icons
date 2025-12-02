import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartLineXYIcon as RegularChartLineXYIcon } from './chart-line-x-y';
import { ChartLineXYIconBold } from './chart-line-x-y-bold';
import { ChartLineXYIconFilled } from './chart-line-x-y-filled';
import { ChartLineXYIconFilltone } from './chart-line-x-y-filltone';
import { ChartLineXYIconLinetone } from './chart-line-x-y-linetone';

export interface ChartLineXYIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartLineXYIcon = memo(forwardRef<SVGSVGElement, ChartLineXYIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartLineXYIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartLineXYIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartLineXYIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartLineXYIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartLineXYIcon ref={ref} {...props} />;
  }
}));

ChartLineXYIcon.displayName = 'ChartLineXYIcon';

export { ChartLineXYIcon };
