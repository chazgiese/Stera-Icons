import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalLowRegular } from './SignalLowRegular';
import { SignalLowRegularDuotone } from './SignalLowRegularDuotone';
import { SignalLowBold } from './SignalLowBold';
import { SignalLowBoldDuotone } from './SignalLowBoldDuotone';
import { SignalLowFill } from './SignalLowFill';
import { SignalLowFillDuotone } from './SignalLowFillDuotone';

export interface SignalLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalLow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalLowRegular } from 'stera-icons/SignalLowRegular';
 */
const SignalLow = memo(forwardRef<SVGSVGElement, SignalLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalLowFill ref={ref} {...rest} />;
  if (duotone) return <SignalLowRegularDuotone ref={ref} {...rest} />;
  return <SignalLowRegular ref={ref} {...rest} />;
}));

SignalLow.displayName = 'SignalLow';

// Triple export pattern (lucide-react style)
export { SignalLow, SignalLow as SignalLowIcon, SignalLow as SiSignalLow };
