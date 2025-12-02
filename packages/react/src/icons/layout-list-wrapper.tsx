import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutListIcon as RegularLayoutListIcon } from './layout-list';
import { LayoutListIconBold } from './layout-list-bold';
import { LayoutListIconFilled } from './layout-list-filled';
import { LayoutListIconFilltone } from './layout-list-filltone';
import { LayoutListIconLinetone } from './layout-list-linetone';

export interface LayoutListIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutListIcon = memo(forwardRef<SVGSVGElement, LayoutListIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutListIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutListIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutListIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutListIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutListIcon ref={ref} {...props} />;
  }
}));

LayoutListIcon.displayName = 'LayoutListIcon';

export { LayoutListIcon };
