import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortNarrowIcon as RegularSortNarrowIcon } from './sort-narrow';
import { SortNarrowIconDuotone as SortNarrowIconDuotone } from './sort-narrow-duotone';
import { SortNarrowIconBold as SortNarrowIconBold } from './sort-narrow-bold';
import { SortNarrowIconBoldDuotone as SortNarrowIconBoldDuotone } from './sort-narrow-bold-duotone';
import { SortNarrowIconFill as SortNarrowIconFill } from './sort-narrow-fill';
import { SortNarrowIconFillDuotone as SortNarrowIconFillDuotone } from './sort-narrow-fill-duotone';

export interface SortNarrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SortNarrowIcon = memo(forwardRef<SVGSVGElement, SortNarrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortNarrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SortNarrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SortNarrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SortNarrowIconFill ref={ref} {...props} />;
  if (duotone) return <SortNarrowIconDuotone ref={ref} {...props} />;
  return <RegularSortNarrowIcon ref={ref} {...props} />;
}));

SortNarrowIcon.displayName = 'SortNarrowIcon';

export { SortNarrowIcon };
