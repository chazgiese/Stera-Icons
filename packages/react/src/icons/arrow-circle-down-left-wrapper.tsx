import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownLeftIcon as RegularArrowCircleDownLeftIcon } from './arrow-circle-down-left';
import { ArrowCircleDownLeftIconDuotone as ArrowCircleDownLeftIconDuotone } from './arrow-circle-down-left-duotone';
import { ArrowCircleDownLeftIconBold as ArrowCircleDownLeftIconBold } from './arrow-circle-down-left-bold';
import { ArrowCircleDownLeftIconBoldDuotone as ArrowCircleDownLeftIconBoldDuotone } from './arrow-circle-down-left-bold-duotone';
import { ArrowCircleDownLeftIconFill as ArrowCircleDownLeftIconFill } from './arrow-circle-down-left-fill';
import { ArrowCircleDownLeftIconFillDuotone as ArrowCircleDownLeftIconFillDuotone } from './arrow-circle-down-left-fill-duotone';

export interface ArrowCircleDownLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleDownLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleDownLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleDownLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleDownLeftIcon ref={ref} {...props} />;
}));

ArrowCircleDownLeftIcon.displayName = 'ArrowCircleDownLeftIcon';

export { ArrowCircleDownLeftIcon };
