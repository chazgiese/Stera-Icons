import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersIcon as RegularSlidersIcon } from './sliders';
import { SlidersIconDuotone as SlidersIconDuotone } from './sliders-duotone';
import { SlidersIconBold as SlidersIconBold } from './sliders-bold';
import { SlidersIconBoldDuotone as SlidersIconBoldDuotone } from './sliders-bold-duotone';
import { SlidersIconFill as SlidersIconFill } from './sliders-fill';
import { SlidersIconFillDuotone as SlidersIconFillDuotone } from './sliders-fill-duotone';

export interface SlidersIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SlidersIcon = memo(forwardRef<SVGSVGElement, SlidersIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlidersIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SlidersIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SlidersIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SlidersIconFill ref={ref} {...props} />;
  if (duotone) return <SlidersIconDuotone ref={ref} {...props} />;
  return <RegularSlidersIcon ref={ref} {...props} />;
}));

SlidersIcon.displayName = 'SlidersIcon';

export { SlidersIcon };
