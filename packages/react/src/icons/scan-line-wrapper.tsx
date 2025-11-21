import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanLineIcon as RegularScanLineIcon } from './scan-line';
import { ScanLineIconBold } from './scan-line-bold';
import { ScanLineIconFilled } from './scan-line-filled';
import { ScanLineIconFilltone } from './scan-line-filltone';
import { ScanLineIconLinetone } from './scan-line-linetone';

export interface ScanLineIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanLineIcon = memo(forwardRef<SVGSVGElement, ScanLineIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanLineIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanLineIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanLineIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanLineIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanLineIcon ref={ref} {...props} />;
  }
}));

ScanLineIcon.displayName = 'ScanLineIcon';

export { ScanLineIcon };
