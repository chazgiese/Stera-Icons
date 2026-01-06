import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleRightIcon as RegularArrowCircleRightIcon } from './arrow-circle-right';
import { ArrowCircleRightIconDuotone as ArrowCircleRightIconDuotone } from './arrow-circle-right-duotone';
import { ArrowCircleRightIconBold as ArrowCircleRightIconBold } from './arrow-circle-right-bold';
import { ArrowCircleRightIconBoldDuotone as ArrowCircleRightIconBoldDuotone } from './arrow-circle-right-bold-duotone';
import { ArrowCircleRightIconFill as ArrowCircleRightIconFill } from './arrow-circle-right-fill';
import { ArrowCircleRightIconFillDuotone as ArrowCircleRightIconFillDuotone } from './arrow-circle-right-fill-duotone';

export interface ArrowCircleRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleRightIcon = memo(forwardRef<SVGSVGElement, ArrowCircleRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleRightIcon ref={ref} {...props} />;
}));

ArrowCircleRightIcon.displayName = 'ArrowCircleRightIcon';

export { ArrowCircleRightIcon };
