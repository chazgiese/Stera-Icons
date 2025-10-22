import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChartPieIcon as ChartPieIconRegular } from './chart-pie';
import { ChartPieIconBold } from './chart-pie-bold';
import { ChartPieIconFilled } from './chart-pie-filled';
import { ChartPieIconFilltone } from './chart-pie-filltone';
import { ChartPieIconLinetone } from './chart-pie-linetone';

export interface ChartPieIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartPieIcon = memo(forwardRef<SVGSVGElement, ChartPieIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartPieIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartPieIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChartPieIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChartPieIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChartPieIconRegular ref={ref} {...props} />;
  }
}));

ChartPieIcon.displayName = 'ChartPieIcon';

export { ChartPieIcon };
