import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CubeRegular } from './CubeRegular.js';
import { CubeRegularDuotone } from './CubeRegularDuotone.js';
import { CubeBold } from './CubeBold.js';
import { CubeBoldDuotone } from './CubeBoldDuotone.js';
import { CubeFill } from './CubeFill.js';
import { CubeFillDuotone } from './CubeFillDuotone.js';

export interface CubeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cube - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubeRegular } from 'stera-icons/icons/CubeRegular';
 */
const Cube = memo(forwardRef<SVGSVGElement, CubeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubeFill ref={ref} {...rest} />;
  if (duotone) return <CubeRegularDuotone ref={ref} {...rest} />;
  return <CubeRegular ref={ref} {...rest} />;
}));

Cube.displayName = 'Cube';

// Triple export pattern (lucide-react style)
export { Cube, Cube as CubeIcon, Cube as SiCube };
export default Cube;
