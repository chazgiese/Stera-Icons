import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsUpDownIcon as RegularArrowsUpDownIcon } from './arrows-up-down';
import { ArrowsUpDownIconDuotone as ArrowsUpDownIconDuotone } from './arrows-up-down-duotone';
import { ArrowsUpDownIconBold as ArrowsUpDownIconBold } from './arrows-up-down-bold';
import { ArrowsUpDownIconBoldDuotone as ArrowsUpDownIconBoldDuotone } from './arrows-up-down-bold-duotone';
import { ArrowsUpDownIconFill as ArrowsUpDownIconFill } from './arrows-up-down-fill';
import { ArrowsUpDownIconFillDuotone as ArrowsUpDownIconFillDuotone } from './arrows-up-down-fill-duotone';

export interface ArrowsUpDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowsUpDownIcon = memo(forwardRef<SVGSVGElement, ArrowsUpDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowsUpDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowsUpDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowsUpDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowsUpDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowsUpDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowsUpDownIcon ref={ref} {...props} />;
}));

ArrowsUpDownIcon.displayName = 'ArrowsUpDownIcon';

export { ArrowsUpDownIcon };
