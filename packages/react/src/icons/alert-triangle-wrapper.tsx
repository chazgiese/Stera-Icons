import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertTriangleIcon as AlertTriangleIconRegular } from './alert-triangle';
import { AlertTriangleIconBold } from './alert-triangle-bold';
import { AlertTriangleIconFilled } from './alert-triangle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AlertTriangleIconRegular ref={ref} {...props} />;
  }
}));

AlertTriangleIcon.displayName = 'AlertTriangleIcon';

export { AlertTriangleIcon };
