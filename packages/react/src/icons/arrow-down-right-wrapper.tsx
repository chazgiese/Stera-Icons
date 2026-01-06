import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownRightIcon as RegularArrowDownRightIcon } from './arrow-down-right';
import { ArrowDownRightIconDuotone as ArrowDownRightIconDuotone } from './arrow-down-right-duotone';
import { ArrowDownRightIconBold as ArrowDownRightIconBold } from './arrow-down-right-bold';
import { ArrowDownRightIconBoldDuotone as ArrowDownRightIconBoldDuotone } from './arrow-down-right-bold-duotone';
import { ArrowDownRightIconFill as ArrowDownRightIconFill } from './arrow-down-right-fill';
import { ArrowDownRightIconFillDuotone as ArrowDownRightIconFillDuotone } from './arrow-down-right-fill-duotone';

export interface ArrowDownRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowDownRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowDownRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowDownRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowDownRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowDownRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowDownRightIcon ref={ref} {...props} />;
}));

ArrowDownRightIcon.displayName = 'ArrowDownRightIcon';

export { ArrowDownRightIcon };
