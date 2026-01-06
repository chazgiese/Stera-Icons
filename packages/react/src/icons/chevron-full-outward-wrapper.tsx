import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullOutwardIcon as RegularChevronFullOutwardIcon } from './chevron-full-outward';
import { ChevronFullOutwardIconDuotone as ChevronFullOutwardIconDuotone } from './chevron-full-outward-duotone';
import { ChevronFullOutwardIconBold as ChevronFullOutwardIconBold } from './chevron-full-outward-bold';
import { ChevronFullOutwardIconBoldDuotone as ChevronFullOutwardIconBoldDuotone } from './chevron-full-outward-bold-duotone';
import { ChevronFullOutwardIconFill as ChevronFullOutwardIconFill } from './chevron-full-outward-fill';
import { ChevronFullOutwardIconFillDuotone as ChevronFullOutwardIconFillDuotone } from './chevron-full-outward-fill-duotone';

export interface ChevronFullOutwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullOutwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullOutwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullOutwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullOutwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullOutwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullOutwardIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullOutwardIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullOutwardIcon ref={ref} {...props} />;
}));

ChevronFullOutwardIcon.displayName = 'ChevronFullOutwardIcon';

export { ChevronFullOutwardIcon };
