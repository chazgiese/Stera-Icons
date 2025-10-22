import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PhoneIncomingIcon as RegularPhoneIncomingIcon } from './phone-incoming';
import { PhoneIncomingIconBold } from './phone-incoming-bold';
import { PhoneIncomingIconFilled } from './phone-incoming-filled';
import { PhoneIncomingIconFilltone } from './phone-incoming-filltone';
import { PhoneIncomingIconLinetone } from './phone-incoming-linetone';

export interface PhoneIncomingIconProps extends IconProps {
  variant?: IconVariant;
}

const PhoneIncomingIcon = memo(forwardRef<SVGSVGElement, PhoneIncomingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PhoneIncomingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PhoneIncomingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PhoneIncomingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PhoneIncomingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPhoneIncomingIcon ref={ref} {...props} />;
  }
}));

PhoneIncomingIcon.displayName = 'PhoneIncomingIcon';

export { PhoneIncomingIcon };
