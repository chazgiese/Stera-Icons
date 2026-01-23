import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalZeroRegular } from './SignalZeroRegular.js';
import { SignalZeroRegularDuotone } from './SignalZeroRegularDuotone.js';
import { SignalZeroBold } from './SignalZeroBold.js';
import { SignalZeroBoldDuotone } from './SignalZeroBoldDuotone.js';
import { SignalZeroFill } from './SignalZeroFill.js';
import { SignalZeroFillDuotone } from './SignalZeroFillDuotone.js';

export interface SignalZeroProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalZero - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalZeroRegular } from 'stera-icons/icons/SignalZeroRegular';
 */
const SignalZero = memo(forwardRef<SVGSVGElement, SignalZeroProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalZeroBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalZeroBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalZeroFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalZeroFill ref={ref} {...rest} />;
  if (duotone) return <SignalZeroRegularDuotone ref={ref} {...rest} />;
  return <SignalZeroRegular ref={ref} {...rest} />;
}));

SignalZero.displayName = 'SignalZero';

// Triple export pattern (lucide-react style)
export { SignalZero, SignalZero as SignalZeroIcon, SignalZero as SiSignalZero };
export default SignalZero;
