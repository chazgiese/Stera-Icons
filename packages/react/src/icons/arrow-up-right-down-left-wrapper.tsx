import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightDownLeftIcon as RegularArrowUpRightDownLeftIcon } from './arrow-up-right-down-left';
import { ArrowUpRightDownLeftIconDuotone as ArrowUpRightDownLeftIconDuotone } from './arrow-up-right-down-left-duotone';
import { ArrowUpRightDownLeftIconBold as ArrowUpRightDownLeftIconBold } from './arrow-up-right-down-left-bold';
import { ArrowUpRightDownLeftIconBoldDuotone as ArrowUpRightDownLeftIconBoldDuotone } from './arrow-up-right-down-left-bold-duotone';
import { ArrowUpRightDownLeftIconFill as ArrowUpRightDownLeftIconFill } from './arrow-up-right-down-left-fill';
import { ArrowUpRightDownLeftIconFillDuotone as ArrowUpRightDownLeftIconFillDuotone } from './arrow-up-right-down-left-fill-duotone';

export interface ArrowUpRightDownLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpRightDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowUpRightDownLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightDownLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpRightDownLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightDownLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpRightDownLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpRightDownLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpRightDownLeftIcon ref={ref} {...props} />;
}));

ArrowUpRightDownLeftIcon.displayName = 'ArrowUpRightDownLeftIcon';

export { ArrowUpRightDownLeftIcon };
