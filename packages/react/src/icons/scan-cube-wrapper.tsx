import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanCubeIcon as ScanCubeIconRegular } from './scan-cube';
import { ScanCubeIconBold } from './scan-cube-bold';
import { ScanCubeIconFilled } from './scan-cube-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ScanCubeIconRegular ref={ref} {...props} />;
  }
}));

ScanCubeIcon.displayName = 'ScanCubeIcon';

export { ScanCubeIcon };
