import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanIcon as ScanIconRegular } from './scan';
import { ScanIconBold } from './scan-bold';
import { ScanIconFilled } from './scan-filled';
import { ScanIconFilltone } from './scan-filltone';
import { ScanIconLinetone } from './scan-linetone';

export interface ScanIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanIcon = memo(forwardRef<SVGSVGElement, ScanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanIconRegular ref={ref} {...props} />;
  }
}));

ScanIcon.displayName = 'ScanIcon';

export { ScanIcon };
