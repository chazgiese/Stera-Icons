import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightIcon as RegularArrowUpRightIcon } from './arrow-up-right';
import { ArrowUpRightIconDuotone as ArrowUpRightIconDuotone } from './arrow-up-right-duotone';
import { ArrowUpRightIconBold as ArrowUpRightIconBold } from './arrow-up-right-bold';
import { ArrowUpRightIconBoldDuotone as ArrowUpRightIconBoldDuotone } from './arrow-up-right-bold-duotone';
import { ArrowUpRightIconFill as ArrowUpRightIconFill } from './arrow-up-right-fill';
import { ArrowUpRightIconFillDuotone as ArrowUpRightIconFillDuotone } from './arrow-up-right-fill-duotone';

export interface ArrowUpRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpRightIcon ref={ref} {...props} />;
}));

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon';

export { ArrowUpRightIcon };
