import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesIcon as OverlappingCirclesIconRegular } from './overlapping-circles';
import { OverlappingCirclesIconBold } from './overlapping-circles-bold';
import { OverlappingCirclesIconFilled } from './overlapping-circles-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface OverlappingCirclesIconProps extends IconProps {
  variant?: IconVariant;
}

const OverlappingCirclesIcon = memo(forwardRef<SVGSVGElement, OverlappingCirclesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <OverlappingCirclesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <OverlappingCirclesIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <OverlappingCirclesIconRegular ref={ref} {...props} />;
  }
}));

OverlappingCirclesIcon.displayName = 'OverlappingCirclesIcon';

export { OverlappingCirclesIcon };
