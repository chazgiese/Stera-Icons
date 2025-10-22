import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertCircleIcon as AlertCircleIconRegular } from './alert-circle';
import { AlertCircleIconBold } from './alert-circle-bold';
import { AlertCircleIconFilled } from './alert-circle-filled';
import { AlertCircleIconFilltone } from './alert-circle-filltone';
import { AlertCircleIconLinetone } from './alert-circle-linetone';

export interface AlertCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertCircleIcon = memo(forwardRef<SVGSVGElement, AlertCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlertCircleIconRegular ref={ref} {...props} />;
  }
}));

AlertCircleIcon.displayName = 'AlertCircleIcon';

export { AlertCircleIcon };
