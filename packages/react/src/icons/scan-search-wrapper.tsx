import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanSearchIcon as ScanSearchIconRegular } from './scan-search';
import { ScanSearchIconBold } from './scan-search-bold';
import { ScanSearchIconFilled } from './scan-search-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ScanSearchIconRegular ref={ref} {...props} />;
  }
}));

ScanSearchIcon.displayName = 'ScanSearchIcon';

export { ScanSearchIcon };
