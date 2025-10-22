import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { OverlappingCirclesAltIcon as OverlappingCirclesAltIconRegular } from './overlapping-circles-alt';
import { OverlappingCirclesAltIconBold } from './overlapping-circles-alt-bold';
import { OverlappingCirclesAltIconFilled } from './overlapping-circles-alt-filled';
import { OverlappingCirclesAltIconFilltone } from './overlapping-circles-alt-filltone';
import { OverlappingCirclesAltIconLinetone } from './overlapping-circles-alt-linetone';

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
    case 'filltone':
      return <OverlappingCirclesAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <OverlappingCirclesAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <OverlappingCirclesAltIconRegular ref={ref} {...props} />;
  }
}));

OverlappingCirclesAltIcon.displayName = 'OverlappingCirclesAltIcon';

export { OverlappingCirclesAltIcon };
