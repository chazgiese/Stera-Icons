import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleUpIcon as RegularChevronFullCircleUpIcon } from './chevron-full-circle-up';
import { ChevronFullCircleUpIconDuotone as ChevronFullCircleUpIconDuotone } from './chevron-full-circle-up-duotone';
import { ChevronFullCircleUpIconBold as ChevronFullCircleUpIconBold } from './chevron-full-circle-up-bold';
import { ChevronFullCircleUpIconBoldDuotone as ChevronFullCircleUpIconBoldDuotone } from './chevron-full-circle-up-bold-duotone';
import { ChevronFullCircleUpIconFill as ChevronFullCircleUpIconFill } from './chevron-full-circle-up-fill';
import { ChevronFullCircleUpIconFillDuotone as ChevronFullCircleUpIconFillDuotone } from './chevron-full-circle-up-fill-duotone';

export interface ChevronFullCircleUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullCircleUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullCircleUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullCircleUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullCircleUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullCircleUpIcon ref={ref} {...props} />;
}));

ChevronFullCircleUpIcon.displayName = 'ChevronFullCircleUpIcon';

export { ChevronFullCircleUpIcon };
