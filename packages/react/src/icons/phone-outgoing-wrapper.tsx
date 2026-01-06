import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneOutgoingIcon as RegularPhoneOutgoingIcon } from './phone-outgoing';
import { PhoneOutgoingIconDuotone as PhoneOutgoingIconDuotone } from './phone-outgoing-duotone';
import { PhoneOutgoingIconBold as PhoneOutgoingIconBold } from './phone-outgoing-bold';
import { PhoneOutgoingIconBoldDuotone as PhoneOutgoingIconBoldDuotone } from './phone-outgoing-bold-duotone';
import { PhoneOutgoingIconFill as PhoneOutgoingIconFill } from './phone-outgoing-fill';
import { PhoneOutgoingIconFillDuotone as PhoneOutgoingIconFillDuotone } from './phone-outgoing-fill-duotone';

export interface PhoneOutgoingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PhoneOutgoingIcon = memo(forwardRef<SVGSVGElement, PhoneOutgoingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PhoneOutgoingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PhoneOutgoingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PhoneOutgoingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PhoneOutgoingIconFill ref={ref} {...props} />;
  if (duotone) return <PhoneOutgoingIconDuotone ref={ref} {...props} />;
  return <RegularPhoneOutgoingIcon ref={ref} {...props} />;
}));

PhoneOutgoingIcon.displayName = 'PhoneOutgoingIcon';

export { PhoneOutgoingIcon };
