import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneIncomingIcon as PhoneIncomingIconRegular } from './phone-incoming';
import { PhoneIncomingIconBold } from './phone-incoming-bold';
import { PhoneIncomingIconFilled } from './phone-incoming-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PhoneIncomingIconRegular ref={ref} {...props} />;
  }
}));

PhoneIncomingIcon.displayName = 'PhoneIncomingIcon';

export { PhoneIncomingIcon };
