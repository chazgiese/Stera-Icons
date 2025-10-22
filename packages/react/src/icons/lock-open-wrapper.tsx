import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LockOpenIcon as RegularLockOpenIcon } from './lock-open';
import { LockOpenIconBold } from './lock-open-bold';
import { LockOpenIconFilled } from './lock-open-filled';
import { LockOpenIconFilltone } from './lock-open-filltone';
import { LockOpenIconLinetone } from './lock-open-linetone';

export interface LockOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const LockOpenIcon = memo(forwardRef<SVGSVGElement, LockOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockOpenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LockOpenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LockOpenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLockOpenIcon ref={ref} {...props} />;
  }
}));

LockOpenIcon.displayName = 'LockOpenIcon';

export { LockOpenIcon };
