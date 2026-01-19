import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageRegular } from './CubePackageRegular';
import { CubePackageRegularDuotone } from './CubePackageRegularDuotone';
import { CubePackageBold } from './CubePackageBold';
import { CubePackageBoldDuotone } from './CubePackageBoldDuotone';
import { CubePackageFill } from './CubePackageFill';
import { CubePackageFillDuotone } from './CubePackageFillDuotone';

export interface CubePackageProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubePackage - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubePackageRegular } from 'stera-icons/icons/CubePackageRegular';
 */
const CubePackage = memo(forwardRef<SVGSVGElement, CubePackageProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubePackageBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubePackageBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubePackageFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubePackageFill ref={ref} {...rest} />;
  if (duotone) return <CubePackageRegularDuotone ref={ref} {...rest} />;
  return <CubePackageRegular ref={ref} {...rest} />;
}));

CubePackage.displayName = 'CubePackage';

// Triple export pattern (lucide-react style)
export { CubePackage, CubePackage as CubePackageIcon, CubePackage as SiCubePackage };
export default CubePackage;
