import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignOutIcon as RegularSignOutIcon } from './sign-out';
import { SignOutIconBold } from './sign-out-bold';
import { SignOutIconFilled } from './sign-out-filled';
import { SignOutIconFilltone } from './sign-out-filltone';
import { SignOutIconLinetone } from './sign-out-linetone';

export interface SignOutIconProps extends IconProps {
  variant?: IconVariant;
}

const SignOutIcon = memo(forwardRef<SVGSVGElement, SignOutIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignOutIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignOutIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignOutIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignOutIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignOutIcon ref={ref} {...props} />;
  }
}));

SignOutIcon.displayName = 'SignOutIcon';

export { SignOutIcon };
