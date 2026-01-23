import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PhoneRegular } from './PhoneRegular.js';
import { PhoneRegularDuotone } from './PhoneRegularDuotone.js';
import { PhoneBold } from './PhoneBold.js';
import { PhoneBoldDuotone } from './PhoneBoldDuotone.js';
import { PhoneFill } from './PhoneFill.js';
import { PhoneFillDuotone } from './PhoneFillDuotone.js';

export interface PhoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Phone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PhoneRegular } from 'stera-icons/icons/PhoneRegular';
 */
const Phone = memo(forwardRef<SVGSVGElement, PhoneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PhoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PhoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PhoneFill ref={ref} {...rest} />;
  if (duotone) return <PhoneRegularDuotone ref={ref} {...rest} />;
  return <PhoneRegular ref={ref} {...rest} />;
}));

Phone.displayName = 'Phone';

// Triple export pattern (lucide-react style)
export { Phone, Phone as PhoneIcon, Phone as SiPhone };
export default Phone;
