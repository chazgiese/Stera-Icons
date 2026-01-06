import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownRightIcon as RegularArrowCircleDownRightIcon } from './arrow-circle-down-right';
import { ArrowCircleDownRightIconDuotone as ArrowCircleDownRightIconDuotone } from './arrow-circle-down-right-duotone';
import { ArrowCircleDownRightIconBold as ArrowCircleDownRightIconBold } from './arrow-circle-down-right-bold';
import { ArrowCircleDownRightIconBoldDuotone as ArrowCircleDownRightIconBoldDuotone } from './arrow-circle-down-right-bold-duotone';
import { ArrowCircleDownRightIconFill as ArrowCircleDownRightIconFill } from './arrow-circle-down-right-fill';
import { ArrowCircleDownRightIconFillDuotone as ArrowCircleDownRightIconFillDuotone } from './arrow-circle-down-right-fill-duotone';

export interface ArrowCircleDownRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleDownRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleDownRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleDownRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleDownRightIcon ref={ref} {...props} />;
}));

ArrowCircleDownRightIcon.displayName = 'ArrowCircleDownRightIcon';

export { ArrowCircleDownRightIcon };
