import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanTextIcon as RegularScanTextIcon } from './scan-text';
import { ScanTextIconBold } from './scan-text-bold';
import { ScanTextIconFilled } from './scan-text-filled';
import { ScanTextIconFilltone } from './scan-text-filltone';
import { ScanTextIconLinetone } from './scan-text-linetone';

export interface ScanTextIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanTextIcon = memo(forwardRef<SVGSVGElement, ScanTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanTextIcon ref={ref} {...props} />;
  }
}));

ScanTextIcon.displayName = 'ScanTextIcon';

export { ScanTextIcon };
