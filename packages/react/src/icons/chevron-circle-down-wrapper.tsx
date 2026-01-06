import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleDownIcon as RegularChevronCircleDownIcon } from './chevron-circle-down';
import { ChevronCircleDownIconDuotone as ChevronCircleDownIconDuotone } from './chevron-circle-down-duotone';
import { ChevronCircleDownIconBold as ChevronCircleDownIconBold } from './chevron-circle-down-bold';
import { ChevronCircleDownIconBoldDuotone as ChevronCircleDownIconBoldDuotone } from './chevron-circle-down-bold-duotone';
import { ChevronCircleDownIconFill as ChevronCircleDownIconFill } from './chevron-circle-down-fill';
import { ChevronCircleDownIconFillDuotone as ChevronCircleDownIconFillDuotone } from './chevron-circle-down-fill-duotone';

export interface ChevronCircleDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronCircleDownIcon = memo(forwardRef<SVGSVGElement, ChevronCircleDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronCircleDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronCircleDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronCircleDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronCircleDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronCircleDownIcon ref={ref} {...props} />;
}));

ChevronCircleDownIcon.displayName = 'ChevronCircleDownIcon';

export { ChevronCircleDownIcon };
