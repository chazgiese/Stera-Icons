import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareDownIcon as RegularArrowSquareDownIcon } from './arrow-square-down';
import { ArrowSquareDownIconDuotone as ArrowSquareDownIconDuotone } from './arrow-square-down-duotone';
import { ArrowSquareDownIconBold as ArrowSquareDownIconBold } from './arrow-square-down-bold';
import { ArrowSquareDownIconBoldDuotone as ArrowSquareDownIconBoldDuotone } from './arrow-square-down-bold-duotone';
import { ArrowSquareDownIconFill as ArrowSquareDownIconFill } from './arrow-square-down-fill';
import { ArrowSquareDownIconFillDuotone as ArrowSquareDownIconFillDuotone } from './arrow-square-down-fill-duotone';

export interface ArrowSquareDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareDownIcon = memo(forwardRef<SVGSVGElement, ArrowSquareDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareDownIcon ref={ref} {...props} />;
}));

ArrowSquareDownIcon.displayName = 'ArrowSquareDownIcon';

export { ArrowSquareDownIcon };
