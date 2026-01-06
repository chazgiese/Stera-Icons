import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftRightIcon as RegularArrowLeftRightIcon } from './arrow-left-right';
import { ArrowLeftRightIconDuotone as ArrowLeftRightIconDuotone } from './arrow-left-right-duotone';
import { ArrowLeftRightIconBold as ArrowLeftRightIconBold } from './arrow-left-right-bold';
import { ArrowLeftRightIconBoldDuotone as ArrowLeftRightIconBoldDuotone } from './arrow-left-right-bold-duotone';
import { ArrowLeftRightIconFill as ArrowLeftRightIconFill } from './arrow-left-right-fill';
import { ArrowLeftRightIconFillDuotone as ArrowLeftRightIconFillDuotone } from './arrow-left-right-fill-duotone';

export interface ArrowLeftRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowLeftRightIcon = memo(forwardRef<SVGSVGElement, ArrowLeftRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowLeftRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowLeftRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowLeftRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowLeftRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowLeftRightIcon ref={ref} {...props} />;
}));

ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon';

export { ArrowLeftRightIcon };
