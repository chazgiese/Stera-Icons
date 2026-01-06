import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutAltIcon as RegularSignOutAltIcon } from './sign-out-alt';
import { SignOutAltIconDuotone as SignOutAltIconDuotone } from './sign-out-alt-duotone';
import { SignOutAltIconBold as SignOutAltIconBold } from './sign-out-alt-bold';
import { SignOutAltIconBoldDuotone as SignOutAltIconBoldDuotone } from './sign-out-alt-bold-duotone';
import { SignOutAltIconFill as SignOutAltIconFill } from './sign-out-alt-fill';
import { SignOutAltIconFillDuotone as SignOutAltIconFillDuotone } from './sign-out-alt-fill-duotone';

export interface SignOutAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignOutAltIcon = memo(forwardRef<SVGSVGElement, SignOutAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignOutAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignOutAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignOutAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignOutAltIconFill ref={ref} {...props} />;
  if (duotone) return <SignOutAltIconDuotone ref={ref} {...props} />;
  return <RegularSignOutAltIcon ref={ref} {...props} />;
}));

SignOutAltIcon.displayName = 'SignOutAltIcon';

export { SignOutAltIcon };
