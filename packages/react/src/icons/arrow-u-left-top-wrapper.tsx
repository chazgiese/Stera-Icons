import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftTopIcon as RegularArrowULeftTopIcon } from './arrow-u-left-top';
import { ArrowULeftTopIconDuotone as ArrowULeftTopIconDuotone } from './arrow-u-left-top-duotone';
import { ArrowULeftTopIconBold as ArrowULeftTopIconBold } from './arrow-u-left-top-bold';
import { ArrowULeftTopIconBoldDuotone as ArrowULeftTopIconBoldDuotone } from './arrow-u-left-top-bold-duotone';
import { ArrowULeftTopIconFill as ArrowULeftTopIconFill } from './arrow-u-left-top-fill';
import { ArrowULeftTopIconFillDuotone as ArrowULeftTopIconFillDuotone } from './arrow-u-left-top-fill-duotone';

export interface ArrowULeftTopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowULeftTopIcon = memo(forwardRef<SVGSVGElement, ArrowULeftTopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowULeftTopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowULeftTopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowULeftTopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowULeftTopIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowULeftTopIconDuotone ref={ref} {...props} />;
  return <RegularArrowULeftTopIcon ref={ref} {...props} />;
}));

ArrowULeftTopIcon.displayName = 'ArrowULeftTopIcon';

export { ArrowULeftTopIcon };
