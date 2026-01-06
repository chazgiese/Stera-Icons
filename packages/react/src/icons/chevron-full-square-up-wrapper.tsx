import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullSquareUpIcon as RegularChevronFullSquareUpIcon } from './chevron-full-square-up';
import { ChevronFullSquareUpIconDuotone as ChevronFullSquareUpIconDuotone } from './chevron-full-square-up-duotone';
import { ChevronFullSquareUpIconBold as ChevronFullSquareUpIconBold } from './chevron-full-square-up-bold';
import { ChevronFullSquareUpIconBoldDuotone as ChevronFullSquareUpIconBoldDuotone } from './chevron-full-square-up-bold-duotone';
import { ChevronFullSquareUpIconFill as ChevronFullSquareUpIconFill } from './chevron-full-square-up-fill';
import { ChevronFullSquareUpIconFillDuotone as ChevronFullSquareUpIconFillDuotone } from './chevron-full-square-up-fill-duotone';

export interface ChevronFullSquareUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronFullSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronFullSquareUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullSquareUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronFullSquareUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronFullSquareUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronFullSquareUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronFullSquareUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronFullSquareUpIcon ref={ref} {...props} />;
}));

ChevronFullSquareUpIcon.displayName = 'ChevronFullSquareUpIcon';

export { ChevronFullSquareUpIcon };
