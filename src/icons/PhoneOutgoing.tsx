import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PhoneOutgoingRegular } from './PhoneOutgoingRegular.js';
import { PhoneOutgoingRegularDuotone } from './PhoneOutgoingRegularDuotone.js';
import { PhoneOutgoingBold } from './PhoneOutgoingBold.js';
import { PhoneOutgoingBoldDuotone } from './PhoneOutgoingBoldDuotone.js';
import { PhoneOutgoingFill } from './PhoneOutgoingFill.js';
import { PhoneOutgoingFillDuotone } from './PhoneOutgoingFillDuotone.js';

export interface PhoneOutgoingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PhoneOutgoing - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PhoneOutgoingRegular } from 'stera-icons/icons/PhoneOutgoingRegular';
 */
const PhoneOutgoing = memo(forwardRef<SVGSVGElement, PhoneOutgoingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneOutgoingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PhoneOutgoingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PhoneOutgoingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PhoneOutgoingFill ref={ref} {...rest} />;
  if (duotone) return <PhoneOutgoingRegularDuotone ref={ref} {...rest} />;
  return <PhoneOutgoingRegular ref={ref} {...rest} />;
}));

PhoneOutgoing.displayName = 'PhoneOutgoing';

// Triple export pattern (lucide-react style)
export { PhoneOutgoing, PhoneOutgoing as PhoneOutgoingIcon, PhoneOutgoing as SiPhoneOutgoing };
export default PhoneOutgoing;
