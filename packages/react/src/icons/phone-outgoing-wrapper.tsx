import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneOutgoingIcon as PhoneOutgoingIconRegular } from './phone-outgoing';
import { PhoneOutgoingIconBold } from './phone-outgoing-bold';
import { PhoneOutgoingIconFilled } from './phone-outgoing-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PhoneOutgoingIconRegular ref={ref} {...props} />;
  }
}));

PhoneOutgoingIcon.displayName = 'PhoneOutgoingIcon';

export { PhoneOutgoingIcon };
