import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertOctagonIcon as RegularAlertOctagonIcon } from './alert-octagon';
import { AlertOctagonIconBold } from './alert-octagon-bold';
import { AlertOctagonIconFilled } from './alert-octagon-filled';
import { AlertOctagonIconFilltone } from './alert-octagon-filltone';
import { AlertOctagonIconLinetone } from './alert-octagon-linetone';

export interface AlertOctagonIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertOctagonIcon = memo(forwardRef<SVGSVGElement, AlertOctagonIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertOctagonIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertOctagonIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertOctagonIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertOctagonIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlertOctagonIcon ref={ref} {...props} />;
  }
}));

AlertOctagonIcon.displayName = 'AlertOctagonIcon';

export { AlertOctagonIcon };
