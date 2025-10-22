import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PhoneOffIcon as RegularPhoneOffIcon } from './phone-off';
import { PhoneOffIconBold } from './phone-off-bold';
import { PhoneOffIconFilled } from './phone-off-filled';
import { PhoneOffIconFilltone } from './phone-off-filltone';
import { PhoneOffIconLinetone } from './phone-off-linetone';

export interface PhoneOffIconProps extends IconProps {
  variant?: IconVariant;
}

const PhoneOffIcon = memo(forwardRef<SVGSVGElement, PhoneOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PhoneOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PhoneOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PhoneOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PhoneOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPhoneOffIcon ref={ref} {...props} />;
  }
}));

PhoneOffIcon.displayName = 'PhoneOffIcon';

export { PhoneOffIcon };
