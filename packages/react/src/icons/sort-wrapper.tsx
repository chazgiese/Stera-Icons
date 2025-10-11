import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortIcon as SortIconRegular } from './sort';
import { SortIconBold } from './sort-bold';
import { SortIconFilled } from './sort-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SortIconRegular ref={ref} {...props} />;
  }
}));

SortIcon.displayName = 'SortIcon';

export { SortIcon };
