import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleNotchIcon as RegularCircleNotchIcon } from './circle-notch';
import { CircleNotchIconBold } from './circle-notch-bold';
import { CircleNotchIconFilled } from './circle-notch-filled';
import { CircleNotchIconFilltone } from './circle-notch-filltone';
import { CircleNotchIconLinetone } from './circle-notch-linetone';

export interface CircleNotchIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleNotchIcon = memo(forwardRef<SVGSVGElement, CircleNotchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleNotchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleNotchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleNotchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleNotchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleNotchIcon ref={ref} {...props} />;
  }
}));

CircleNotchIcon.displayName = 'CircleNotchIcon';

export { CircleNotchIcon };
