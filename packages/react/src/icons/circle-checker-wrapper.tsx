import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleCheckerIcon as RegularCircleCheckerIcon } from './circle-checker';
import { CircleCheckerIconBold } from './circle-checker-bold';
import { CircleCheckerIconFilled } from './circle-checker-filled';
import { CircleCheckerIconFilltone } from './circle-checker-filltone';
import { CircleCheckerIconLinetone } from './circle-checker-linetone';

export interface CircleCheckerIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleCheckerIcon = memo(forwardRef<SVGSVGElement, CircleCheckerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleCheckerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleCheckerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleCheckerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleCheckerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleCheckerIcon ref={ref} {...props} />;
  }
}));

CircleCheckerIcon.displayName = 'CircleCheckerIcon';

export { CircleCheckerIcon };
