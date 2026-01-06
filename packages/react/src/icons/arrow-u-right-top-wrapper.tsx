import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightTopIcon as RegularArrowURightTopIcon } from './arrow-u-right-top';
import { ArrowURightTopIconDuotone as ArrowURightTopIconDuotone } from './arrow-u-right-top-duotone';
import { ArrowURightTopIconBold as ArrowURightTopIconBold } from './arrow-u-right-top-bold';
import { ArrowURightTopIconBoldDuotone as ArrowURightTopIconBoldDuotone } from './arrow-u-right-top-bold-duotone';
import { ArrowURightTopIconFill as ArrowURightTopIconFill } from './arrow-u-right-top-fill';
import { ArrowURightTopIconFillDuotone as ArrowURightTopIconFillDuotone } from './arrow-u-right-top-fill-duotone';

export interface ArrowURightTopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowURightTopIcon = memo(forwardRef<SVGSVGElement, ArrowURightTopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightTopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowURightTopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowURightTopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowURightTopIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowURightTopIconDuotone ref={ref} {...props} />;
  return <RegularArrowURightTopIcon ref={ref} {...props} />;
}));

ArrowURightTopIcon.displayName = 'ArrowURightTopIcon';

export { ArrowURightTopIcon };
