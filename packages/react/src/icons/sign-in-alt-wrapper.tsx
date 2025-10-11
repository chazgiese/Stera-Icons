import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignInAltIcon as SignInAltIconRegular } from './sign-in-alt';
import { SignInAltIconBold } from './sign-in-alt-bold';
import { SignInAltIconFilled } from './sign-in-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SignInAltIconRegular ref={ref} {...props} />;
  }
}));

SignInAltIcon.displayName = 'SignInAltIcon';

export { SignInAltIcon };
