import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SortAscendingIcon as RegularSortAscendingIcon } from './sort-ascending';
import { SortAscendingIconBold } from './sort-ascending-bold';
import { SortAscendingIconFilled } from './sort-ascending-filled';
import { SortAscendingIconFilltone } from './sort-ascending-filltone';
import { SortAscendingIconLinetone } from './sort-ascending-linetone';

export interface SortAscendingIconProps extends IconProps {
  variant?: IconVariant;
}

const SortAscendingIcon = memo(forwardRef<SVGSVGElement, SortAscendingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SortAscendingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SortAscendingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SortAscendingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SortAscendingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSortAscendingIcon ref={ref} {...props} />;
  }
}));

SortAscendingIcon.displayName = 'SortAscendingIcon';

export { SortAscendingIcon };
