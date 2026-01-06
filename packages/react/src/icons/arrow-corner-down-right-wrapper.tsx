import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownRightIcon as RegularArrowCornerDownRightIcon } from './arrow-corner-down-right';
import { ArrowCornerDownRightIconDuotone as ArrowCornerDownRightIconDuotone } from './arrow-corner-down-right-duotone';
import { ArrowCornerDownRightIconBold as ArrowCornerDownRightIconBold } from './arrow-corner-down-right-bold';
import { ArrowCornerDownRightIconBoldDuotone as ArrowCornerDownRightIconBoldDuotone } from './arrow-corner-down-right-bold-duotone';
import { ArrowCornerDownRightIconFill as ArrowCornerDownRightIconFill } from './arrow-corner-down-right-fill';
import { ArrowCornerDownRightIconFillDuotone as ArrowCornerDownRightIconFillDuotone } from './arrow-corner-down-right-fill-duotone';

export interface ArrowCornerDownRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCornerDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowCornerDownRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCornerDownRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCornerDownRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCornerDownRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowCornerDownRightIcon ref={ref} {...props} />;
}));

ArrowCornerDownRightIcon.displayName = 'ArrowCornerDownRightIcon';

export { ArrowCornerDownRightIcon };
