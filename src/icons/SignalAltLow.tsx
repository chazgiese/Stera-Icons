import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalAltLowRegular } from './SignalAltLowRegular.js';
import { SignalAltLowRegularDuotone } from './SignalAltLowRegularDuotone.js';
import { SignalAltLowBold } from './SignalAltLowBold.js';
import { SignalAltLowBoldDuotone } from './SignalAltLowBoldDuotone.js';
import { SignalAltLowFill } from './SignalAltLowFill.js';
import { SignalAltLowFillDuotone } from './SignalAltLowFillDuotone.js';

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
