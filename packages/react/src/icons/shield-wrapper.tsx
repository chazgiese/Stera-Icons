import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldIcon as RegularShieldIcon } from './shield';
import { ShieldIconBold } from './shield-bold';
import { ShieldIconFilled } from './shield-filled';
import { ShieldIconFilltone } from './shield-filltone';
import { ShieldIconLinetone } from './shield-linetone';

export interface ShieldIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldIcon = memo(forwardRef<SVGSVGElement, ShieldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShieldIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularShieldIcon ref={ref} {...props} />;
  }
}));

ShieldIcon.displayName = 'ShieldIcon';

export { ShieldIcon };
