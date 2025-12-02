import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutGridCircleIcon as RegularLayoutGridCircleIcon } from './layout-grid-circle';
import { LayoutGridCircleIconBold } from './layout-grid-circle-bold';
import { LayoutGridCircleIconFilled } from './layout-grid-circle-filled';
import { LayoutGridCircleIconFilltone } from './layout-grid-circle-filltone';
import { LayoutGridCircleIconLinetone } from './layout-grid-circle-linetone';

export interface LayoutGridCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutGridCircleIcon = memo(forwardRef<SVGSVGElement, LayoutGridCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutGridCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutGridCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutGridCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutGridCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutGridCircleIcon ref={ref} {...props} />;
  }
}));

LayoutGridCircleIcon.displayName = 'LayoutGridCircleIcon';

export { LayoutGridCircleIcon };
