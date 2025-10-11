import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutIcon as SignOutIconRegular } from './sign-out';
import { SignOutIconBold } from './sign-out-bold';
import { SignOutIconFilled } from './sign-out-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SignOutIconRegular ref={ref} {...props} />;
  }
}));

SignOutIcon.displayName = 'SignOutIcon';

export { SignOutIcon };
