import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageIcon as RegularCubePackageIcon } from './cube-package';
import { CubePackageIconDuotone as CubePackageIconDuotone } from './cube-package-duotone';
import { CubePackageIconBold as CubePackageIconBold } from './cube-package-bold';
import { CubePackageIconBoldDuotone as CubePackageIconBoldDuotone } from './cube-package-bold-duotone';
import { CubePackageIconFill as CubePackageIconFill } from './cube-package-fill';
import { CubePackageIconFillDuotone as CubePackageIconFillDuotone } from './cube-package-fill-duotone';

export interface CubePackageIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CubePackageIcon = memo(forwardRef<SVGSVGElement, CubePackageIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubePackageIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CubePackageIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CubePackageIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CubePackageIconFill ref={ref} {...props} />;
  if (duotone) return <CubePackageIconDuotone ref={ref} {...props} />;
  return <RegularCubePackageIcon ref={ref} {...props} />;
}));

CubePackageIcon.displayName = 'CubePackageIcon';

export { CubePackageIcon };
