import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CubePackageSimpleIcon as CubePackageSimpleIconRegular } from './cube-package-simple';
import { CubePackageSimpleIconBold } from './cube-package-simple-bold';
import { CubePackageSimpleIconFilled } from './cube-package-simple-filled';
import { CubePackageSimpleIconFilltone } from './cube-package-simple-filltone';
import { CubePackageSimpleIconLinetone } from './cube-package-simple-linetone';

export interface CubePackageSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const CubePackageSimpleIcon = memo(forwardRef<SVGSVGElement, CubePackageSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CubePackageSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CubePackageSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CubePackageSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CubePackageSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CubePackageSimpleIconRegular ref={ref} {...props} />;
  }
}));

CubePackageSimpleIcon.displayName = 'CubePackageSimpleIcon';

export { CubePackageSimpleIcon };
