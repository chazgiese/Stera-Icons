import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleRightIcon as RegularChevronCircleRightIcon } from './chevron-circle-right';
import { ChevronCircleRightIconDuotone as ChevronCircleRightIconDuotone } from './chevron-circle-right-duotone';
import { ChevronCircleRightIconBold as ChevronCircleRightIconBold } from './chevron-circle-right-bold';
import { ChevronCircleRightIconBoldDuotone as ChevronCircleRightIconBoldDuotone } from './chevron-circle-right-bold-duotone';
import { ChevronCircleRightIconFill as ChevronCircleRightIconFill } from './chevron-circle-right-fill';
import { ChevronCircleRightIconFillDuotone as ChevronCircleRightIconFillDuotone } from './chevron-circle-right-fill-duotone';

export interface ChevronCircleRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronCircleRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronCircleRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronCircleRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronCircleRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronCircleRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronCircleRightIcon ref={ref} {...props} />;
}));

ChevronCircleRightIcon.displayName = 'ChevronCircleRightIcon';

export { ChevronCircleRightIcon };
