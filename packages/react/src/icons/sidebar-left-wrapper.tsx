import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SidebarLeftIcon as SidebarLeftIconRegular } from './sidebar-left';
import { SidebarLeftIconBold } from './sidebar-left-bold';
import { SidebarLeftIconFilled } from './sidebar-left-filled';
import { SidebarLeftIconFilltone } from './sidebar-left-filltone';
import { SidebarLeftIconLinetone } from './sidebar-left-linetone';

export interface SidebarLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const SidebarLeftIcon = memo(forwardRef<SVGSVGElement, SidebarLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SidebarLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SidebarLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SidebarLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SidebarLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SidebarLeftIconRegular ref={ref} {...props} />;
  }
}));

SidebarLeftIcon.displayName = 'SidebarLeftIcon';

export { SidebarLeftIcon };
