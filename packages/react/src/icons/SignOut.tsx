import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignOutRegular } from './SignOutRegular';
import { SignOutRegularDuotone } from './SignOutRegularDuotone';
import { SignOutBold } from './SignOutBold';
import { SignOutBoldDuotone } from './SignOutBoldDuotone';
import { SignOutFill } from './SignOutFill';
import { SignOutFillDuotone } from './SignOutFillDuotone';

export interface SignOutProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignOut with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SignOutRegular } from 'stera-icons/SignOutRegular';
 */
const SignOut = memo(forwardRef<SVGSVGElement, SignOutProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignOutBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignOutBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignOutFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignOutFill ref={ref} {...rest} />;
  if (duotone) return <SignOutRegularDuotone ref={ref} {...rest} />;
  return <SignOutRegular ref={ref} {...rest} />;
}));

SignOut.displayName = 'SignOut';

export { SignOut };
