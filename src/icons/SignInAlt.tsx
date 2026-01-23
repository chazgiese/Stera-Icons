import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignInAltRegular } from './SignInAltRegular.js';
import { SignInAltRegularDuotone } from './SignInAltRegularDuotone.js';
import { SignInAltBold } from './SignInAltBold.js';
import { SignInAltBoldDuotone } from './SignInAltBoldDuotone.js';
import { SignInAltFill } from './SignInAltFill.js';
import { SignInAltFillDuotone } from './SignInAltFillDuotone.js';

export interface SignInAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignInAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignInAltRegular } from 'stera-icons/icons/SignInAltRegular';
 */
const SignInAlt = memo(forwardRef<SVGSVGElement, SignInAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignInAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignInAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignInAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignInAltFill ref={ref} {...rest} />;
  if (duotone) return <SignInAltRegularDuotone ref={ref} {...rest} />;
  return <SignInAltRegular ref={ref} {...rest} />;
}));

SignInAlt.displayName = 'SignInAlt';

// Triple export pattern (lucide-react style)
export { SignInAlt, SignInAlt as SignInAltIcon, SignInAlt as SiSignInAlt };
export default SignInAlt;
