import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CubePackageIcon as RegularCubePackageIcon } from './cube-package';
import { CubePackageIconBold } from './cube-package-bold';
import { CubePackageIconFilled } from './cube-package-filled';
import { CubePackageIconFilltone } from './cube-package-filltone';
import { CubePackageIconLinetone } from './cube-package-linetone';

export interface CubePackageIconProps extends IconProps {
  variant?: IconVariant;
}

const CubePackageIcon = memo(forwardRef<SVGSVGElement, CubePackageIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CubePackageIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CubePackageIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CubePackageIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CubePackageIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCubePackageIcon ref={ref} {...props} />;
  }
}));

CubePackageIcon.displayName = 'CubePackageIcon';

export { CubePackageIcon };
