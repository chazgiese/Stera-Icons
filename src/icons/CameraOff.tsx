import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CameraOffRegular } from './CameraOffRegular';
import { CameraOffRegularDuotone } from './CameraOffRegularDuotone';
import { CameraOffBold } from './CameraOffBold';
import { CameraOffBoldDuotone } from './CameraOffBoldDuotone';
import { CameraOffFill } from './CameraOffFill';
import { CameraOffFillDuotone } from './CameraOffFillDuotone';

export interface CameraOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CameraOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CameraOffRegular } from 'stera-icons/icons/CameraOffRegular';
 */
const CameraOff = memo(forwardRef<SVGSVGElement, CameraOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CameraOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CameraOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CameraOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CameraOffFill ref={ref} {...rest} />;
  if (duotone) return <CameraOffRegularDuotone ref={ref} {...rest} />;
  return <CameraOffRegular ref={ref} {...rest} />;
}));

CameraOff.displayName = 'CameraOff';

// Triple export pattern (lucide-react style)
export { CameraOff, CameraOff as CameraOffIcon, CameraOff as SiCameraOff };
export default CameraOff;
