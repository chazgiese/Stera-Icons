import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { OverlappingCirclesIcon as OverlappingCirclesIconRegular } from './overlapping-circles';
import { OverlappingCirclesIconBold } from './overlapping-circles-bold';
import { OverlappingCirclesIconFilled } from './overlapping-circles-filled';
import { OverlappingCirclesIconFilltone } from './overlapping-circles-filltone';
import { OverlappingCirclesIconLinetone } from './overlapping-circles-linetone';

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
    case 'filltone':
      return <OverlappingCirclesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <OverlappingCirclesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <OverlappingCirclesIconRegular ref={ref} {...props} />;
  }
}));

OverlappingCirclesIcon.displayName = 'OverlappingCirclesIcon';

export { OverlappingCirclesIcon };
