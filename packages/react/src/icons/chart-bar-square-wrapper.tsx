import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartBarSquareIcon as RegularChartBarSquareIcon } from './chart-bar-square';
import { ChartBarSquareIconBold } from './chart-bar-square-bold';
import { ChartBarSquareIconFilled } from './chart-bar-square-filled';
import { ChartBarSquareIconFilltone } from './chart-bar-square-filltone';
import { ChartBarSquareIconLinetone } from './chart-bar-square-linetone';

export interface ChartBarSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartBarSquareIcon = memo(forwardRef<SVGSVGElement, ChartBarSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartBarSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartBarSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartBarSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartBarSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartBarSquareIcon ref={ref} {...props} />;
  }
}));

ChartBarSquareIcon.displayName = 'ChartBarSquareIcon';

export { ChartBarSquareIcon };
