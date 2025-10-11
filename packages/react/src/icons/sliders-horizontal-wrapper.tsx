import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersHorizontalIcon as SlidersHorizontalIconRegular } from './sliders-horizontal';
import { SlidersHorizontalIconBold } from './sliders-horizontal-bold';
import { SlidersHorizontalIconFilled } from './sliders-horizontal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SlidersHorizontalIconProps extends IconProps {
  variant?: IconVariant;
}

const SlidersHorizontalIcon = memo(forwardRef<SVGSVGElement, SlidersHorizontalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SlidersHorizontalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SlidersHorizontalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SlidersHorizontalIconRegular ref={ref} {...props} />;
  }
}));

SlidersHorizontalIcon.displayName = 'SlidersHorizontalIcon';

export { SlidersHorizontalIcon };
