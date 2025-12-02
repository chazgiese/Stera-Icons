import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutGridCirclePlusIcon as RegularLayoutGridCirclePlusIcon } from './layout-grid-circle-plus';
import { LayoutGridCirclePlusIconBold } from './layout-grid-circle-plus-bold';
import { LayoutGridCirclePlusIconFilled } from './layout-grid-circle-plus-filled';
import { LayoutGridCirclePlusIconFilltone } from './layout-grid-circle-plus-filltone';
import { LayoutGridCirclePlusIconLinetone } from './layout-grid-circle-plus-linetone';

export interface LayoutGridCirclePlusIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutGridCirclePlusIcon = memo(forwardRef<SVGSVGElement, LayoutGridCirclePlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutGridCirclePlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutGridCirclePlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutGridCirclePlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutGridCirclePlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutGridCirclePlusIcon ref={ref} {...props} />;
  }
}));

LayoutGridCirclePlusIcon.displayName = 'LayoutGridCirclePlusIcon';

export { LayoutGridCirclePlusIcon };
