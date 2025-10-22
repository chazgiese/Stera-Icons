import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotationLeftIcon as RegularRotationLeftIcon } from './rotation-left';
import { RotationLeftIconBold } from './rotation-left-bold';
import { RotationLeftIconFilled } from './rotation-left-filled';
import { RotationLeftIconFilltone } from './rotation-left-filltone';
import { RotationLeftIconLinetone } from './rotation-left-linetone';

export interface RotationLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const RotationLeftIcon = memo(forwardRef<SVGSVGElement, RotationLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotationLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotationLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotationLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotationLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRotationLeftIcon ref={ref} {...props} />;
  }
}));

RotationLeftIcon.displayName = 'RotationLeftIcon';

export { RotationLeftIcon };
