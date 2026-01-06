import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutIcon as RegularSignOutIcon } from './sign-out';
import { SignOutIconDuotone as SignOutIconDuotone } from './sign-out-duotone';
import { SignOutIconBold as SignOutIconBold } from './sign-out-bold';
import { SignOutIconBoldDuotone as SignOutIconBoldDuotone } from './sign-out-bold-duotone';
import { SignOutIconFill as SignOutIconFill } from './sign-out-fill';
import { SignOutIconFillDuotone as SignOutIconFillDuotone } from './sign-out-fill-duotone';

export interface SignOutIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignOutIcon = memo(forwardRef<SVGSVGElement, SignOutIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignOutIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignOutIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignOutIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignOutIconFill ref={ref} {...props} />;
  if (duotone) return <SignOutIconDuotone ref={ref} {...props} />;
  return <RegularSignOutIcon ref={ref} {...props} />;
}));

SignOutIcon.displayName = 'SignOutIcon';

export { SignOutIcon };
