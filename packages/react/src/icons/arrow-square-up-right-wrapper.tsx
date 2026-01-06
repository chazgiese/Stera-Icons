import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpRightIcon as RegularArrowSquareUpRightIcon } from './arrow-square-up-right';
import { ArrowSquareUpRightIconDuotone as ArrowSquareUpRightIconDuotone } from './arrow-square-up-right-duotone';
import { ArrowSquareUpRightIconBold as ArrowSquareUpRightIconBold } from './arrow-square-up-right-bold';
import { ArrowSquareUpRightIconBoldDuotone as ArrowSquareUpRightIconBoldDuotone } from './arrow-square-up-right-bold-duotone';
import { ArrowSquareUpRightIconFill as ArrowSquareUpRightIconFill } from './arrow-square-up-right-fill';
import { ArrowSquareUpRightIconFillDuotone as ArrowSquareUpRightIconFillDuotone } from './arrow-square-up-right-fill-duotone';

export interface ArrowSquareUpRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareUpRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareUpRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareUpRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareUpRightIcon ref={ref} {...props} />;
}));

ArrowSquareUpRightIcon.displayName = 'ArrowSquareUpRightIcon';

export { ArrowSquareUpRightIcon };
