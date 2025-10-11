import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubePackageIcon as CubePackageIconRegular } from './cube-package';
import { CubePackageIconBold } from './cube-package-bold';
import { CubePackageIconFilled } from './cube-package-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CubePackageIconRegular ref={ref} {...props} />;
  }
}));

CubePackageIcon.displayName = 'CubePackageIcon';

export { CubePackageIcon };
