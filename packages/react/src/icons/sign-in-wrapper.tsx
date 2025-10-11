import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignInIcon as SignInIconRegular } from './sign-in';
import { SignInIconBold } from './sign-in-bold';
import { SignInIconFilled } from './sign-in-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SignInIconRegular ref={ref} {...props} />;
  }
}));

SignInIcon.displayName = 'SignInIcon';

export { SignInIcon };
