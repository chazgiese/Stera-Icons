import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareDownIcon as RegularChevronFullSquareDownIcon } from './chevron-full-square-down';
import { ChevronFullSquareDownIconDuotone as ChevronFullSquareDownIconDuotone } from './chevron-full-square-down-duotone';
import { ChevronFullSquareDownIconBold as ChevronFullSquareDownIconBold } from './chevron-full-square-down-bold';
import { ChevronFullSquareDownIconBoldDuotone as ChevronFullSquareDownIconBoldDuotone } from './chevron-full-square-down-bold-duotone';
import { ChevronFullSquareDownIconFill as ChevronFullSquareDownIconFill } from './chevron-full-square-down-fill';
import { ChevronFullSquareDownIconFillDuotone as ChevronFullSquareDownIconFillDuotone } from './chevron-full-square-down-fill-duotone';

export interface ChevronFullSquareDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullSquareDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullSquareDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullSquareDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullSquareDownIcon ref={ref} {...props} />;
}));

ChevronFullSquareDownIcon.displayName = 'ChevronFullSquareDownIcon';

export { ChevronFullSquareDownIcon };
