import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrollIcon as RegularScrollIcon } from './scroll';
import { ScrollIconDuotone as ScrollIconDuotone } from './scroll-duotone';
import { ScrollIconBold as ScrollIconBold } from './scroll-bold';
import { ScrollIconBoldDuotone as ScrollIconBoldDuotone } from './scroll-bold-duotone';
import { ScrollIconFill as ScrollIconFill } from './scroll-fill';
import { ScrollIconFillDuotone as ScrollIconFillDuotone } from './scroll-fill-duotone';

export interface ScrollIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScrollIcon = memo(forwardRef<SVGSVGElement, ScrollIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScrollIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScrollIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScrollIconFill ref={ref} {...props} />;
  if (duotone) return <ScrollIconDuotone ref={ref} {...props} />;
  return <RegularScrollIcon ref={ref} {...props} />;
}));

ScrollIcon.displayName = 'ScrollIcon';

export { ScrollIcon };
