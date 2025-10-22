import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SidebarRightIcon as RegularSidebarRightIcon } from './sidebar-right';
import { SidebarRightIconBold } from './sidebar-right-bold';
import { SidebarRightIconFilled } from './sidebar-right-filled';
import { SidebarRightIconFilltone } from './sidebar-right-filltone';
import { SidebarRightIconLinetone } from './sidebar-right-linetone';

export interface SidebarRightIconProps extends IconProps {
  variant?: IconVariant;
}

const SidebarRightIcon = memo(forwardRef<SVGSVGElement, SidebarRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SidebarRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SidebarRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SidebarRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SidebarRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSidebarRightIcon ref={ref} {...props} />;
  }
}));

SidebarRightIcon.displayName = 'SidebarRightIcon';

export { SidebarRightIcon };
