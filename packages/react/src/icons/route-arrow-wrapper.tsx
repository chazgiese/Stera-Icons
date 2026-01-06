import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RouteArrowIcon as RegularRouteArrowIcon } from './route-arrow';
import { RouteArrowIconDuotone as RouteArrowIconDuotone } from './route-arrow-duotone';
import { RouteArrowIconBold as RouteArrowIconBold } from './route-arrow-bold';
import { RouteArrowIconBoldDuotone as RouteArrowIconBoldDuotone } from './route-arrow-bold-duotone';
import { RouteArrowIconFill as RouteArrowIconFill } from './route-arrow-fill';
import { RouteArrowIconFillDuotone as RouteArrowIconFillDuotone } from './route-arrow-fill-duotone';

export interface RouteArrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RouteArrowIcon = memo(forwardRef<SVGSVGElement, RouteArrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RouteArrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RouteArrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RouteArrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RouteArrowIconFill ref={ref} {...props} />;
  if (duotone) return <RouteArrowIconDuotone ref={ref} {...props} />;
  return <RegularRouteArrowIcon ref={ref} {...props} />;
}));

RouteArrowIcon.displayName = 'RouteArrowIcon';

export { RouteArrowIcon };
