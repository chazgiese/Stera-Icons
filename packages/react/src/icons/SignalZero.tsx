import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalZeroRegular } from './SignalZeroRegular';
import { SignalZeroRegularDuotone } from './SignalZeroRegularDuotone';
import { SignalZeroBold } from './SignalZeroBold';
import { SignalZeroBoldDuotone } from './SignalZeroBoldDuotone';
import { SignalZeroFill } from './SignalZeroFill';
import { SignalZeroFillDuotone } from './SignalZeroFillDuotone';

export interface SignalZeroProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalZero with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SignalZeroRegular } from 'stera-icons/SignalZeroRegular';
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

export { SignalZero };
