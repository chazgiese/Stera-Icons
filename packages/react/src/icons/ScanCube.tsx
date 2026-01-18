import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCubeRegular } from './ScanCubeRegular';
import { ScanCubeRegularDuotone } from './ScanCubeRegularDuotone';
import { ScanCubeBold } from './ScanCubeBold';
import { ScanCubeBoldDuotone } from './ScanCubeBoldDuotone';
import { ScanCubeFill } from './ScanCubeFill';
import { ScanCubeFillDuotone } from './ScanCubeFillDuotone';

export interface ScanCubeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanCube - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanCubeRegular } from 'stera-icons/ScanCubeRegular';
 */
const ScanCube = memo(forwardRef<SVGSVGElement, ScanCubeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanCubeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanCubeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanCubeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanCubeFill ref={ref} {...rest} />;
  if (duotone) return <ScanCubeRegularDuotone ref={ref} {...rest} />;
  return <ScanCubeRegular ref={ref} {...rest} />;
}));

ScanCube.displayName = 'ScanCube';

// Triple export pattern (lucide-react style)
export { ScanCube, ScanCube as ScanCubeIcon, ScanCube as SiScanCube };
