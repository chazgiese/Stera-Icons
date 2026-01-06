import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleLeftIcon as RegularChevronFullCircleLeftIcon } from './chevron-full-circle-left';
import { ChevronFullCircleLeftIconDuotone as ChevronFullCircleLeftIconDuotone } from './chevron-full-circle-left-duotone';
import { ChevronFullCircleLeftIconBold as ChevronFullCircleLeftIconBold } from './chevron-full-circle-left-bold';
import { ChevronFullCircleLeftIconBoldDuotone as ChevronFullCircleLeftIconBoldDuotone } from './chevron-full-circle-left-bold-duotone';
import { ChevronFullCircleLeftIconFill as ChevronFullCircleLeftIconFill } from './chevron-full-circle-left-fill';
import { ChevronFullCircleLeftIconFillDuotone as ChevronFullCircleLeftIconFillDuotone } from './chevron-full-circle-left-fill-duotone';

export interface ChevronFullCircleLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullCircleLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullCircleLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullCircleLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullCircleLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullCircleLeftIcon ref={ref} {...props} />;
}));

ChevronFullCircleLeftIcon.displayName = 'ChevronFullCircleLeftIcon';

export { ChevronFullCircleLeftIcon };
