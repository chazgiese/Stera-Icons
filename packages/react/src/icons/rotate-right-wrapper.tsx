import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotateRightIcon as RotateRightIconRegular } from './rotate-right';
import { RotateRightIconBold } from './rotate-right-bold';
import { RotateRightIconFilled } from './rotate-right-filled';
import { RotateRightIconFilltone } from './rotate-right-filltone';
import { RotateRightIconLinetone } from './rotate-right-linetone';

export interface RotateRightIconProps extends IconProps {
  variant?: IconVariant;
}

const RotateRightIcon = memo(forwardRef<SVGSVGElement, RotateRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotateRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotateRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotateRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotateRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RotateRightIconRegular ref={ref} {...props} />;
  }
}));

RotateRightIcon.displayName = 'RotateRightIcon';

export { RotateRightIcon };
