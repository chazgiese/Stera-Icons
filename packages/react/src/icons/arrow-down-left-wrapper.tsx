import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownLeftIcon as RegularArrowDownLeftIcon } from './arrow-down-left';
import { ArrowDownLeftIconDuotone as ArrowDownLeftIconDuotone } from './arrow-down-left-duotone';
import { ArrowDownLeftIconBold as ArrowDownLeftIconBold } from './arrow-down-left-bold';
import { ArrowDownLeftIconBoldDuotone as ArrowDownLeftIconBoldDuotone } from './arrow-down-left-bold-duotone';
import { ArrowDownLeftIconFill as ArrowDownLeftIconFill } from './arrow-down-left-fill';
import { ArrowDownLeftIconFillDuotone as ArrowDownLeftIconFillDuotone } from './arrow-down-left-fill-duotone';

export interface ArrowDownLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowDownLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowDownLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowDownLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowDownLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowDownLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowDownLeftIcon ref={ref} {...props} />;
}));

ArrowDownLeftIcon.displayName = 'ArrowDownLeftIcon';

export { ArrowDownLeftIcon };
