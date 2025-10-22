import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CameraOffIcon as CameraOffIconRegular } from './camera-off';
import { CameraOffIconBold } from './camera-off-bold';
import { CameraOffIconFilled } from './camera-off-filled';
import { CameraOffIconFilltone } from './camera-off-filltone';
import { CameraOffIconLinetone } from './camera-off-linetone';

export interface CameraOffIconProps extends IconProps {
  variant?: IconVariant;
}

const CameraOffIcon = memo(forwardRef<SVGSVGElement, CameraOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CameraOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CameraOffIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CameraOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CameraOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CameraOffIconRegular ref={ref} {...props} />;
  }
}));

CameraOffIcon.displayName = 'CameraOffIcon';

export { CameraOffIcon };
