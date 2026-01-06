import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronLeftIcon as RegularChevronLeftIcon } from './chevron-left';
import { ChevronLeftIconDuotone as ChevronLeftIconDuotone } from './chevron-left-duotone';
import { ChevronLeftIconBold as ChevronLeftIconBold } from './chevron-left-bold';
import { ChevronLeftIconBoldDuotone as ChevronLeftIconBoldDuotone } from './chevron-left-bold-duotone';
import { ChevronLeftIconFill as ChevronLeftIconFill } from './chevron-left-fill';
import { ChevronLeftIconFillDuotone as ChevronLeftIconFillDuotone } from './chevron-left-fill-duotone';

export interface ChevronLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronLeftIcon = memo(forwardRef<SVGSVGElement, ChevronLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronLeftIcon ref={ref} {...props} />;
}));

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export { ChevronLeftIcon };
