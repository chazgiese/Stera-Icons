import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotateLeftIcon as RegularRotateLeftIcon } from './rotate-left';
import { RotateLeftIconBold } from './rotate-left-bold';
import { RotateLeftIconFilled } from './rotate-left-filled';
import { RotateLeftIconFilltone } from './rotate-left-filltone';
import { RotateLeftIconLinetone } from './rotate-left-linetone';

export interface RotateLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const RotateLeftIcon = memo(forwardRef<SVGSVGElement, RotateLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotateLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotateLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotateLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotateLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRotateLeftIcon ref={ref} {...props} />;
  }
}));

RotateLeftIcon.displayName = 'RotateLeftIcon';

export { RotateLeftIcon };
