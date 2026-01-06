import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineUpIcon as RegularArrowLineUpIcon } from './arrow-line-up';
import { ArrowLineUpIconDuotone as ArrowLineUpIconDuotone } from './arrow-line-up-duotone';
import { ArrowLineUpIconBold as ArrowLineUpIconBold } from './arrow-line-up-bold';
import { ArrowLineUpIconBoldDuotone as ArrowLineUpIconBoldDuotone } from './arrow-line-up-bold-duotone';
import { ArrowLineUpIconFill as ArrowLineUpIconFill } from './arrow-line-up-fill';
import { ArrowLineUpIconFillDuotone as ArrowLineUpIconFillDuotone } from './arrow-line-up-fill-duotone';

export interface ArrowLineUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLineUpIcon = memo(forwardRef<SVGSVGElement, ArrowLineUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLineUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLineUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLineUpIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLineUpIconDuotone ref={ref} {...props} />;
  return <RegularArrowLineUpIcon ref={ref} {...props} />;
}));

ArrowLineUpIcon.displayName = 'ArrowLineUpIcon';

export { ArrowLineUpIcon };
