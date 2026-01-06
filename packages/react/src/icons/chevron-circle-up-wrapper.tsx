import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronCircleUpIcon as RegularChevronCircleUpIcon } from './chevron-circle-up';
import { ChevronCircleUpIconDuotone as ChevronCircleUpIconDuotone } from './chevron-circle-up-duotone';
import { ChevronCircleUpIconBold as ChevronCircleUpIconBold } from './chevron-circle-up-bold';
import { ChevronCircleUpIconBoldDuotone as ChevronCircleUpIconBoldDuotone } from './chevron-circle-up-bold-duotone';
import { ChevronCircleUpIconFill as ChevronCircleUpIconFill } from './chevron-circle-up-fill';
import { ChevronCircleUpIconFillDuotone as ChevronCircleUpIconFillDuotone } from './chevron-circle-up-fill-duotone';

export interface ChevronCircleUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronCircleUpIcon = memo(forwardRef<SVGSVGElement, ChevronCircleUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronCircleUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronCircleUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronCircleUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronCircleUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronCircleUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronCircleUpIcon ref={ref} {...props} />;
}));

ChevronCircleUpIcon.displayName = 'ChevronCircleUpIcon';

export { ChevronCircleUpIcon };
