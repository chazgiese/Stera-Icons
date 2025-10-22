import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertDiamondIcon as AlertDiamondIconRegular } from './alert-diamond';
import { AlertDiamondIconBold } from './alert-diamond-bold';
import { AlertDiamondIconFilled } from './alert-diamond-filled';
import { AlertDiamondIconFilltone } from './alert-diamond-filltone';
import { AlertDiamondIconLinetone } from './alert-diamond-linetone';

export interface AlertDiamondIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertDiamondIcon = memo(forwardRef<SVGSVGElement, AlertDiamondIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertDiamondIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertDiamondIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertDiamondIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertDiamondIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlertDiamondIconRegular ref={ref} {...props} />;
  }
}));

AlertDiamondIcon.displayName = 'AlertDiamondIcon';

export { AlertDiamondIcon };
