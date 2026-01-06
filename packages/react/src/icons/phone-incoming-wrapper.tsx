import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneIncomingIcon as RegularPhoneIncomingIcon } from './phone-incoming';
import { PhoneIncomingIconDuotone as PhoneIncomingIconDuotone } from './phone-incoming-duotone';
import { PhoneIncomingIconBold as PhoneIncomingIconBold } from './phone-incoming-bold';
import { PhoneIncomingIconBoldDuotone as PhoneIncomingIconBoldDuotone } from './phone-incoming-bold-duotone';
import { PhoneIncomingIconFill as PhoneIncomingIconFill } from './phone-incoming-fill';
import { PhoneIncomingIconFillDuotone as PhoneIncomingIconFillDuotone } from './phone-incoming-fill-duotone';

export interface PhoneIncomingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PhoneIncomingIcon = memo(forwardRef<SVGSVGElement, PhoneIncomingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneIncomingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PhoneIncomingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PhoneIncomingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PhoneIncomingIconFill ref={ref} {...props} />;
  if (duotone) return <PhoneIncomingIconDuotone ref={ref} {...props} />;
  return <RegularPhoneIncomingIcon ref={ref} {...props} />;
}));

PhoneIncomingIcon.displayName = 'PhoneIncomingIcon';

export { PhoneIncomingIcon };
