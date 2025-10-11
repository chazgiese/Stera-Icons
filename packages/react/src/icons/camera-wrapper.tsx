import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CameraIcon as CameraIconRegular } from './camera';
import { CameraIconBold } from './camera-bold';
import { CameraIconFilled } from './camera-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CameraIconRegular ref={ref} {...props} />;
  }
}));

CameraIcon.displayName = 'CameraIcon';

export { CameraIcon };
