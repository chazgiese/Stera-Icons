import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LockIcon as RegularLockIcon } from './lock';
import { LockIconBold } from './lock-bold';
import { LockIconFilled } from './lock-filled';
import { LockIconFilltone } from './lock-filltone';
import { LockIconLinetone } from './lock-linetone';

export interface LockIconProps extends IconProps {
  variant?: IconVariant;
}

const LockIcon = memo(forwardRef<SVGSVGElement, LockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LockIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LockIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLockIcon ref={ref} {...props} />;
  }
}));

LockIcon.displayName = 'LockIcon';

export { LockIcon };
