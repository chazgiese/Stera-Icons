import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanFaceIcon as RegularScanFaceIcon } from './scan-face';
import { ScanFaceIconBold } from './scan-face-bold';
import { ScanFaceIconFilled } from './scan-face-filled';
import { ScanFaceIconFilltone } from './scan-face-filltone';
import { ScanFaceIconLinetone } from './scan-face-linetone';

export interface ScanFaceIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanFaceIcon = memo(forwardRef<SVGSVGElement, ScanFaceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanFaceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanFaceIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanFaceIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanFaceIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanFaceIcon ref={ref} {...props} />;
  }
}));

ScanFaceIcon.displayName = 'ScanFaceIcon';

export { ScanFaceIcon };
