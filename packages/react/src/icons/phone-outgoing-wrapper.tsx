import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PhoneOutgoingIcon as RegularPhoneOutgoingIcon } from './phone-outgoing';
import { PhoneOutgoingIconBold } from './phone-outgoing-bold';
import { PhoneOutgoingIconFilled } from './phone-outgoing-filled';
import { PhoneOutgoingIconFilltone } from './phone-outgoing-filltone';
import { PhoneOutgoingIconLinetone } from './phone-outgoing-linetone';

export interface PhoneOutgoingIconProps extends IconProps {
  variant?: IconVariant;
}

const PhoneOutgoingIcon = memo(forwardRef<SVGSVGElement, PhoneOutgoingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PhoneOutgoingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PhoneOutgoingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PhoneOutgoingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PhoneOutgoingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPhoneOutgoingIcon ref={ref} {...props} />;
  }
}));

PhoneOutgoingIcon.displayName = 'PhoneOutgoingIcon';

export { PhoneOutgoingIcon };
