import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpLeftIcon as RegularArrowCircleUpLeftIcon } from './arrow-circle-up-left';
import { ArrowCircleUpLeftIconDuotone as ArrowCircleUpLeftIconDuotone } from './arrow-circle-up-left-duotone';
import { ArrowCircleUpLeftIconBold as ArrowCircleUpLeftIconBold } from './arrow-circle-up-left-bold';
import { ArrowCircleUpLeftIconBoldDuotone as ArrowCircleUpLeftIconBoldDuotone } from './arrow-circle-up-left-bold-duotone';
import { ArrowCircleUpLeftIconFill as ArrowCircleUpLeftIconFill } from './arrow-circle-up-left-fill';
import { ArrowCircleUpLeftIconFillDuotone as ArrowCircleUpLeftIconFillDuotone } from './arrow-circle-up-left-fill-duotone';

export interface ArrowCircleUpLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleUpLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleUpLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleUpLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleUpLeftIcon ref={ref} {...props} />;
}));

ArrowCircleUpLeftIcon.displayName = 'ArrowCircleUpLeftIcon';

export { ArrowCircleUpLeftIcon };
