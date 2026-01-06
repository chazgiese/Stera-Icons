import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleDownIcon as RegularChevronFullCircleDownIcon } from './chevron-full-circle-down';
import { ChevronFullCircleDownIconDuotone as ChevronFullCircleDownIconDuotone } from './chevron-full-circle-down-duotone';
import { ChevronFullCircleDownIconBold as ChevronFullCircleDownIconBold } from './chevron-full-circle-down-bold';
import { ChevronFullCircleDownIconBoldDuotone as ChevronFullCircleDownIconBoldDuotone } from './chevron-full-circle-down-bold-duotone';
import { ChevronFullCircleDownIconFill as ChevronFullCircleDownIconFill } from './chevron-full-circle-down-fill';
import { ChevronFullCircleDownIconFillDuotone as ChevronFullCircleDownIconFillDuotone } from './chevron-full-circle-down-fill-duotone';

export interface ChevronFullCircleDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullCircleDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullCircleDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullCircleDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullCircleDownIcon ref={ref} {...props} />;
}));

ChevronFullCircleDownIcon.displayName = 'ChevronFullCircleDownIcon';

export { ChevronFullCircleDownIcon };
