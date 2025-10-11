import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutAltIcon as SignOutAltIconRegular } from './sign-out-alt';
import { SignOutAltIconBold } from './sign-out-alt-bold';
import { SignOutAltIconFilled } from './sign-out-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SignOutAltIconRegular ref={ref} {...props} />;
  }
}));

SignOutAltIcon.displayName = 'SignOutAltIcon';

export { SignOutAltIcon };
