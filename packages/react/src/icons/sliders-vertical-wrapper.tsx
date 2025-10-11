import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersVerticalIcon as SlidersVerticalIconRegular } from './sliders-vertical';
import { SlidersVerticalIconBold } from './sliders-vertical-bold';
import { SlidersVerticalIconFilled } from './sliders-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SlidersVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const SlidersVerticalIcon = memo(forwardRef<SVGSVGElement, SlidersVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SlidersVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SlidersVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SlidersVerticalIconRegular ref={ref} {...props} />;
  }
}));

SlidersVerticalIcon.displayName = 'SlidersVerticalIcon';

export { SlidersVerticalIcon };
