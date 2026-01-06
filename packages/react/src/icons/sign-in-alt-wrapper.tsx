import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignInAltIcon as RegularSignInAltIcon } from './sign-in-alt';
import { SignInAltIconDuotone as SignInAltIconDuotone } from './sign-in-alt-duotone';
import { SignInAltIconBold as SignInAltIconBold } from './sign-in-alt-bold';
import { SignInAltIconBoldDuotone as SignInAltIconBoldDuotone } from './sign-in-alt-bold-duotone';
import { SignInAltIconFill as SignInAltIconFill } from './sign-in-alt-fill';
import { SignInAltIconFillDuotone as SignInAltIconFillDuotone } from './sign-in-alt-fill-duotone';

export interface SignInAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignInAltIcon = memo(forwardRef<SVGSVGElement, SignInAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignInAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignInAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignInAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignInAltIconFill ref={ref} {...props} />;
  if (duotone) return <SignInAltIconDuotone ref={ref} {...props} />;
  return <RegularSignInAltIcon ref={ref} {...props} />;
}));

SignInAltIcon.displayName = 'SignInAltIcon';

export { SignInAltIcon };
