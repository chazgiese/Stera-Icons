import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsLeftRightIcon as RegularArrowsLeftRightIcon } from './arrows-left-right';
import { ArrowsLeftRightIconDuotone as ArrowsLeftRightIconDuotone } from './arrows-left-right-duotone';
import { ArrowsLeftRightIconBold as ArrowsLeftRightIconBold } from './arrows-left-right-bold';
import { ArrowsLeftRightIconBoldDuotone as ArrowsLeftRightIconBoldDuotone } from './arrows-left-right-bold-duotone';
import { ArrowsLeftRightIconFill as ArrowsLeftRightIconFill } from './arrows-left-right-fill';
import { ArrowsLeftRightIconFillDuotone as ArrowsLeftRightIconFillDuotone } from './arrows-left-right-fill-duotone';

export interface ArrowsLeftRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowsLeftRightIcon = memo(forwardRef<SVGSVGElement, ArrowsLeftRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowsLeftRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowsLeftRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowsLeftRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowsLeftRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowsLeftRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowsLeftRightIcon ref={ref} {...props} />;
}));

ArrowsLeftRightIcon.displayName = 'ArrowsLeftRightIcon';

export { ArrowsLeftRightIcon };
