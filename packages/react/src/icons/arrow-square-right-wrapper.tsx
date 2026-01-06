import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareRightIcon as RegularArrowSquareRightIcon } from './arrow-square-right';
import { ArrowSquareRightIconDuotone as ArrowSquareRightIconDuotone } from './arrow-square-right-duotone';
import { ArrowSquareRightIconBold as ArrowSquareRightIconBold } from './arrow-square-right-bold';
import { ArrowSquareRightIconBoldDuotone as ArrowSquareRightIconBoldDuotone } from './arrow-square-right-bold-duotone';
import { ArrowSquareRightIconFill as ArrowSquareRightIconFill } from './arrow-square-right-fill';
import { ArrowSquareRightIconFillDuotone as ArrowSquareRightIconFillDuotone } from './arrow-square-right-fill-duotone';

export interface ArrowSquareRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareRightIcon ref={ref} {...props} />;
}));

ArrowSquareRightIcon.displayName = 'ArrowSquareRightIcon';

export { ArrowSquareRightIcon };
