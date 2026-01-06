import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortAscendingNarrowIcon as RegularSortAscendingNarrowIcon } from './sort-ascending-narrow';
import { SortAscendingNarrowIconDuotone as SortAscendingNarrowIconDuotone } from './sort-ascending-narrow-duotone';
import { SortAscendingNarrowIconBold as SortAscendingNarrowIconBold } from './sort-ascending-narrow-bold';
import { SortAscendingNarrowIconBoldDuotone as SortAscendingNarrowIconBoldDuotone } from './sort-ascending-narrow-bold-duotone';
import { SortAscendingNarrowIconFill as SortAscendingNarrowIconFill } from './sort-ascending-narrow-fill';
import { SortAscendingNarrowIconFillDuotone as SortAscendingNarrowIconFillDuotone } from './sort-ascending-narrow-fill-duotone';

export interface SortAscendingNarrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SortAscendingNarrowIcon = memo(forwardRef<SVGSVGElement, SortAscendingNarrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortAscendingNarrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SortAscendingNarrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SortAscendingNarrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SortAscendingNarrowIconFill ref={ref} {...props} />;
  if (duotone) return <SortAscendingNarrowIconDuotone ref={ref} {...props} />;
  return <RegularSortAscendingNarrowIcon ref={ref} {...props} />;
}));

SortAscendingNarrowIcon.displayName = 'SortAscendingNarrowIcon';

export { SortAscendingNarrowIcon };
