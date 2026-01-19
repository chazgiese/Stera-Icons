import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignalAltHighRegular } from './SignalAltHighRegular';
import { SignalAltHighRegularDuotone } from './SignalAltHighRegularDuotone';
import { SignalAltHighBold } from './SignalAltHighBold';
import { SignalAltHighBoldDuotone } from './SignalAltHighBoldDuotone';
import { SignalAltHighFill } from './SignalAltHighFill';
import { SignalAltHighFillDuotone } from './SignalAltHighFillDuotone';

export interface SignalAltHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignalAltHigh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignalAltHighRegular } from 'stera-icons/icons/SignalAltHighRegular';
 */
const SignalAltHigh = memo(forwardRef<SVGSVGElement, SignalAltHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignalAltHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignalAltHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignalAltHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignalAltHighFill ref={ref} {...rest} />;
  if (duotone) return <SignalAltHighRegularDuotone ref={ref} {...rest} />;
  return <SignalAltHighRegular ref={ref} {...rest} />;
}));

SignalAltHigh.displayName = 'SignalAltHigh';

// Triple export pattern (lucide-react style)
export { SignalAltHigh, SignalAltHigh as SignalAltHighIcon, SignalAltHigh as SiSignalAltHigh };
