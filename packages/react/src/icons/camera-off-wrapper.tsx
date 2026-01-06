import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CameraOffIcon as RegularCameraOffIcon } from './camera-off';
import { CameraOffIconDuotone as CameraOffIconDuotone } from './camera-off-duotone';
import { CameraOffIconBold as CameraOffIconBold } from './camera-off-bold';
import { CameraOffIconBoldDuotone as CameraOffIconBoldDuotone } from './camera-off-bold-duotone';
import { CameraOffIconFill as CameraOffIconFill } from './camera-off-fill';
import { CameraOffIconFillDuotone as CameraOffIconFillDuotone } from './camera-off-fill-duotone';

export interface CameraOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CameraOffIcon = memo(forwardRef<SVGSVGElement, CameraOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CameraOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CameraOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CameraOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CameraOffIconFill ref={ref} {...props} />;
  if (duotone) return <CameraOffIconDuotone ref={ref} {...props} />;
  return <RegularCameraOffIcon ref={ref} {...props} />;
}));

CameraOffIcon.displayName = 'CameraOffIcon';

export { CameraOffIcon };
