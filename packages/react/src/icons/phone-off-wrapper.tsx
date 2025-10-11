import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneOffIcon as PhoneOffIconRegular } from './phone-off';
import { PhoneOffIconBold } from './phone-off-bold';
import { PhoneOffIconFilled } from './phone-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PhoneOffIconRegular ref={ref} {...props} />;
  }
}));

PhoneOffIcon.displayName = 'PhoneOffIcon';

export { PhoneOffIcon };
