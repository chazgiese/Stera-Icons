import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CameraIcon as RegularCameraIcon } from './camera';
import { CameraIconDuotone as CameraIconDuotone } from './camera-duotone';
import { CameraIconBold as CameraIconBold } from './camera-bold';
import { CameraIconBoldDuotone as CameraIconBoldDuotone } from './camera-bold-duotone';
import { CameraIconFill as CameraIconFill } from './camera-fill';
import { CameraIconFillDuotone as CameraIconFillDuotone } from './camera-fill-duotone';

export interface CameraIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CameraIcon = memo(forwardRef<SVGSVGElement, CameraIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CameraIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CameraIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CameraIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CameraIconFill ref={ref} {...props} />;
  if (duotone) return <CameraIconDuotone ref={ref} {...props} />;
  return <RegularCameraIcon ref={ref} {...props} />;
}));

CameraIcon.displayName = 'CameraIcon';

export { CameraIcon };
