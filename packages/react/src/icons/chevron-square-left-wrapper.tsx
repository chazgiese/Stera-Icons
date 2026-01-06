import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareLeftIcon as RegularChevronSquareLeftIcon } from './chevron-square-left';
import { ChevronSquareLeftIconDuotone as ChevronSquareLeftIconDuotone } from './chevron-square-left-duotone';
import { ChevronSquareLeftIconBold as ChevronSquareLeftIconBold } from './chevron-square-left-bold';
import { ChevronSquareLeftIconBoldDuotone as ChevronSquareLeftIconBoldDuotone } from './chevron-square-left-bold-duotone';
import { ChevronSquareLeftIconFill as ChevronSquareLeftIconFill } from './chevron-square-left-fill';
import { ChevronSquareLeftIconFillDuotone as ChevronSquareLeftIconFillDuotone } from './chevron-square-left-fill-duotone';

export interface ChevronSquareLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronSquareLeftIcon = memo(forwardRef<SVGSVGElement, ChevronSquareLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronSquareLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronSquareLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronSquareLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronSquareLeftIconDuotone ref={ref} {...props} />;
  return <RegularChevronSquareLeftIcon ref={ref} {...props} />;
}));

ChevronSquareLeftIcon.displayName = 'ChevronSquareLeftIcon';

export { ChevronSquareLeftIcon };
