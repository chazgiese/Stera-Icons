import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortAscendingIcon as SortAscendingIconRegular } from './sort-ascending';
import { SortAscendingIconBold } from './sort-ascending-bold';
import { SortAscendingIconFilled } from './sort-ascending-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SortAscendingIconRegular ref={ref} {...props} />;
  }
}));

SortAscendingIcon.displayName = 'SortAscendingIcon';

export { SortAscendingIcon };
