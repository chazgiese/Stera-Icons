import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownRightIcon as RegularArrowSquareDownRightIcon } from './arrow-square-down-right';
import { ArrowSquareDownRightIconDuotone as ArrowSquareDownRightIconDuotone } from './arrow-square-down-right-duotone';
import { ArrowSquareDownRightIconBold as ArrowSquareDownRightIconBold } from './arrow-square-down-right-bold';
import { ArrowSquareDownRightIconBoldDuotone as ArrowSquareDownRightIconBoldDuotone } from './arrow-square-down-right-bold-duotone';
import { ArrowSquareDownRightIconFill as ArrowSquareDownRightIconFill } from './arrow-square-down-right-fill';
import { ArrowSquareDownRightIconFillDuotone as ArrowSquareDownRightIconFillDuotone } from './arrow-square-down-right-fill-duotone';

export interface ArrowSquareDownRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareDownRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareDownRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareDownRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareDownRightIcon ref={ref} {...props} />;
}));

ArrowSquareDownRightIcon.displayName = 'ArrowSquareDownRightIcon';

export { ArrowSquareDownRightIcon };
