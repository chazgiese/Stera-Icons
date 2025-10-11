import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarRightIcon as SidebarRightIconRegular } from './sidebar-right';
import { SidebarRightIconBold } from './sidebar-right-bold';
import { SidebarRightIconFilled } from './sidebar-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SidebarRightIconRegular ref={ref} {...props} />;
  }
}));

SidebarRightIcon.displayName = 'SidebarRightIcon';

export { SidebarRightIcon };
