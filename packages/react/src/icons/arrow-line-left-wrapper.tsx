import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineLeftIcon as RegularArrowLineLeftIcon } from './arrow-line-left';
import { ArrowLineLeftIconDuotone as ArrowLineLeftIconDuotone } from './arrow-line-left-duotone';
import { ArrowLineLeftIconBold as ArrowLineLeftIconBold } from './arrow-line-left-bold';
import { ArrowLineLeftIconBoldDuotone as ArrowLineLeftIconBoldDuotone } from './arrow-line-left-bold-duotone';
import { ArrowLineLeftIconFill as ArrowLineLeftIconFill } from './arrow-line-left-fill';
import { ArrowLineLeftIconFillDuotone as ArrowLineLeftIconFillDuotone } from './arrow-line-left-fill-duotone';

export interface ArrowLineLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLineLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLineLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLineLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLineLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLineLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLineLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowLineLeftIcon ref={ref} {...props} />;
}));

ArrowLineLeftIcon.displayName = 'ArrowLineLeftIcon';

export { ArrowLineLeftIcon };
