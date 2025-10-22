import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotationRightIcon as RotationRightIconRegular } from './rotation-right';
import { RotationRightIconBold } from './rotation-right-bold';
import { RotationRightIconFilled } from './rotation-right-filled';
import { RotationRightIconFilltone } from './rotation-right-filltone';
import { RotationRightIconLinetone } from './rotation-right-linetone';

export interface RotationRightIconProps extends IconProps {
  variant?: IconVariant;
}

const RotationRightIcon = memo(forwardRef<SVGSVGElement, RotationRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotationRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotationRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotationRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotationRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RotationRightIconRegular ref={ref} {...props} />;
  }
}));

RotationRightIcon.displayName = 'RotationRightIcon';

export { RotationRightIcon };
