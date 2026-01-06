import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineDownIcon as RegularArrowLineDownIcon } from './arrow-line-down';
import { ArrowLineDownIconDuotone as ArrowLineDownIconDuotone } from './arrow-line-down-duotone';
import { ArrowLineDownIconBold as ArrowLineDownIconBold } from './arrow-line-down-bold';
import { ArrowLineDownIconBoldDuotone as ArrowLineDownIconBoldDuotone } from './arrow-line-down-bold-duotone';
import { ArrowLineDownIconFill as ArrowLineDownIconFill } from './arrow-line-down-fill';
import { ArrowLineDownIconFillDuotone as ArrowLineDownIconFillDuotone } from './arrow-line-down-fill-duotone';

export interface ArrowLineDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLineDownIcon = memo(forwardRef<SVGSVGElement, ArrowLineDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLineDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLineDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLineDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLineDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowLineDownIcon ref={ref} {...props} />;
}));

ArrowLineDownIcon.displayName = 'ArrowLineDownIcon';

export { ArrowLineDownIcon };
