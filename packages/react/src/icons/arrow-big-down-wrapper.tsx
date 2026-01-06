import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigDownIcon as RegularArrowBigDownIcon } from './arrow-big-down';
import { ArrowBigDownIconDuotone as ArrowBigDownIconDuotone } from './arrow-big-down-duotone';
import { ArrowBigDownIconBold as ArrowBigDownIconBold } from './arrow-big-down-bold';
import { ArrowBigDownIconBoldDuotone as ArrowBigDownIconBoldDuotone } from './arrow-big-down-bold-duotone';
import { ArrowBigDownIconFill as ArrowBigDownIconFill } from './arrow-big-down-fill';
import { ArrowBigDownIconFillDuotone as ArrowBigDownIconFillDuotone } from './arrow-big-down-fill-duotone';

export interface ArrowBigDownIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowBigDownIcon = memo(forwardRef<SVGSVGElement, ArrowBigDownIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigDownIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowBigDownIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowBigDownIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowBigDownIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowBigDownIconDuotone ref={ref} {...props} />;
  return <RegularArrowBigDownIcon ref={ref} {...props} />;
}));

ArrowBigDownIcon.displayName = 'ArrowBigDownIcon';

export { ArrowBigDownIcon };
