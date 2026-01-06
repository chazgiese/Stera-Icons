import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpIcon as RegularArrowUpIcon } from './arrow-up';
import { ArrowUpIconDuotone as ArrowUpIconDuotone } from './arrow-up-duotone';
import { ArrowUpIconBold as ArrowUpIconBold } from './arrow-up-bold';
import { ArrowUpIconBoldDuotone as ArrowUpIconBoldDuotone } from './arrow-up-bold-duotone';
import { ArrowUpIconFill as ArrowUpIconFill } from './arrow-up-fill';
import { ArrowUpIconFillDuotone as ArrowUpIconFillDuotone } from './arrow-up-fill-duotone';

export interface ArrowUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpIcon = memo(forwardRef<SVGSVGElement, ArrowUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpIcon ref={ref} {...props} />;
}));

ArrowUpIcon.displayName = 'ArrowUpIcon';

export { ArrowUpIcon };
