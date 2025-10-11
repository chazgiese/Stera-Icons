import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortAscendingNarrowIcon as SortAscendingNarrowIconRegular } from './sort-ascending-narrow';
import { SortAscendingNarrowIconBold } from './sort-ascending-narrow-bold';
import { SortAscendingNarrowIconFilled } from './sort-ascending-narrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SortAscendingNarrowIconRegular ref={ref} {...props} />;
  }
}));

SortAscendingNarrowIcon.displayName = 'SortAscendingNarrowIcon';

export { SortAscendingNarrowIcon };
