import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SortAscendingIcon as RegularSortAscendingIcon } from './sort-ascending';
import { SortAscendingIconDuotone as SortAscendingIconDuotone } from './sort-ascending-duotone';
import { SortAscendingIconBold as SortAscendingIconBold } from './sort-ascending-bold';
import { SortAscendingIconBoldDuotone as SortAscendingIconBoldDuotone } from './sort-ascending-bold-duotone';
import { SortAscendingIconFill as SortAscendingIconFill } from './sort-ascending-fill';
import { SortAscendingIconFillDuotone as SortAscendingIconFillDuotone } from './sort-ascending-fill-duotone';

export interface SortAscendingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SortAscendingIcon = memo(forwardRef<SVGSVGElement, SortAscendingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortAscendingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SortAscendingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SortAscendingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SortAscendingIconFill ref={ref} {...props} />;
  if (duotone) return <SortAscendingIconDuotone ref={ref} {...props} />;
  return <RegularSortAscendingIcon ref={ref} {...props} />;
}));

SortAscendingIcon.displayName = 'SortAscendingIcon';

export { SortAscendingIcon };
