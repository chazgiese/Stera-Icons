import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneRegular } from './PhoneRegular';
import { PhoneRegularDuotone } from './PhoneRegularDuotone';
import { PhoneBold } from './PhoneBold';
import { PhoneBoldDuotone } from './PhoneBoldDuotone';
import { PhoneFill } from './PhoneFill';
import { PhoneFillDuotone } from './PhoneFillDuotone';

export interface PhoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Phone with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PhoneRegular } from 'stera-icons/PhoneRegular';
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

export { Phone };
