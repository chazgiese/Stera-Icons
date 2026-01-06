import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftIcon as RegularArrowUpLeftIcon } from './arrow-up-left';
import { ArrowUpLeftIconDuotone as ArrowUpLeftIconDuotone } from './arrow-up-left-duotone';
import { ArrowUpLeftIconBold as ArrowUpLeftIconBold } from './arrow-up-left-bold';
import { ArrowUpLeftIconBoldDuotone as ArrowUpLeftIconBoldDuotone } from './arrow-up-left-bold-duotone';
import { ArrowUpLeftIconFill as ArrowUpLeftIconFill } from './arrow-up-left-fill';
import { ArrowUpLeftIconFillDuotone as ArrowUpLeftIconFillDuotone } from './arrow-up-left-fill-duotone';

export interface ArrowUpLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowUpLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpLeftIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpLeftIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpLeftIcon ref={ref} {...props} />;
}));

ArrowUpLeftIcon.displayName = 'ArrowUpLeftIcon';

export { ArrowUpLeftIcon };
