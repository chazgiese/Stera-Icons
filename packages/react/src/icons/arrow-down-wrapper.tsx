import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownIcon as RegularArrowDownIcon } from './arrow-down';
import { ArrowDownIconDuotone as ArrowDownIconDuotone } from './arrow-down-duotone';
import { ArrowDownIconBold as ArrowDownIconBold } from './arrow-down-bold';
import { ArrowDownIconBoldDuotone as ArrowDownIconBoldDuotone } from './arrow-down-bold-duotone';
import { ArrowDownIconFill as ArrowDownIconFill } from './arrow-down-fill';
import { ArrowDownIconFillDuotone as ArrowDownIconFillDuotone } from './arrow-down-fill-duotone';

export interface ArrowDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowDownIcon = memo(forwardRef<SVGSVGElement, ArrowDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowDownIcon ref={ref} {...props} />;
}));

ArrowDownIcon.displayName = 'ArrowDownIcon';

export { ArrowDownIcon };
