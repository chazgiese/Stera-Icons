import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCameraRegular } from './ScanCameraRegular';
import { ScanCameraRegularDuotone } from './ScanCameraRegularDuotone';
import { ScanCameraBold } from './ScanCameraBold';
import { ScanCameraBoldDuotone } from './ScanCameraBoldDuotone';
import { ScanCameraFill } from './ScanCameraFill';
import { ScanCameraFillDuotone } from './ScanCameraFillDuotone';

export interface ScanCameraProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanCamera - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanCameraRegular } from 'stera-icons/ScanCameraRegular';
 */
const ScanCamera = memo(forwardRef<SVGSVGElement, ScanCameraProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanCameraBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanCameraBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanCameraFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanCameraFill ref={ref} {...rest} />;
  if (duotone) return <ScanCameraRegularDuotone ref={ref} {...rest} />;
  return <ScanCameraRegular ref={ref} {...rest} />;
}));

ScanCamera.displayName = 'ScanCamera';

// Triple export pattern (lucide-react style)
export { ScanCamera, ScanCamera as ScanCameraIcon, ScanCamera as SiScanCamera };
