import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRightIcon as RegularArrowRightIcon } from './arrow-right';
import { ArrowRightIconDuotone as ArrowRightIconDuotone } from './arrow-right-duotone';
import { ArrowRightIconBold as ArrowRightIconBold } from './arrow-right-bold';
import { ArrowRightIconBoldDuotone as ArrowRightIconBoldDuotone } from './arrow-right-bold-duotone';
import { ArrowRightIconFill as ArrowRightIconFill } from './arrow-right-fill';
import { ArrowRightIconFillDuotone as ArrowRightIconFillDuotone } from './arrow-right-fill-duotone';

export interface ArrowRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowRightIcon = memo(forwardRef<SVGSVGElement, ArrowRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowRightIcon ref={ref} {...props} />;
}));

ArrowRightIcon.displayName = 'ArrowRightIcon';

export { ArrowRightIcon };
