import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownLeftIcon as RegularArrowSquareDownLeftIcon } from './arrow-square-down-left';
import { ArrowSquareDownLeftIconDuotone as ArrowSquareDownLeftIconDuotone } from './arrow-square-down-left-duotone';
import { ArrowSquareDownLeftIconBold as ArrowSquareDownLeftIconBold } from './arrow-square-down-left-bold';
import { ArrowSquareDownLeftIconBoldDuotone as ArrowSquareDownLeftIconBoldDuotone } from './arrow-square-down-left-bold-duotone';
import { ArrowSquareDownLeftIconFill as ArrowSquareDownLeftIconFill } from './arrow-square-down-left-fill';
import { ArrowSquareDownLeftIconFillDuotone as ArrowSquareDownLeftIconFillDuotone } from './arrow-square-down-left-fill-duotone';

export interface ArrowSquareDownLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareDownLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareDownLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareDownLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareDownLeftIcon ref={ref} {...props} />;
}));

ArrowSquareDownLeftIcon.displayName = 'ArrowSquareDownLeftIcon';

export { ArrowSquareDownLeftIcon };
