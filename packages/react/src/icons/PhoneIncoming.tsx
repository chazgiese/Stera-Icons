import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneIncomingRegular } from './PhoneIncomingRegular';
import { PhoneIncomingRegularDuotone } from './PhoneIncomingRegularDuotone';
import { PhoneIncomingBold } from './PhoneIncomingBold';
import { PhoneIncomingBoldDuotone } from './PhoneIncomingBoldDuotone';
import { PhoneIncomingFill } from './PhoneIncomingFill';
import { PhoneIncomingFillDuotone } from './PhoneIncomingFillDuotone';

export interface PhoneIncomingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PhoneIncoming with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PhoneIncomingRegular } from 'stera-icons/PhoneIncomingRegular';
 */
const PhoneIncoming = memo(forwardRef<SVGSVGElement, PhoneIncomingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneIncomingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PhoneIncomingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PhoneIncomingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PhoneIncomingFill ref={ref} {...rest} />;
  if (duotone) return <PhoneIncomingRegularDuotone ref={ref} {...rest} />;
  return <PhoneIncomingRegular ref={ref} {...rest} />;
}));

PhoneIncoming.displayName = 'PhoneIncoming';

export { PhoneIncoming };
