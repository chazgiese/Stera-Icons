import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareRightIcon as RegularChevronSquareRightIcon } from './chevron-square-right';
import { ChevronSquareRightIconDuotone as ChevronSquareRightIconDuotone } from './chevron-square-right-duotone';
import { ChevronSquareRightIconBold as ChevronSquareRightIconBold } from './chevron-square-right-bold';
import { ChevronSquareRightIconBoldDuotone as ChevronSquareRightIconBoldDuotone } from './chevron-square-right-bold-duotone';
import { ChevronSquareRightIconFill as ChevronSquareRightIconFill } from './chevron-square-right-fill';
import { ChevronSquareRightIconFillDuotone as ChevronSquareRightIconFillDuotone } from './chevron-square-right-fill-duotone';

export interface ChevronSquareRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronSquareRightIcon = memo(forwardRef<SVGSVGElement, ChevronSquareRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronSquareRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronSquareRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronSquareRightIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronSquareRightIconDuotone ref={ref} {...props} />;
  return <RegularChevronSquareRightIcon ref={ref} {...props} />;
}));

ChevronSquareRightIcon.displayName = 'ChevronSquareRightIcon';

export { ChevronSquareRightIcon };
