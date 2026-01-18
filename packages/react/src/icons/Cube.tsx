import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubeRegular } from './CubeRegular';
import { CubeRegularDuotone } from './CubeRegularDuotone';
import { CubeBold } from './CubeBold';
import { CubeBoldDuotone } from './CubeBoldDuotone';
import { CubeFill } from './CubeFill';
import { CubeFillDuotone } from './CubeFillDuotone';

export interface CubeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cube - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubeRegular } from 'stera-icons/CubeRegular';
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
