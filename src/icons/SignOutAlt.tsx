import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutAltRegular } from './SignOutAltRegular';
import { SignOutAltRegularDuotone } from './SignOutAltRegularDuotone';
import { SignOutAltBold } from './SignOutAltBold';
import { SignOutAltBoldDuotone } from './SignOutAltBoldDuotone';
import { SignOutAltFill } from './SignOutAltFill';
import { SignOutAltFillDuotone } from './SignOutAltFillDuotone';

export interface SignOutAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignOutAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignOutAltRegular } from 'stera-icons/icons/SignOutAltRegular';
 */
const SignOutAlt = memo(forwardRef<SVGSVGElement, SignOutAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignOutAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignOutAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignOutAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignOutAltFill ref={ref} {...rest} />;
  if (duotone) return <SignOutAltRegularDuotone ref={ref} {...rest} />;
  return <SignOutAltRegular ref={ref} {...rest} />;
}));

SignOutAlt.displayName = 'SignOutAlt';

// Triple export pattern (lucide-react style)
export { SignOutAlt, SignOutAlt as SignOutAltIcon, SignOutAlt as SiSignOutAlt };
export default SignOutAlt;
