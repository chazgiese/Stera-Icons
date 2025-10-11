import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarLeftIcon as SidebarLeftIconRegular } from './sidebar-left';
import { SidebarLeftIconBold } from './sidebar-left-bold';
import { SidebarLeftIconFilled } from './sidebar-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SidebarLeftIconRegular ref={ref} {...props} />;
  }
}));

SidebarLeftIcon.displayName = 'SidebarLeftIcon';

export { SidebarLeftIcon };
