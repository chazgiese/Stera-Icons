import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalAltMediumRegular } from './SignalAltMediumRegular.js';
import { SignalAltMediumRegularDuotone } from './SignalAltMediumRegularDuotone.js';
import { SignalAltMediumBold } from './SignalAltMediumBold.js';
import { SignalAltMediumBoldDuotone } from './SignalAltMediumBoldDuotone.js';
import { SignalAltMediumFill } from './SignalAltMediumFill.js';
import { SignalAltMediumFillDuotone } from './SignalAltMediumFillDuotone.js';

export interface SignalAltMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalAltMedium - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalAltMediumRegular } from 'stera-icons/icons/SignalAltMediumRegular';
 */
const SignalAltMedium = memo(forwardRef<SVGSVGElement, SignalAltMediumProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalAltMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalAltMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalAltMediumFill ref={ref} {...rest} />;
  if (duotone) return <SignalAltMediumRegularDuotone ref={ref} {...rest} />;
  return <SignalAltMediumRegular ref={ref} {...rest} />;
}));

SignalAltMedium.displayName = 'SignalAltMedium';

// Triple export pattern (lucide-react style)
export { SignalAltMedium, SignalAltMedium as SignalAltMediumIcon, SignalAltMedium as SiSignalAltMedium };
export default SignalAltMedium;
