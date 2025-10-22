import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CapsLockIcon as RegularCapsLockIcon } from './caps-lock';
import { CapsLockIconBold } from './caps-lock-bold';
import { CapsLockIconFilled } from './caps-lock-filled';
import { CapsLockIconFilltone } from './caps-lock-filltone';
import { CapsLockIconLinetone } from './caps-lock-linetone';

export interface CapsLockIconProps extends IconProps {
  variant?: IconVariant;
}

const CapsLockIcon = memo(forwardRef<SVGSVGElement, CapsLockIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CapsLockIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CapsLockIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CapsLockIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CapsLockIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCapsLockIcon ref={ref} {...props} />;
  }
}));

CapsLockIcon.displayName = 'CapsLockIcon';

export { CapsLockIcon };
