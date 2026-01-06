import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersVIcon as RegularSlidersVIcon } from './sliders-v';
import { SlidersVIconDuotone as SlidersVIconDuotone } from './sliders-v-duotone';
import { SlidersVIconBold as SlidersVIconBold } from './sliders-v-bold';
import { SlidersVIconBoldDuotone as SlidersVIconBoldDuotone } from './sliders-v-bold-duotone';
import { SlidersVIconFill as SlidersVIconFill } from './sliders-v-fill';
import { SlidersVIconFillDuotone as SlidersVIconFillDuotone } from './sliders-v-fill-duotone';

export interface SlidersVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SlidersVIcon = memo(forwardRef<SVGSVGElement, SlidersVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlidersVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SlidersVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SlidersVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SlidersVIconFill ref={ref} {...props} />;
  if (duotone) return <SlidersVIconDuotone ref={ref} {...props} />;
  return <RegularSlidersVIcon ref={ref} {...props} />;
}));

SlidersVIcon.displayName = 'SlidersVIcon';

export { SlidersVIcon };
