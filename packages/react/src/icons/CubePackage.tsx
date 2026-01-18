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
 * CubePackage with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CubePackageRegular } from 'stera-icons/CubePackageRegular';
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

export { CubePackage };
