import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignInIcon as RegularSignInIcon } from './sign-in';
import { SignInIconDuotone as SignInIconDuotone } from './sign-in-duotone';
import { SignInIconBold as SignInIconBold } from './sign-in-bold';
import { SignInIconBoldDuotone as SignInIconBoldDuotone } from './sign-in-bold-duotone';
import { SignInIconFill as SignInIconFill } from './sign-in-fill';
import { SignInIconFillDuotone as SignInIconFillDuotone } from './sign-in-fill-duotone';

export interface SignInIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignInIcon = memo(forwardRef<SVGSVGElement, SignInIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignInIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignInIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignInIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignInIconFill ref={ref} {...props} />;
  if (duotone) return <SignInIconDuotone ref={ref} {...props} />;
  return <RegularSignInIcon ref={ref} {...props} />;
}));

SignInIcon.displayName = 'SignInIcon';

export { SignInIcon };
