import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RouteArrowIcon as RegularRouteArrowIcon } from './route-arrow';
import { RouteArrowIconBold } from './route-arrow-bold';
import { RouteArrowIconFilled } from './route-arrow-filled';
import { RouteArrowIconFilltone } from './route-arrow-filltone';
import { RouteArrowIconLinetone } from './route-arrow-linetone';

export interface RouteArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const RouteArrowIcon = memo(forwardRef<SVGSVGElement, RouteArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RouteArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RouteArrowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RouteArrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RouteArrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRouteArrowIcon ref={ref} {...props} />;
  }
}));

RouteArrowIcon.displayName = 'RouteArrowIcon';

export { RouteArrowIcon };
