import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutGridPlusIcon as RegularLayoutGridPlusIcon } from './layout-grid-plus';
import { LayoutGridPlusIconBold } from './layout-grid-plus-bold';
import { LayoutGridPlusIconFilled } from './layout-grid-plus-filled';
import { LayoutGridPlusIconFilltone } from './layout-grid-plus-filltone';
import { LayoutGridPlusIconLinetone } from './layout-grid-plus-linetone';

export interface LayoutGridPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutGridPlusIcon = memo(forwardRef<SVGSVGElement, LayoutGridPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutGridPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutGridPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutGridPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutGridPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutGridPlusIcon ref={ref} {...props} />;
  }
}));

LayoutGridPlusIcon.displayName = 'LayoutGridPlusIcon';

export { LayoutGridPlusIcon };
