import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SortIcon as SortIconRegular } from './sort';
import { SortIconBold } from './sort-bold';
import { SortIconFilled } from './sort-filled';
import { SortIconFilltone } from './sort-filltone';
import { SortIconLinetone } from './sort-linetone';

export interface SortIconProps extends IconProps {
  variant?: IconVariant;
}

const SortIcon = memo(forwardRef<SVGSVGElement, SortIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SortIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SortIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SortIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SortIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SortIconRegular ref={ref} {...props} />;
  }
}));

SortIcon.displayName = 'SortIcon';

export { SortIcon };
