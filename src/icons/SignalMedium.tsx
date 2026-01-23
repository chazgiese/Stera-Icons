import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignalMediumRegular } from './SignalMediumRegular.js';
import { SignalMediumRegularDuotone } from './SignalMediumRegularDuotone.js';
import { SignalMediumBold } from './SignalMediumBold.js';
import { SignalMediumBoldDuotone } from './SignalMediumBoldDuotone.js';
import { SignalMediumFill } from './SignalMediumFill.js';
import { SignalMediumFillDuotone } from './SignalMediumFillDuotone.js';

export interface SignalMediumProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalMedium - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalMediumRegular } from 'stera-icons/icons/SignalMediumRegular';
 */
const SignalMedium = memo(forwardRef<SVGSVGElement, SignalMediumProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalMediumBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalMediumBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalMediumFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalMediumFill ref={ref} {...rest} />;
  if (duotone) return <SignalMediumRegularDuotone ref={ref} {...rest} />;
  return <SignalMediumRegular ref={ref} {...rest} />;
}));

SignalMedium.displayName = 'SignalMedium';

// Triple export pattern (lucide-react style)
export { SignalMedium, SignalMedium as SignalMediumIcon, SignalMedium as SiSignalMedium };
export default SignalMedium;
