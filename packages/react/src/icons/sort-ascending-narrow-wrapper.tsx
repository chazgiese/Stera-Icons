import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SortAscendingNarrowIcon as RegularSortAscendingNarrowIcon } from './sort-ascending-narrow';
import { SortAscendingNarrowIconBold } from './sort-ascending-narrow-bold';
import { SortAscendingNarrowIconFilled } from './sort-ascending-narrow-filled';
import { SortAscendingNarrowIconFilltone } from './sort-ascending-narrow-filltone';
import { SortAscendingNarrowIconLinetone } from './sort-ascending-narrow-linetone';

export interface SortAscendingNarrowIconProps extends IconProps {
  variant?: IconVariant;
}

const SortAscendingNarrowIcon = memo(forwardRef<SVGSVGElement, SortAscendingNarrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SortAscendingNarrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SortAscendingNarrowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SortAscendingNarrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SortAscendingNarrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSortAscendingNarrowIcon ref={ref} {...props} />;
  }
}));

SortAscendingNarrowIcon.displayName = 'SortAscendingNarrowIcon';

export { SortAscendingNarrowIcon };
