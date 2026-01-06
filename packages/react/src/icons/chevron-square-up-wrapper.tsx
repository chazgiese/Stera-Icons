import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronSquareUpIcon as RegularChevronSquareUpIcon } from './chevron-square-up';
import { ChevronSquareUpIconDuotone as ChevronSquareUpIconDuotone } from './chevron-square-up-duotone';
import { ChevronSquareUpIconBold as ChevronSquareUpIconBold } from './chevron-square-up-bold';
import { ChevronSquareUpIconBoldDuotone as ChevronSquareUpIconBoldDuotone } from './chevron-square-up-bold-duotone';
import { ChevronSquareUpIconFill as ChevronSquareUpIconFill } from './chevron-square-up-fill';
import { ChevronSquareUpIconFillDuotone as ChevronSquareUpIconFillDuotone } from './chevron-square-up-fill-duotone';

export interface ChevronSquareUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronSquareUpIcon = memo(forwardRef<SVGSVGElement, ChevronSquareUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronSquareUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronSquareUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronSquareUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronSquareUpIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronSquareUpIconDuotone ref={ref} {...props} />;
  return <RegularChevronSquareUpIcon ref={ref} {...props} />;
}));

ChevronSquareUpIcon.displayName = 'ChevronSquareUpIcon';

export { ChevronSquareUpIcon };
