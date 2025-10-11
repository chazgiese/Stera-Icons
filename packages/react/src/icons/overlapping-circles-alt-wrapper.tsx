import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesAltIcon as OverlappingCirclesAltIconRegular } from './overlapping-circles-alt';
import { OverlappingCirclesAltIconBold } from './overlapping-circles-alt-bold';
import { OverlappingCirclesAltIconFilled } from './overlapping-circles-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface OverlappingCirclesAltIconProps extends IconProps {
  variant?: IconVariant;
}

const OverlappingCirclesAltIcon = memo(forwardRef<SVGSVGElement, OverlappingCirclesAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <OverlappingCirclesAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <OverlappingCirclesAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <OverlappingCirclesAltIconRegular ref={ref} {...props} />;
  }
}));

OverlappingCirclesAltIcon.displayName = 'OverlappingCirclesAltIcon';

export { OverlappingCirclesAltIcon };
