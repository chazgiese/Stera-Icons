import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RotateCircleLeftIcon as RotateCircleLeftIconRegular } from './rotate-circle-left';
import { RotateCircleLeftIconBold } from './rotate-circle-left-bold';
import { RotateCircleLeftIconFilled } from './rotate-circle-left-filled';
import { RotateCircleLeftIconFilltone } from './rotate-circle-left-filltone';
import { RotateCircleLeftIconLinetone } from './rotate-circle-left-linetone';

export interface RotateCircleLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const RotateCircleLeftIcon = memo(forwardRef<SVGSVGElement, RotateCircleLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RotateCircleLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RotateCircleLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RotateCircleLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RotateCircleLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RotateCircleLeftIconRegular ref={ref} {...props} />;
  }
}));

RotateCircleLeftIcon.displayName = 'RotateCircleLeftIcon';

export { RotateCircleLeftIcon };
