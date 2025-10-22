import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanCubeIcon as ScanCubeIconRegular } from './scan-cube';
import { ScanCubeIconBold } from './scan-cube-bold';
import { ScanCubeIconFilled } from './scan-cube-filled';
import { ScanCubeIconFilltone } from './scan-cube-filltone';
import { ScanCubeIconLinetone } from './scan-cube-linetone';

export interface ScanCubeIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanCubeIcon = memo(forwardRef<SVGSVGElement, ScanCubeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanCubeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanCubeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanCubeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanCubeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanCubeIconRegular ref={ref} {...props} />;
  }
}));

ScanCubeIcon.displayName = 'ScanCubeIcon';

export { ScanCubeIcon };
