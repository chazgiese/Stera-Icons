import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineRightIcon as RegularArrowLineRightIcon } from './arrow-line-right';
import { ArrowLineRightIconDuotone as ArrowLineRightIconDuotone } from './arrow-line-right-duotone';
import { ArrowLineRightIconBold as ArrowLineRightIconBold } from './arrow-line-right-bold';
import { ArrowLineRightIconBoldDuotone as ArrowLineRightIconBoldDuotone } from './arrow-line-right-bold-duotone';
import { ArrowLineRightIconFill as ArrowLineRightIconFill } from './arrow-line-right-fill';
import { ArrowLineRightIconFillDuotone as ArrowLineRightIconFillDuotone } from './arrow-line-right-fill-duotone';

export interface ArrowLineRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLineRightIcon = memo(forwardRef<SVGSVGElement, ArrowLineRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLineRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLineRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLineRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLineRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowLineRightIcon ref={ref} {...props} />;
}));

ArrowLineRightIcon.displayName = 'ArrowLineRightIcon';

export { ArrowLineRightIcon };
