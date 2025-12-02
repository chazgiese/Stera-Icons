import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutGridIcon as RegularLayoutGridIcon } from './layout-grid';
import { LayoutGridIconBold } from './layout-grid-bold';
import { LayoutGridIconFilled } from './layout-grid-filled';
import { LayoutGridIconFilltone } from './layout-grid-filltone';
import { LayoutGridIconLinetone } from './layout-grid-linetone';

export interface LayoutGridIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutGridIcon = memo(forwardRef<SVGSVGElement, LayoutGridIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutGridIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutGridIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutGridIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutGridIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutGridIcon ref={ref} {...props} />;
  }
}));

LayoutGridIcon.displayName = 'LayoutGridIcon';

export { LayoutGridIcon };
