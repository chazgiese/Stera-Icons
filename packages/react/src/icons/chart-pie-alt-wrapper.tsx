import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartPieAltIcon as RegularChartPieAltIcon } from './chart-pie-alt';
import { ChartPieAltIconBold } from './chart-pie-alt-bold';
import { ChartPieAltIconFilled } from './chart-pie-alt-filled';
import { ChartPieAltIconFilltone } from './chart-pie-alt-filltone';
import { ChartPieAltIconLinetone } from './chart-pie-alt-linetone';

export interface ChartPieAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartPieAltIcon = memo(forwardRef<SVGSVGElement, ChartPieAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartPieAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartPieAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartPieAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartPieAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChartPieAltIcon ref={ref} {...props} />;
  }
}));

ChartPieAltIcon.displayName = 'ChartPieAltIcon';

export { ChartPieAltIcon };
