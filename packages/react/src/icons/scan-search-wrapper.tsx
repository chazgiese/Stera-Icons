import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScanSearchIcon as RegularScanSearchIcon } from './scan-search';
import { ScanSearchIconBold } from './scan-search-bold';
import { ScanSearchIconFilled } from './scan-search-filled';
import { ScanSearchIconFilltone } from './scan-search-filltone';
import { ScanSearchIconLinetone } from './scan-search-linetone';

export interface ScanSearchIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanSearchIcon = memo(forwardRef<SVGSVGElement, ScanSearchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanSearchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanSearchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScanSearchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScanSearchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScanSearchIcon ref={ref} {...props} />;
  }
}));

ScanSearchIcon.displayName = 'ScanSearchIcon';

export { ScanSearchIcon };
