import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpRightIcon as RegularArrowCornerUpRightIcon } from './arrow-corner-up-right';
import { ArrowCornerUpRightIconDuotone as ArrowCornerUpRightIconDuotone } from './arrow-corner-up-right-duotone';
import { ArrowCornerUpRightIconBold as ArrowCornerUpRightIconBold } from './arrow-corner-up-right-bold';
import { ArrowCornerUpRightIconBoldDuotone as ArrowCornerUpRightIconBoldDuotone } from './arrow-corner-up-right-bold-duotone';
import { ArrowCornerUpRightIconFill as ArrowCornerUpRightIconFill } from './arrow-corner-up-right-fill';
import { ArrowCornerUpRightIconFillDuotone as ArrowCornerUpRightIconFillDuotone } from './arrow-corner-up-right-fill-duotone';

export interface ArrowCornerUpRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCornerUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowCornerUpRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerUpRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCornerUpRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCornerUpRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCornerUpRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCornerUpRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowCornerUpRightIcon ref={ref} {...props} />;
}));

ArrowCornerUpRightIcon.displayName = 'ArrowCornerUpRightIcon';

export { ArrowCornerUpRightIcon };
