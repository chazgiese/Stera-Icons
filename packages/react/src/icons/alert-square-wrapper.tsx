import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertSquareIcon as RegularAlertSquareIcon } from './alert-square';
import { AlertSquareIconBold } from './alert-square-bold';
import { AlertSquareIconFilled } from './alert-square-filled';
import { AlertSquareIconFilltone } from './alert-square-filltone';
import { AlertSquareIconLinetone } from './alert-square-linetone';

export interface AlertSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertSquareIcon = memo(forwardRef<SVGSVGElement, AlertSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlertSquareIcon ref={ref} {...props} />;
  }
}));

AlertSquareIcon.displayName = 'AlertSquareIcon';

export { AlertSquareIcon };
