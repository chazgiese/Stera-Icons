import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignInRegular } from './SignInRegular';
import { SignInRegularDuotone } from './SignInRegularDuotone';
import { SignInBold } from './SignInBold';
import { SignInBoldDuotone } from './SignInBoldDuotone';
import { SignInFill } from './SignInFill';
import { SignInFillDuotone } from './SignInFillDuotone';

export interface SignInProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignIn - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignInRegular } from 'stera-icons/icons/SignInRegular';
 */
const SignIn = memo(forwardRef<SVGSVGElement, SignInProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignInBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignInBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignInFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignInFill ref={ref} {...rest} />;
  if (duotone) return <SignInRegularDuotone ref={ref} {...rest} />;
  return <SignInRegular ref={ref} {...rest} />;
}));

SignIn.displayName = 'SignIn';

// Triple export pattern (lucide-react style)
export { SignIn, SignIn as SignInIcon, SignIn as SiSignIn };
export default SignIn;
