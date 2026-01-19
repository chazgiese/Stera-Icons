import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneOffRegular } from './PhoneOffRegular';
import { PhoneOffRegularDuotone } from './PhoneOffRegularDuotone';
import { PhoneOffBold } from './PhoneOffBold';
import { PhoneOffBoldDuotone } from './PhoneOffBoldDuotone';
import { PhoneOffFill } from './PhoneOffFill';
import { PhoneOffFillDuotone } from './PhoneOffFillDuotone';

export interface PhoneOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PhoneOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PhoneOffRegular } from 'stera-icons/icons/PhoneOffRegular';
 */
const PhoneOff = memo(forwardRef<SVGSVGElement, PhoneOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PhoneOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PhoneOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PhoneOffFill ref={ref} {...rest} />;
  if (duotone) return <PhoneOffRegularDuotone ref={ref} {...rest} />;
  return <PhoneOffRegular ref={ref} {...rest} />;
}));

PhoneOff.displayName = 'PhoneOff';

// Triple export pattern (lucide-react style)
export { PhoneOff, PhoneOff as PhoneOffIcon, PhoneOff as SiPhoneOff };
