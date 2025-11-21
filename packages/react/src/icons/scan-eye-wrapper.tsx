import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanEyeIcon as RegularScanEyeIcon } from './scan-eye';
import { ScanEyeIconBold } from './scan-eye-bold';
import { ScanEyeIconFilled } from './scan-eye-filled';
import { ScanEyeIconFilltone } from './scan-eye-filltone';
import { ScanEyeIconLinetone } from './scan-eye-linetone';

export interface ScanEyeIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanEyeIcon = memo(forwardRef<SVGSVGElement, ScanEyeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanEyeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanEyeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanEyeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanEyeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanEyeIcon ref={ref} {...props} />;
  }
}));

ScanEyeIcon.displayName = 'ScanEyeIcon';

export { ScanEyeIcon };
