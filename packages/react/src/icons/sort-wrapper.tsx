import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortIcon as RegularSortIcon } from './sort';
import { SortIconDuotone as SortIconDuotone } from './sort-duotone';
import { SortIconBold as SortIconBold } from './sort-bold';
import { SortIconBoldDuotone as SortIconBoldDuotone } from './sort-bold-duotone';
import { SortIconFill as SortIconFill } from './sort-fill';
import { SortIconFillDuotone as SortIconFillDuotone } from './sort-fill-duotone';

export interface SortIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SortIcon = memo(forwardRef<SVGSVGElement, SortIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SortIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SortIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SortIconFill ref={ref} {...props} />;
  if (duotone) return <SortIconDuotone ref={ref} {...props} />;
  return <RegularSortIcon ref={ref} {...props} />;
}));

SortIcon.displayName = 'SortIcon';

export { SortIcon };
