import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanPlusIcon as RegularScanPlusIcon } from './scan-plus';
import { ScanPlusIconBold } from './scan-plus-bold';
import { ScanPlusIconFilled } from './scan-plus-filled';
import { ScanPlusIconFilltone } from './scan-plus-filltone';
import { ScanPlusIconLinetone } from './scan-plus-linetone';

export interface ScanPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanPlusIcon = memo(forwardRef<SVGSVGElement, ScanPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanPlusIcon ref={ref} {...props} />;
  }
}));

ScanPlusIcon.displayName = 'ScanPlusIcon';

export { ScanPlusIcon };
