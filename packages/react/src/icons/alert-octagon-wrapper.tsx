import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertOctagonIcon as AlertOctagonIconRegular } from './alert-octagon';
import { AlertOctagonIconBold } from './alert-octagon-bold';
import { AlertOctagonIconFilled } from './alert-octagon-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AlertOctagonIconRegular ref={ref} {...props} />;
  }
}));

AlertOctagonIcon.displayName = 'AlertOctagonIcon';

export { AlertOctagonIcon };
