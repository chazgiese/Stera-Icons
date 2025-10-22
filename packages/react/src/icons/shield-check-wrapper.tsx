import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldCheckIcon as RegularShieldCheckIcon } from './shield-check';
import { ShieldCheckIconBold } from './shield-check-bold';
import { ShieldCheckIconFilled } from './shield-check-filled';
import { ShieldCheckIconFilltone } from './shield-check-filltone';
import { ShieldCheckIconLinetone } from './shield-check-linetone';

export interface ShieldCheckIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldCheckIcon = memo(forwardRef<SVGSVGElement, ShieldCheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldCheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldCheckIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShieldCheckIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldCheckIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularShieldCheckIcon ref={ref} {...props} />;
  }
}));

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export { ShieldCheckIcon };
