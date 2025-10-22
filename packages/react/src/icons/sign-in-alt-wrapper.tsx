import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignInAltIcon as RegularSignInAltIcon } from './sign-in-alt';
import { SignInAltIconBold } from './sign-in-alt-bold';
import { SignInAltIconFilled } from './sign-in-alt-filled';
import { SignInAltIconFilltone } from './sign-in-alt-filltone';
import { SignInAltIconLinetone } from './sign-in-alt-linetone';

export interface SignInAltIconProps extends IconProps {
  variant?: IconVariant;
}

const SignInAltIcon = memo(forwardRef<SVGSVGElement, SignInAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignInAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignInAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignInAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignInAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignInAltIcon ref={ref} {...props} />;
  }
}));

SignInAltIcon.displayName = 'SignInAltIcon';

export { SignInAltIcon };
