import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PhoneIcon as PhoneIconRegular } from './phone';
import { PhoneIconBold } from './phone-bold';
import { PhoneIconFilled } from './phone-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PhoneIconProps extends IconProps {
  variant?: IconVariant;
}

const PhoneIcon = memo(forwardRef<SVGSVGElement, PhoneIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PhoneIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PhoneIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PhoneIconRegular ref={ref} {...props} />;
  }
}));

PhoneIcon.displayName = 'PhoneIcon';

export { PhoneIcon };
