import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalHighRegular } from './SignalHighRegular';
import { SignalHighRegularDuotone } from './SignalHighRegularDuotone';
import { SignalHighBold } from './SignalHighBold';
import { SignalHighBoldDuotone } from './SignalHighBoldDuotone';
import { SignalHighFill } from './SignalHighFill';
import { SignalHighFillDuotone } from './SignalHighFillDuotone';

export interface SignalHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalHighRegular } from 'stera-icons/SignalHighRegular';
 */
const SignalHigh = memo(forwardRef<SVGSVGElement, SignalHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalHighFill ref={ref} {...rest} />;
  if (duotone) return <SignalHighRegularDuotone ref={ref} {...rest} />;
  return <SignalHighRegular ref={ref} {...rest} />;
}));

SignalHigh.displayName = 'SignalHigh';

// Triple export pattern (lucide-react style)
export { SignalHigh, SignalHigh as SignalHighIcon, SignalHigh as SiSignalHigh };
