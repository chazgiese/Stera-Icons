import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PhoneIcon as PhoneIconRegular } from './phone';
import { PhoneIconBold } from './phone-bold';
import { PhoneIconFilled } from './phone-filled';
import { PhoneIconFilltone } from './phone-filltone';
import { PhoneIconLinetone } from './phone-linetone';

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
    case 'filltone':
      return <PhoneIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PhoneIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PhoneIconRegular ref={ref} {...props} />;
  }
}));

PhoneIcon.displayName = 'PhoneIcon';

export { PhoneIcon };
