import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDashIcon as RegularCircleDashIcon } from './circle-dash';
import { CircleDashIconBold } from './circle-dash-bold';
import { CircleDashIconFilled } from './circle-dash-filled';
import { CircleDashIconFilltone } from './circle-dash-filltone';
import { CircleDashIconLinetone } from './circle-dash-linetone';

export interface CircleDashIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDashIcon = memo(forwardRef<SVGSVGElement, CircleDashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleDashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleDashIcon ref={ref} {...props} />;
  }
}));

CircleDashIcon.displayName = 'CircleDashIcon';

export { CircleDashIcon };
