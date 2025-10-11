import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldAlertIcon as ShieldAlertIconRegular } from './shield-alert';
import { ShieldAlertIconBold } from './shield-alert-bold';
import { ShieldAlertIconFilled } from './shield-alert-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ShieldAlertIconRegular ref={ref} {...props} />;
  }
}));

ShieldAlertIcon.displayName = 'ShieldAlertIcon';

export { ShieldAlertIcon };
