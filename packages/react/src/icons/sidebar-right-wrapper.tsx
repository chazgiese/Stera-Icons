import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarRightIcon as RegularSidebarRightIcon } from './sidebar-right';
import { SidebarRightIconDuotone as SidebarRightIconDuotone } from './sidebar-right-duotone';
import { SidebarRightIconBold as SidebarRightIconBold } from './sidebar-right-bold';
import { SidebarRightIconBoldDuotone as SidebarRightIconBoldDuotone } from './sidebar-right-bold-duotone';
import { SidebarRightIconFill as SidebarRightIconFill } from './sidebar-right-fill';
import { SidebarRightIconFillDuotone as SidebarRightIconFillDuotone } from './sidebar-right-fill-duotone';

export interface SidebarRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SidebarRightIcon = memo(forwardRef<SVGSVGElement, SidebarRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SidebarRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SidebarRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SidebarRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SidebarRightIconFill ref={ref} {...props} />;
  if (duotone) return <SidebarRightIconDuotone ref={ref} {...props} />;
  return <RegularSidebarRightIcon ref={ref} {...props} />;
}));

SidebarRightIcon.displayName = 'SidebarRightIcon';

export { SidebarRightIcon };
