import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullDownIcon as RegularChevronFullDownIcon } from './chevron-full-down';
import { ChevronFullDownIconDuotone as ChevronFullDownIconDuotone } from './chevron-full-down-duotone';
import { ChevronFullDownIconBold as ChevronFullDownIconBold } from './chevron-full-down-bold';
import { ChevronFullDownIconBoldDuotone as ChevronFullDownIconBoldDuotone } from './chevron-full-down-bold-duotone';
import { ChevronFullDownIconFill as ChevronFullDownIconFill } from './chevron-full-down-fill';
import { ChevronFullDownIconFillDuotone as ChevronFullDownIconFillDuotone } from './chevron-full-down-fill-duotone';

export interface ChevronFullDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullDownIcon ref={ref} {...props} />;
}));

ChevronFullDownIcon.displayName = 'ChevronFullDownIcon';

export { ChevronFullDownIcon };
