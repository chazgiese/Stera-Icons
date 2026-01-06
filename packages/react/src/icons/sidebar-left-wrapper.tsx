import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarLeftIcon as RegularSidebarLeftIcon } from './sidebar-left';
import { SidebarLeftIconDuotone as SidebarLeftIconDuotone } from './sidebar-left-duotone';
import { SidebarLeftIconBold as SidebarLeftIconBold } from './sidebar-left-bold';
import { SidebarLeftIconBoldDuotone as SidebarLeftIconBoldDuotone } from './sidebar-left-bold-duotone';
import { SidebarLeftIconFill as SidebarLeftIconFill } from './sidebar-left-fill';
import { SidebarLeftIconFillDuotone as SidebarLeftIconFillDuotone } from './sidebar-left-fill-duotone';

export interface SidebarLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SidebarLeftIcon = memo(forwardRef<SVGSVGElement, SidebarLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SidebarLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SidebarLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SidebarLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SidebarLeftIconFill ref={ref} {...props} />;
  if (duotone) return <SidebarLeftIconDuotone ref={ref} {...props} />;
  return <RegularSidebarLeftIcon ref={ref} {...props} />;
}));

SidebarLeftIcon.displayName = 'SidebarLeftIcon';

export { SidebarLeftIcon };
