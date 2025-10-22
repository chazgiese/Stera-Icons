import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertTriangleIcon as RegularAlertTriangleIcon } from './alert-triangle';
import { AlertTriangleIconBold } from './alert-triangle-bold';
import { AlertTriangleIconFilled } from './alert-triangle-filled';
import { AlertTriangleIconFilltone } from './alert-triangle-filltone';
import { AlertTriangleIconLinetone } from './alert-triangle-linetone';

export interface AlertTriangleIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertTriangleIcon = memo(forwardRef<SVGSVGElement, AlertTriangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertTriangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertTriangleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertTriangleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertTriangleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlertTriangleIcon ref={ref} {...props} />;
  }
}));

AlertTriangleIcon.displayName = 'AlertTriangleIcon';

export { AlertTriangleIcon };
