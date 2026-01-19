import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalAltLowRegular } from './SignalAltLowRegular';
import { SignalAltLowRegularDuotone } from './SignalAltLowRegularDuotone';
import { SignalAltLowBold } from './SignalAltLowBold';
import { SignalAltLowBoldDuotone } from './SignalAltLowBoldDuotone';
import { SignalAltLowFill } from './SignalAltLowFill';
import { SignalAltLowFillDuotone } from './SignalAltLowFillDuotone';

export interface SignalAltLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalAltLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalAltLowRegular } from 'stera-icons/icons/SignalAltLowRegular';
 */
const SignalAltLow = memo(forwardRef<SVGSVGElement, SignalAltLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalAltLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalAltLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalAltLowFill ref={ref} {...rest} />;
  if (duotone) return <SignalAltLowRegularDuotone ref={ref} {...rest} />;
  return <SignalAltLowRegular ref={ref} {...rest} />;
}));

SignalAltLow.displayName = 'SignalAltLow';

// Triple export pattern (lucide-react style)
export { SignalAltLow, SignalAltLow as SignalAltLowIcon, SignalAltLow as SiSignalAltLow };
export default SignalAltLow;
