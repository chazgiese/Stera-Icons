import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LockPasswordOpenIcon as LockPasswordOpenIconRegular } from './lock-password-open';
import { LockPasswordOpenIconBold } from './lock-password-open-bold';
import { LockPasswordOpenIconFilled } from './lock-password-open-filled';
import { LockPasswordOpenIconFilltone } from './lock-password-open-filltone';
import { LockPasswordOpenIconLinetone } from './lock-password-open-linetone';

export interface LockPasswordOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const LockPasswordOpenIcon = memo(forwardRef<SVGSVGElement, LockPasswordOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LockPasswordOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LockPasswordOpenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LockPasswordOpenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LockPasswordOpenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LockPasswordOpenIconRegular ref={ref} {...props} />;
  }
}));

LockPasswordOpenIcon.displayName = 'LockPasswordOpenIcon';

export { LockPasswordOpenIcon };
