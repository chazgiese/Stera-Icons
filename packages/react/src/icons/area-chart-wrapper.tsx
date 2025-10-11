import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AreaChartIcon as AreaChartIconRegular } from './area-chart';
import { AreaChartIconBold } from './area-chart-bold';
import { AreaChartIconFilled } from './area-chart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AreaChartIconProps extends IconProps {
  variant?: IconVariant;
}

const AreaChartIcon = memo(forwardRef<SVGSVGElement, AreaChartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AreaChartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AreaChartIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AreaChartIconRegular ref={ref} {...props} />;
  }
}));

AreaChartIcon.displayName = 'AreaChartIcon';

export { AreaChartIcon };
