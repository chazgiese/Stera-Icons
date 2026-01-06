import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageSimpleIcon as RegularCubePackageSimpleIcon } from './cube-package-simple';
import { CubePackageSimpleIconDuotone as CubePackageSimpleIconDuotone } from './cube-package-simple-duotone';
import { CubePackageSimpleIconBold as CubePackageSimpleIconBold } from './cube-package-simple-bold';
import { CubePackageSimpleIconBoldDuotone as CubePackageSimpleIconBoldDuotone } from './cube-package-simple-bold-duotone';
import { CubePackageSimpleIconFill as CubePackageSimpleIconFill } from './cube-package-simple-fill';
import { CubePackageSimpleIconFillDuotone as CubePackageSimpleIconFillDuotone } from './cube-package-simple-fill-duotone';

export interface CubePackageSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CubePackageSimpleIcon = memo(forwardRef<SVGSVGElement, CubePackageSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubePackageSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CubePackageSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CubePackageSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CubePackageSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <CubePackageSimpleIconDuotone ref={ref} {...props} />;
  return <RegularCubePackageSimpleIcon ref={ref} {...props} />;
}));

CubePackageSimpleIcon.displayName = 'CubePackageSimpleIcon';

export { CubePackageSimpleIcon };
