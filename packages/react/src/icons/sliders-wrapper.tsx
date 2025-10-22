import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SlidersIcon as RegularSlidersIcon } from './sliders';
import { SlidersIconBold } from './sliders-bold';
import { SlidersIconFilled } from './sliders-filled';
import { SlidersIconFilltone } from './sliders-filltone';
import { SlidersIconLinetone } from './sliders-linetone';

export interface SlidersIconProps extends IconProps {
  variant?: IconVariant;
}

const SlidersIcon = memo(forwardRef<SVGSVGElement, SlidersIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SlidersIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SlidersIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SlidersIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SlidersIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSlidersIcon ref={ref} {...props} />;
  }
}));

SlidersIcon.displayName = 'SlidersIcon';

export { SlidersIcon };
