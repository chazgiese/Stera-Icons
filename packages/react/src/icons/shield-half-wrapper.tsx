import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldHalfIcon as RegularShieldHalfIcon } from './shield-half';
import { ShieldHalfIconBold } from './shield-half-bold';
import { ShieldHalfIconFilled } from './shield-half-filled';
import { ShieldHalfIconFilltone } from './shield-half-filltone';
import { ShieldHalfIconLinetone } from './shield-half-linetone';

export interface ShieldHalfIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldHalfIcon = memo(forwardRef<SVGSVGElement, ShieldHalfIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldHalfIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldHalfIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShieldHalfIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldHalfIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularShieldHalfIcon ref={ref} {...props} />;
  }
}));

ShieldHalfIcon.displayName = 'ShieldHalfIcon';

export { ShieldHalfIcon };
