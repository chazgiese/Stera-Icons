import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullLeftIcon as RegularChevronFullLeftIcon } from './chevron-full-left';
import { ChevronFullLeftIconDuotone as ChevronFullLeftIconDuotone } from './chevron-full-left-duotone';
import { ChevronFullLeftIconBold as ChevronFullLeftIconBold } from './chevron-full-left-bold';
import { ChevronFullLeftIconBoldDuotone as ChevronFullLeftIconBoldDuotone } from './chevron-full-left-bold-duotone';
import { ChevronFullLeftIconFill as ChevronFullLeftIconFill } from './chevron-full-left-fill';
import { ChevronFullLeftIconFillDuotone as ChevronFullLeftIconFillDuotone } from './chevron-full-left-fill-duotone';

export interface ChevronFullLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullLeftIcon ref={ref} {...props} />;
}));

ChevronFullLeftIcon.displayName = 'ChevronFullLeftIcon';

export { ChevronFullLeftIcon };
