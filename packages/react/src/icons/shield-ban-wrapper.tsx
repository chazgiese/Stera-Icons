import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldBanIcon as RegularShieldBanIcon } from './shield-ban';
import { ShieldBanIconBold } from './shield-ban-bold';
import { ShieldBanIconFilled } from './shield-ban-filled';
import { ShieldBanIconFilltone } from './shield-ban-filltone';
import { ShieldBanIconLinetone } from './shield-ban-linetone';

export interface ShieldBanIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldBanIcon = memo(forwardRef<SVGSVGElement, ShieldBanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldBanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldBanIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShieldBanIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldBanIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularShieldBanIcon ref={ref} {...props} />;
  }
}));

ShieldBanIcon.displayName = 'ShieldBanIcon';

export { ShieldBanIcon };
