import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShieldAlertIcon as ShieldAlertIconRegular } from './shield-alert';
import { ShieldAlertIconBold } from './shield-alert-bold';
import { ShieldAlertIconFilled } from './shield-alert-filled';
import { ShieldAlertIconFilltone } from './shield-alert-filltone';
import { ShieldAlertIconLinetone } from './shield-alert-linetone';

export interface ShieldAlertIconProps extends IconProps {
  variant?: IconVariant;
}

const ShieldAlertIcon = memo(forwardRef<SVGSVGElement, ShieldAlertIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShieldAlertIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShieldAlertIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShieldAlertIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShieldAlertIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ShieldAlertIconRegular ref={ref} {...props} />;
  }
}));

ShieldAlertIcon.displayName = 'ShieldAlertIcon';

export { ShieldAlertIcon };
