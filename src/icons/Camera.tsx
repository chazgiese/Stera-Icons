import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CameraRegular } from './CameraRegular';
import { CameraRegularDuotone } from './CameraRegularDuotone';
import { CameraBold } from './CameraBold';
import { CameraBoldDuotone } from './CameraBoldDuotone';
import { CameraFill } from './CameraFill';
import { CameraFillDuotone } from './CameraFillDuotone';

export interface CameraProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Camera - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CameraRegular } from 'stera-icons/icons/CameraRegular';
 */
const Camera = memo(forwardRef<SVGSVGElement, CameraProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CameraBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CameraBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CameraFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CameraFill ref={ref} {...rest} />;
  if (duotone) return <CameraRegularDuotone ref={ref} {...rest} />;
  return <CameraRegular ref={ref} {...rest} />;
}));

Camera.displayName = 'Camera';

// Triple export pattern (lucide-react style)
export { Camera, Camera as CameraIcon, Camera as SiCamera };
export default Camera;
