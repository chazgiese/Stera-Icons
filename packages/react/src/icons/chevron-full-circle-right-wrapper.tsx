import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleRightIcon as RegularChevronFullCircleRightIcon } from './chevron-full-circle-right';
import { ChevronFullCircleRightIconDuotone as ChevronFullCircleRightIconDuotone } from './chevron-full-circle-right-duotone';
import { ChevronFullCircleRightIconBold as ChevronFullCircleRightIconBold } from './chevron-full-circle-right-bold';
import { ChevronFullCircleRightIconBoldDuotone as ChevronFullCircleRightIconBoldDuotone } from './chevron-full-circle-right-bold-duotone';
import { ChevronFullCircleRightIconFill as ChevronFullCircleRightIconFill } from './chevron-full-circle-right-fill';
import { ChevronFullCircleRightIconFillDuotone as ChevronFullCircleRightIconFillDuotone } from './chevron-full-circle-right-fill-duotone';

export interface ChevronFullCircleRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullCircleRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullCircleRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullCircleRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullCircleRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullCircleRightIcon ref={ref} {...props} />;
}));

ChevronFullCircleRightIcon.displayName = 'ChevronFullCircleRightIcon';

export { ChevronFullCircleRightIcon };
