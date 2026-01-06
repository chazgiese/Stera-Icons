import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpRightIcon as RegularArrowCircleUpRightIcon } from './arrow-circle-up-right';
import { ArrowCircleUpRightIconDuotone as ArrowCircleUpRightIconDuotone } from './arrow-circle-up-right-duotone';
import { ArrowCircleUpRightIconBold as ArrowCircleUpRightIconBold } from './arrow-circle-up-right-bold';
import { ArrowCircleUpRightIconBoldDuotone as ArrowCircleUpRightIconBoldDuotone } from './arrow-circle-up-right-bold-duotone';
import { ArrowCircleUpRightIconFill as ArrowCircleUpRightIconFill } from './arrow-circle-up-right-fill';
import { ArrowCircleUpRightIconFillDuotone as ArrowCircleUpRightIconFillDuotone } from './arrow-circle-up-right-fill-duotone';

export interface ArrowCircleUpRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleUpRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleUpRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleUpRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleUpRightIcon ref={ref} {...props} />;
}));

ArrowCircleUpRightIcon.displayName = 'ArrowCircleUpRightIcon';

export { ArrowCircleUpRightIcon };
