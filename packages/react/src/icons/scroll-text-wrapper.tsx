import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrollTextIcon as RegularScrollTextIcon } from './scroll-text';
import { ScrollTextIconDuotone as ScrollTextIconDuotone } from './scroll-text-duotone';
import { ScrollTextIconBold as ScrollTextIconBold } from './scroll-text-bold';
import { ScrollTextIconBoldDuotone as ScrollTextIconBoldDuotone } from './scroll-text-bold-duotone';
import { ScrollTextIconFill as ScrollTextIconFill } from './scroll-text-fill';
import { ScrollTextIconFillDuotone as ScrollTextIconFillDuotone } from './scroll-text-fill-duotone';

export interface ScrollTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ScrollTextIcon = memo(forwardRef<SVGSVGElement, ScrollTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ScrollTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ScrollTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ScrollTextIconFill ref={ref} {...props} />;
  if (duotone) return <ScrollTextIconDuotone ref={ref} {...props} />;
  return <RegularScrollTextIcon ref={ref} {...props} />;
}));

ScrollTextIcon.displayName = 'ScrollTextIcon';

export { ScrollTextIcon };
