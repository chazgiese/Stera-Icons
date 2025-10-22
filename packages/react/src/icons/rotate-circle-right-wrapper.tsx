import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotateCircleRightIcon as RotateCircleRightIconRegular } from './rotate-circle-right';
import { RotateCircleRightIconBold } from './rotate-circle-right-bold';
import { RotateCircleRightIconFilled } from './rotate-circle-right-filled';
import { RotateCircleRightIconFilltone } from './rotate-circle-right-filltone';
import { RotateCircleRightIconLinetone } from './rotate-circle-right-linetone';

export interface RotateCircleRightIconProps extends IconProps {
  variant?: IconVariant;
}

const RotateCircleRightIcon = memo(forwardRef<SVGSVGElement, RotateCircleRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotateCircleRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotateCircleRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotateCircleRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotateCircleRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RotateCircleRightIconRegular ref={ref} {...props} />;
  }
}));

RotateCircleRightIcon.displayName = 'RotateCircleRightIcon';

export { RotateCircleRightIcon };
