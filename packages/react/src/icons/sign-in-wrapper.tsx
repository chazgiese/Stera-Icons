import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignInIcon as SignInIconRegular } from './sign-in';
import { SignInIconBold } from './sign-in-bold';
import { SignInIconFilled } from './sign-in-filled';
import { SignInIconFilltone } from './sign-in-filltone';
import { SignInIconLinetone } from './sign-in-linetone';

export interface SignInIconProps extends IconProps {
  variant?: IconVariant;
}

const SignInIcon = memo(forwardRef<SVGSVGElement, SignInIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignInIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignInIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignInIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignInIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SignInIconRegular ref={ref} {...props} />;
  }
}));

SignInIcon.displayName = 'SignInIcon';

export { SignInIcon };
