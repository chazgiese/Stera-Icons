import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpDownIcon as RegularArrowUpDownIcon } from './arrow-up-down';
import { ArrowUpDownIconDuotone as ArrowUpDownIconDuotone } from './arrow-up-down-duotone';
import { ArrowUpDownIconBold as ArrowUpDownIconBold } from './arrow-up-down-bold';
import { ArrowUpDownIconBoldDuotone as ArrowUpDownIconBoldDuotone } from './arrow-up-down-bold-duotone';
import { ArrowUpDownIconFill as ArrowUpDownIconFill } from './arrow-up-down-fill';
import { ArrowUpDownIconFillDuotone as ArrowUpDownIconFillDuotone } from './arrow-up-down-fill-duotone';

export interface ArrowUpDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpDownIcon = memo(forwardRef<SVGSVGElement, ArrowUpDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpDownIcon ref={ref} {...props} />;
}));

ArrowUpDownIcon.displayName = 'ArrowUpDownIcon';

export { ArrowUpDownIcon };
