import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LockPasswordIcon as RegularLockPasswordIcon } from './lock-password';
import { LockPasswordIconBold } from './lock-password-bold';
import { LockPasswordIconFilled } from './lock-password-filled';
import { LockPasswordIconFilltone } from './lock-password-filltone';
import { LockPasswordIconLinetone } from './lock-password-linetone';

export interface LockPasswordIconProps extends IconProps {
  variant?: IconVariant;
}

const LockPasswordIcon = memo(forwardRef<SVGSVGElement, LockPasswordIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockPasswordIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockPasswordIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LockPasswordIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LockPasswordIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLockPasswordIcon ref={ref} {...props} />;
  }
}));

LockPasswordIcon.displayName = 'LockPasswordIcon';

export { LockPasswordIcon };
