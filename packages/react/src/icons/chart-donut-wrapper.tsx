import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartDonutIcon as ChartDonutIconRegular } from './chart-donut';
import { ChartDonutIconBold } from './chart-donut-bold';
import { ChartDonutIconFilled } from './chart-donut-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChartDonutIconProps extends IconProps {
  variant?: IconVariant;
}

const ChartDonutIcon = memo(forwardRef<SVGSVGElement, ChartDonutIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChartDonutIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChartDonutIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChartDonutIconRegular ref={ref} {...props} />;
  }
}));

ChartDonutIcon.displayName = 'ChartDonutIcon';

export { ChartDonutIcon };
