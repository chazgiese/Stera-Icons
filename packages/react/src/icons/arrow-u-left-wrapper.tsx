import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftIcon as RegularArrowULeftIcon } from './arrow-u-left';
import { ArrowULeftIconDuotone as ArrowULeftIconDuotone } from './arrow-u-left-duotone';
import { ArrowULeftIconBold as ArrowULeftIconBold } from './arrow-u-left-bold';
import { ArrowULeftIconBoldDuotone as ArrowULeftIconBoldDuotone } from './arrow-u-left-bold-duotone';
import { ArrowULeftIconFill as ArrowULeftIconFill } from './arrow-u-left-fill';
import { ArrowULeftIconFillDuotone as ArrowULeftIconFillDuotone } from './arrow-u-left-fill-duotone';

export interface ArrowULeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowULeftIcon = memo(forwardRef<SVGSVGElement, ArrowULeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowULeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowULeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowULeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowULeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowULeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowULeftIcon ref={ref} {...props} />;
}));

ArrowULeftIcon.displayName = 'ArrowULeftIcon';

export { ArrowULeftIcon };
