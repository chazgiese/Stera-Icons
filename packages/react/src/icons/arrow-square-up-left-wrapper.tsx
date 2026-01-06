import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpLeftIcon as RegularArrowSquareUpLeftIcon } from './arrow-square-up-left';
import { ArrowSquareUpLeftIconDuotone as ArrowSquareUpLeftIconDuotone } from './arrow-square-up-left-duotone';
import { ArrowSquareUpLeftIconBold as ArrowSquareUpLeftIconBold } from './arrow-square-up-left-bold';
import { ArrowSquareUpLeftIconBoldDuotone as ArrowSquareUpLeftIconBoldDuotone } from './arrow-square-up-left-bold-duotone';
import { ArrowSquareUpLeftIconFill as ArrowSquareUpLeftIconFill } from './arrow-square-up-left-fill';
import { ArrowSquareUpLeftIconFillDuotone as ArrowSquareUpLeftIconFillDuotone } from './arrow-square-up-left-fill-duotone';

export interface ArrowSquareUpLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareUpLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareUpLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareUpLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareUpLeftIcon ref={ref} {...props} />;
}));

ArrowSquareUpLeftIcon.displayName = 'ArrowSquareUpLeftIcon';

export { ArrowSquareUpLeftIcon };
