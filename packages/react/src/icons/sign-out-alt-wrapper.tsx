import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignOutAltIcon as RegularSignOutAltIcon } from './sign-out-alt';
import { SignOutAltIconBold } from './sign-out-alt-bold';
import { SignOutAltIconFilled } from './sign-out-alt-filled';
import { SignOutAltIconFilltone } from './sign-out-alt-filltone';
import { SignOutAltIconLinetone } from './sign-out-alt-linetone';

export interface SignOutAltIconProps extends IconProps {
  variant?: IconVariant;
}

const SignOutAltIcon = memo(forwardRef<SVGSVGElement, SignOutAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignOutAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignOutAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignOutAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignOutAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignOutAltIcon ref={ref} {...props} />;
  }
}));

SignOutAltIcon.displayName = 'SignOutAltIcon';

export { SignOutAltIcon };
