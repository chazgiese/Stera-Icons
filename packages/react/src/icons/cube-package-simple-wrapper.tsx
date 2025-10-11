import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageSimpleIcon as CubePackageSimpleIconRegular } from './cube-package-simple';
import { CubePackageSimpleIconBold } from './cube-package-simple-bold';
import { CubePackageSimpleIconFilled } from './cube-package-simple-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CubePackageSimpleIconRegular ref={ref} {...props} />;
  }
}));

CubePackageSimpleIcon.displayName = 'CubePackageSimpleIcon';

export { CubePackageSimpleIcon };
