import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SlidersVIcon as RegularSlidersVIcon } from './sliders-v';
import { SlidersVIconBold } from './sliders-v-bold';
import { SlidersVIconFilled } from './sliders-v-filled';
import { SlidersVIconFilltone } from './sliders-v-filltone';
import { SlidersVIconLinetone } from './sliders-v-linetone';

export interface SlidersVIconProps extends IconProps {
  variant?: IconVariant;
}

const SlidersVIcon = memo(forwardRef<SVGSVGElement, SlidersVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SlidersVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SlidersVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SlidersVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SlidersVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSlidersVIcon ref={ref} {...props} />;
  }
}));

SlidersVIcon.displayName = 'SlidersVIcon';

export { SlidersVIcon };
