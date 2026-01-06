import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleLeftIcon as RegularArrowCircleLeftIcon } from './arrow-circle-left';
import { ArrowCircleLeftIconDuotone as ArrowCircleLeftIconDuotone } from './arrow-circle-left-duotone';
import { ArrowCircleLeftIconBold as ArrowCircleLeftIconBold } from './arrow-circle-left-bold';
import { ArrowCircleLeftIconBoldDuotone as ArrowCircleLeftIconBoldDuotone } from './arrow-circle-left-bold-duotone';
import { ArrowCircleLeftIconFill as ArrowCircleLeftIconFill } from './arrow-circle-left-fill';
import { ArrowCircleLeftIconFillDuotone as ArrowCircleLeftIconFillDuotone } from './arrow-circle-left-fill-duotone';

export interface ArrowCircleLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleLeftIcon ref={ref} {...props} />;
}));

ArrowCircleLeftIcon.displayName = 'ArrowCircleLeftIcon';

export { ArrowCircleLeftIcon };
