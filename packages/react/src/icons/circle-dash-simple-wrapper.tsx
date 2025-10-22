import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDashSimpleIcon as RegularCircleDashSimpleIcon } from './circle-dash-simple';
import { CircleDashSimpleIconBold } from './circle-dash-simple-bold';
import { CircleDashSimpleIconFilled } from './circle-dash-simple-filled';
import { CircleDashSimpleIconFilltone } from './circle-dash-simple-filltone';
import { CircleDashSimpleIconLinetone } from './circle-dash-simple-linetone';

export interface CircleDashSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDashSimpleIcon = memo(forwardRef<SVGSVGElement, CircleDashSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDashSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDashSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleDashSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDashSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleDashSimpleIcon ref={ref} {...props} />;
  }
}));

CircleDashSimpleIcon.displayName = 'CircleDashSimpleIcon';

export { CircleDashSimpleIcon };
