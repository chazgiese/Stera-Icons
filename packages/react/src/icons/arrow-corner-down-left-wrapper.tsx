import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownLeftIcon as RegularArrowCornerDownLeftIcon } from './arrow-corner-down-left';
import { ArrowCornerDownLeftIconDuotone as ArrowCornerDownLeftIconDuotone } from './arrow-corner-down-left-duotone';
import { ArrowCornerDownLeftIconBold as ArrowCornerDownLeftIconBold } from './arrow-corner-down-left-bold';
import { ArrowCornerDownLeftIconBoldDuotone as ArrowCornerDownLeftIconBoldDuotone } from './arrow-corner-down-left-bold-duotone';
import { ArrowCornerDownLeftIconFill as ArrowCornerDownLeftIconFill } from './arrow-corner-down-left-fill';
import { ArrowCornerDownLeftIconFillDuotone as ArrowCornerDownLeftIconFillDuotone } from './arrow-corner-down-left-fill-duotone';

export interface ArrowCornerDownLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCornerDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCornerDownLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCornerDownLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCornerDownLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCornerDownLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowCornerDownLeftIcon ref={ref} {...props} />;
}));

ArrowCornerDownLeftIcon.displayName = 'ArrowCornerDownLeftIcon';

export { ArrowCornerDownLeftIcon };
