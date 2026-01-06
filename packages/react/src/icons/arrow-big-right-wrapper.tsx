import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigRightIcon as RegularArrowBigRightIcon } from './arrow-big-right';
import { ArrowBigRightIconDuotone as ArrowBigRightIconDuotone } from './arrow-big-right-duotone';
import { ArrowBigRightIconBold as ArrowBigRightIconBold } from './arrow-big-right-bold';
import { ArrowBigRightIconBoldDuotone as ArrowBigRightIconBoldDuotone } from './arrow-big-right-bold-duotone';
import { ArrowBigRightIconFill as ArrowBigRightIconFill } from './arrow-big-right-fill';
import { ArrowBigRightIconFillDuotone as ArrowBigRightIconFillDuotone } from './arrow-big-right-fill-duotone';

export interface ArrowBigRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowBigRightIcon = memo(forwardRef<SVGSVGElement, ArrowBigRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowBigRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowBigRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowBigRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowBigRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowBigRightIcon ref={ref} {...props} />;
}));

ArrowBigRightIcon.displayName = 'ArrowBigRightIcon';

export { ArrowBigRightIcon };
