import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigLeftIcon as RegularArrowBigLeftIcon } from './arrow-big-left';
import { ArrowBigLeftIconDuotone as ArrowBigLeftIconDuotone } from './arrow-big-left-duotone';
import { ArrowBigLeftIconBold as ArrowBigLeftIconBold } from './arrow-big-left-bold';
import { ArrowBigLeftIconBoldDuotone as ArrowBigLeftIconBoldDuotone } from './arrow-big-left-bold-duotone';
import { ArrowBigLeftIconFill as ArrowBigLeftIconFill } from './arrow-big-left-fill';
import { ArrowBigLeftIconFillDuotone as ArrowBigLeftIconFillDuotone } from './arrow-big-left-fill-duotone';

export interface ArrowBigLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowBigLeftIcon = memo(forwardRef<SVGSVGElement, ArrowBigLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowBigLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowBigLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowBigLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowBigLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowBigLeftIcon ref={ref} {...props} />;
}));

ArrowBigLeftIcon.displayName = 'ArrowBigLeftIcon';

export { ArrowBigLeftIcon };
