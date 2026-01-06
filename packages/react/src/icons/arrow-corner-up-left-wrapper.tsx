import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerUpLeftIcon as RegularArrowCornerUpLeftIcon } from './arrow-corner-up-left';
import { ArrowCornerUpLeftIconDuotone as ArrowCornerUpLeftIconDuotone } from './arrow-corner-up-left-duotone';
import { ArrowCornerUpLeftIconBold as ArrowCornerUpLeftIconBold } from './arrow-corner-up-left-bold';
import { ArrowCornerUpLeftIconBoldDuotone as ArrowCornerUpLeftIconBoldDuotone } from './arrow-corner-up-left-bold-duotone';
import { ArrowCornerUpLeftIconFill as ArrowCornerUpLeftIconFill } from './arrow-corner-up-left-fill';
import { ArrowCornerUpLeftIconFillDuotone as ArrowCornerUpLeftIconFillDuotone } from './arrow-corner-up-left-fill-duotone';

export interface ArrowCornerUpLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowCornerUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowCornerUpLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerUpLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowCornerUpLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowCornerUpLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowCornerUpLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowCornerUpLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowCornerUpLeftIcon ref={ref} {...props} />;
}));

ArrowCornerUpLeftIcon.displayName = 'ArrowCornerUpLeftIcon';

export { ArrowCornerUpLeftIcon };
