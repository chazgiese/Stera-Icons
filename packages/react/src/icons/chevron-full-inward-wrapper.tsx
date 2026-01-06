import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullInwardIcon as RegularChevronFullInwardIcon } from './chevron-full-inward';
import { ChevronFullInwardIconDuotone as ChevronFullInwardIconDuotone } from './chevron-full-inward-duotone';
import { ChevronFullInwardIconBold as ChevronFullInwardIconBold } from './chevron-full-inward-bold';
import { ChevronFullInwardIconBoldDuotone as ChevronFullInwardIconBoldDuotone } from './chevron-full-inward-bold-duotone';
import { ChevronFullInwardIconFill as ChevronFullInwardIconFill } from './chevron-full-inward-fill';
import { ChevronFullInwardIconFillDuotone as ChevronFullInwardIconFillDuotone } from './chevron-full-inward-fill-duotone';

export interface ChevronFullInwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullInwardIcon = memo(forwardRef<SVGSVGElement, ChevronFullInwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullInwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullInwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullInwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullInwardIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullInwardIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullInwardIcon ref={ref} {...props} />;
}));

ChevronFullInwardIcon.displayName = 'ChevronFullInwardIcon';

export { ChevronFullInwardIcon };
