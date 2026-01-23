import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CubePackageSimpleRegular } from './CubePackageSimpleRegular.js';
import { CubePackageSimpleRegularDuotone } from './CubePackageSimpleRegularDuotone.js';
import { CubePackageSimpleBold } from './CubePackageSimpleBold.js';
import { CubePackageSimpleBoldDuotone } from './CubePackageSimpleBoldDuotone.js';
import { CubePackageSimpleFill } from './CubePackageSimpleFill.js';
import { CubePackageSimpleFillDuotone } from './CubePackageSimpleFillDuotone.js';

export interface CubePackageSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubePackageSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubePackageSimpleRegular } from 'stera-icons/icons/CubePackageSimpleRegular';
 */
const CubePackageSimple = memo(forwardRef<SVGSVGElement, CubePackageSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubePackageSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubePackageSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubePackageSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubePackageSimpleFill ref={ref} {...rest} />;
  if (duotone) return <CubePackageSimpleRegularDuotone ref={ref} {...rest} />;
  return <CubePackageSimpleRegular ref={ref} {...rest} />;
}));

CubePackageSimple.displayName = 'CubePackageSimple';

// Triple export pattern (lucide-react style)
export { CubePackageSimple, CubePackageSimple as CubePackageSimpleIcon, CubePackageSimple as SiCubePackageSimple };
export default CubePackageSimple;
