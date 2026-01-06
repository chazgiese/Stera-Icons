import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareLeftIcon as RegularChevronFullSquareLeftIcon } from './chevron-full-square-left';
import { ChevronFullSquareLeftIconDuotone as ChevronFullSquareLeftIconDuotone } from './chevron-full-square-left-duotone';
import { ChevronFullSquareLeftIconBold as ChevronFullSquareLeftIconBold } from './chevron-full-square-left-bold';
import { ChevronFullSquareLeftIconBoldDuotone as ChevronFullSquareLeftIconBoldDuotone } from './chevron-full-square-left-bold-duotone';
import { ChevronFullSquareLeftIconFill as ChevronFullSquareLeftIconFill } from './chevron-full-square-left-fill';
import { ChevronFullSquareLeftIconFillDuotone as ChevronFullSquareLeftIconFillDuotone } from './chevron-full-square-left-fill-duotone';

export interface ChevronFullSquareLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullSquareLeftIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullSquareLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullSquareLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullSquareLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullSquareLeftIcon ref={ref} {...props} />;
}));

ChevronFullSquareLeftIcon.displayName = 'ChevronFullSquareLeftIcon';

export { ChevronFullSquareLeftIcon };
