import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleDownIcon as RegularArrowCircleDownIcon } from './arrow-circle-down';
import { ArrowCircleDownIconDuotone as ArrowCircleDownIconDuotone } from './arrow-circle-down-duotone';
import { ArrowCircleDownIconBold as ArrowCircleDownIconBold } from './arrow-circle-down-bold';
import { ArrowCircleDownIconBoldDuotone as ArrowCircleDownIconBoldDuotone } from './arrow-circle-down-bold-duotone';
import { ArrowCircleDownIconFill as ArrowCircleDownIconFill } from './arrow-circle-down-fill';
import { ArrowCircleDownIconFillDuotone as ArrowCircleDownIconFillDuotone } from './arrow-circle-down-fill-duotone';

export interface ArrowCircleDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleDownIcon = memo(forwardRef<SVGSVGElement, ArrowCircleDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleDownIcon ref={ref} {...props} />;
}));

ArrowCircleDownIcon.displayName = 'ArrowCircleDownIcon';

export { ArrowCircleDownIcon };
