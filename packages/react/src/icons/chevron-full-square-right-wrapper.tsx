import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareRightIcon as RegularChevronFullSquareRightIcon } from './chevron-full-square-right';
import { ChevronFullSquareRightIconDuotone as ChevronFullSquareRightIconDuotone } from './chevron-full-square-right-duotone';
import { ChevronFullSquareRightIconBold as ChevronFullSquareRightIconBold } from './chevron-full-square-right-bold';
import { ChevronFullSquareRightIconBoldDuotone as ChevronFullSquareRightIconBoldDuotone } from './chevron-full-square-right-bold-duotone';
import { ChevronFullSquareRightIconFill as ChevronFullSquareRightIconFill } from './chevron-full-square-right-fill';
import { ChevronFullSquareRightIconFillDuotone as ChevronFullSquareRightIconFillDuotone } from './chevron-full-square-right-fill-duotone';

export interface ChevronFullSquareRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullSquareRightIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullSquareRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullSquareRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullSquareRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullSquareRightIcon ref={ref} {...props} />;
}));

ChevronFullSquareRightIcon.displayName = 'ChevronFullSquareRightIcon';

export { ChevronFullSquareRightIcon };
