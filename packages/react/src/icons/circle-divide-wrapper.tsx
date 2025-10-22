import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDivideIcon as RegularCircleDivideIcon } from './circle-divide';
import { CircleDivideIconBold } from './circle-divide-bold';
import { CircleDivideIconFilled } from './circle-divide-filled';
import { CircleDivideIconFilltone } from './circle-divide-filltone';
import { CircleDivideIconLinetone } from './circle-divide-linetone';

export interface CircleDivideIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDivideIcon = memo(forwardRef<SVGSVGElement, CircleDivideIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDivideIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDivideIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleDivideIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDivideIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleDivideIcon ref={ref} {...props} />;
  }
}));

CircleDivideIcon.displayName = 'CircleDivideIcon';

export { CircleDivideIcon };
