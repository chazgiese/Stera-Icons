import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpIcon as RegularArrowCircleUpIcon } from './arrow-circle-up';
import { ArrowCircleUpIconDuotone as ArrowCircleUpIconDuotone } from './arrow-circle-up-duotone';
import { ArrowCircleUpIconBold as ArrowCircleUpIconBold } from './arrow-circle-up-bold';
import { ArrowCircleUpIconBoldDuotone as ArrowCircleUpIconBoldDuotone } from './arrow-circle-up-bold-duotone';
import { ArrowCircleUpIconFill as ArrowCircleUpIconFill } from './arrow-circle-up-fill';
import { ArrowCircleUpIconFillDuotone as ArrowCircleUpIconFillDuotone } from './arrow-circle-up-fill-duotone';

export interface ArrowCircleUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCircleUpIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCircleUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCircleUpIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCircleUpIconDuotone ref={ref} {...props} />;
  return <RegularArrowCircleUpIcon ref={ref} {...props} />;
}));

ArrowCircleUpIcon.displayName = 'ArrowCircleUpIcon';

export { ArrowCircleUpIcon };
