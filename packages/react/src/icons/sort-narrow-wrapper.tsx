import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortNarrowIcon as SortNarrowIconRegular } from './sort-narrow';
import { SortNarrowIconBold } from './sort-narrow-bold';
import { SortNarrowIconFilled } from './sort-narrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SortNarrowIconProps extends IconProps {
  variant?: IconVariant;
}

const SortNarrowIcon = memo(forwardRef<SVGSVGElement, SortNarrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SortNarrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SortNarrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SortNarrowIconRegular ref={ref} {...props} />;
  }
}));

SortNarrowIcon.displayName = 'SortNarrowIcon';

export { SortNarrowIcon };
