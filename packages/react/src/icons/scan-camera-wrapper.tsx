import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCameraIcon as ScanCameraIconRegular } from './scan-camera';
import { ScanCameraIconBold } from './scan-camera-bold';
import { ScanCameraIconFilled } from './scan-camera-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ScanCameraIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanCameraIcon = memo(forwardRef<SVGSVGElement, ScanCameraIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanCameraIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanCameraIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanCameraIconRegular ref={ref} {...props} />;
  }
}));

ScanCameraIcon.displayName = 'ScanCameraIcon';

export { ScanCameraIcon };
