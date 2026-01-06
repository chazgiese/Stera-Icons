import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCameraIcon as RegularScanCameraIcon } from './scan-camera';
import { ScanCameraIconDuotone as ScanCameraIconDuotone } from './scan-camera-duotone';
import { ScanCameraIconBold as ScanCameraIconBold } from './scan-camera-bold';
import { ScanCameraIconBoldDuotone as ScanCameraIconBoldDuotone } from './scan-camera-bold-duotone';
import { ScanCameraIconFill as ScanCameraIconFill } from './scan-camera-fill';
import { ScanCameraIconFillDuotone as ScanCameraIconFillDuotone } from './scan-camera-fill-duotone';

export interface ScanCameraIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScanCameraIcon = memo(forwardRef<SVGSVGElement, ScanCameraIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanCameraIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScanCameraIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScanCameraIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScanCameraIconFill ref={ref} {...props} />;
  if (duotone) return <ScanCameraIconDuotone ref={ref} {...props} />;
  return <RegularScanCameraIcon ref={ref} {...props} />;
}));

ScanCameraIcon.displayName = 'ScanCameraIcon';

export { ScanCameraIcon };
