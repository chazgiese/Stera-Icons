import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleLeftIcon as RegularChevronCircleLeftIcon } from './chevron-circle-left';
import { ChevronCircleLeftIconDuotone as ChevronCircleLeftIconDuotone } from './chevron-circle-left-duotone';
import { ChevronCircleLeftIconBold as ChevronCircleLeftIconBold } from './chevron-circle-left-bold';
import { ChevronCircleLeftIconBoldDuotone as ChevronCircleLeftIconBoldDuotone } from './chevron-circle-left-bold-duotone';
import { ChevronCircleLeftIconFill as ChevronCircleLeftIconFill } from './chevron-circle-left-fill';
import { ChevronCircleLeftIconFillDuotone as ChevronCircleLeftIconFillDuotone } from './chevron-circle-left-fill-duotone';

export interface ChevronCircleLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronCircleLeftIcon = memo(forwardRef<SVGSVGElement, ChevronCircleLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronCircleLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronCircleLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronCircleLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronCircleLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronCircleLeftIcon ref={ref} {...props} />;
}));

ChevronCircleLeftIcon.displayName = 'ChevronCircleLeftIcon';

export { ChevronCircleLeftIcon };
