import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareDownIcon as RegularChevronSquareDownIcon } from './chevron-square-down';
import { ChevronSquareDownIconDuotone as ChevronSquareDownIconDuotone } from './chevron-square-down-duotone';
import { ChevronSquareDownIconBold as ChevronSquareDownIconBold } from './chevron-square-down-bold';
import { ChevronSquareDownIconBoldDuotone as ChevronSquareDownIconBoldDuotone } from './chevron-square-down-bold-duotone';
import { ChevronSquareDownIconFill as ChevronSquareDownIconFill } from './chevron-square-down-fill';
import { ChevronSquareDownIconFillDuotone as ChevronSquareDownIconFillDuotone } from './chevron-square-down-fill-duotone';

export interface ChevronSquareDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronSquareDownIcon = memo(forwardRef<SVGSVGElement, ChevronSquareDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronSquareDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronSquareDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronSquareDownIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronSquareDownIconDuotone ref={ref} {...props} />;
  return <RegularChevronSquareDownIcon ref={ref} {...props} />;
}));

ChevronSquareDownIcon.displayName = 'ChevronSquareDownIcon';

export { ChevronSquareDownIcon };
