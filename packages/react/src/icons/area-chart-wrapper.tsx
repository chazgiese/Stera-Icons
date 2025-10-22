import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AreaChartIcon as RegularAreaChartIcon } from './area-chart';
import { AreaChartIconBold } from './area-chart-bold';
import { AreaChartIconFilled } from './area-chart-filled';
import { AreaChartIconFilltone } from './area-chart-filltone';
import { AreaChartIconLinetone } from './area-chart-linetone';

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
    case 'filltone':
      return <AreaChartIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AreaChartIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAreaChartIcon ref={ref} {...props} />;
  }
}));

AreaChartIcon.displayName = 'AreaChartIcon';

export { AreaChartIcon };
