import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullRightIcon as RegularChevronFullRightIcon } from './chevron-full-right';
import { ChevronFullRightIconDuotone as ChevronFullRightIconDuotone } from './chevron-full-right-duotone';
import { ChevronFullRightIconBold as ChevronFullRightIconBold } from './chevron-full-right-bold';
import { ChevronFullRightIconBoldDuotone as ChevronFullRightIconBoldDuotone } from './chevron-full-right-bold-duotone';
import { ChevronFullRightIconFill as ChevronFullRightIconFill } from './chevron-full-right-fill';
import { ChevronFullRightIconFillDuotone as ChevronFullRightIconFillDuotone } from './chevron-full-right-fill-duotone';

export interface ChevronFullRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullRightIcon ref={ref} {...props} />;
}));

ChevronFullRightIcon.displayName = 'ChevronFullRightIcon';

export { ChevronFullRightIcon };
