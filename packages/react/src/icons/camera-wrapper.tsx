import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CameraIcon as RegularCameraIcon } from './camera';
import { CameraIconBold } from './camera-bold';
import { CameraIconFilled } from './camera-filled';
import { CameraIconFilltone } from './camera-filltone';
import { CameraIconLinetone } from './camera-linetone';

export interface CameraIconProps extends IconProps {
  variant?: IconVariant;
}

const CameraIcon = memo(forwardRef<SVGSVGElement, CameraIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CameraIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CameraIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CameraIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CameraIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCameraIcon ref={ref} {...props} />;
  }
}));

CameraIcon.displayName = 'CameraIcon';

export { CameraIcon };
