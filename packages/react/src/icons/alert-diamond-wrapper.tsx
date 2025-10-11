import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertDiamondIcon as AlertDiamondIconRegular } from './alert-diamond';
import { AlertDiamondIconBold } from './alert-diamond-bold';
import { AlertDiamondIconFilled } from './alert-diamond-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AlertDiamondIconRegular ref={ref} {...props} />;
  }
}));

AlertDiamondIcon.displayName = 'AlertDiamondIcon';

export { AlertDiamondIcon };
