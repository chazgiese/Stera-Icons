import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftIcon as RegularArrowLeftIcon } from './arrow-left';
import { ArrowLeftIconDuotone as ArrowLeftIconDuotone } from './arrow-left-duotone';
import { ArrowLeftIconBold as ArrowLeftIconBold } from './arrow-left-bold';
import { ArrowLeftIconBoldDuotone as ArrowLeftIconBoldDuotone } from './arrow-left-bold-duotone';
import { ArrowLeftIconFill as ArrowLeftIconFill } from './arrow-left-fill';
import { ArrowLeftIconFillDuotone as ArrowLeftIconFillDuotone } from './arrow-left-fill-duotone';

export interface ArrowLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowLeftIcon ref={ref} {...props} />;
}));

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export { ArrowLeftIcon };
