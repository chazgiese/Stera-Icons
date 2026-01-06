import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightIcon as RegularArrowURightIcon } from './arrow-u-right';
import { ArrowURightIconDuotone as ArrowURightIconDuotone } from './arrow-u-right-duotone';
import { ArrowURightIconBold as ArrowURightIconBold } from './arrow-u-right-bold';
import { ArrowURightIconBoldDuotone as ArrowURightIconBoldDuotone } from './arrow-u-right-bold-duotone';
import { ArrowURightIconFill as ArrowURightIconFill } from './arrow-u-right-fill';
import { ArrowURightIconFillDuotone as ArrowURightIconFillDuotone } from './arrow-u-right-fill-duotone';

export interface ArrowURightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowURightIcon = memo(forwardRef<SVGSVGElement, ArrowURightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowURightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowURightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowURightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowURightIconDuotone ref={ref} {...props} />;
  return <RegularArrowURightIcon ref={ref} {...props} />;
}));

ArrowURightIcon.displayName = 'ArrowURightIcon';

export { ArrowURightIcon };
