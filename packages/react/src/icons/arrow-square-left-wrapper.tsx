import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareLeftIcon as RegularArrowSquareLeftIcon } from './arrow-square-left';
import { ArrowSquareLeftIconDuotone as ArrowSquareLeftIconDuotone } from './arrow-square-left-duotone';
import { ArrowSquareLeftIconBold as ArrowSquareLeftIconBold } from './arrow-square-left-bold';
import { ArrowSquareLeftIconBoldDuotone as ArrowSquareLeftIconBoldDuotone } from './arrow-square-left-bold-duotone';
import { ArrowSquareLeftIconFill as ArrowSquareLeftIconFill } from './arrow-square-left-fill';
import { ArrowSquareLeftIconFillDuotone as ArrowSquareLeftIconFillDuotone } from './arrow-square-left-fill-duotone';

export interface ArrowSquareLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareLeftIcon ref={ref} {...props} />;
}));

ArrowSquareLeftIcon.displayName = 'ArrowSquareLeftIcon';

export { ArrowSquareLeftIcon };
