import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuIcon as RegularMenuIcon } from './menu';
import { MenuIconDuotone as MenuIconDuotone } from './menu-duotone';
import { MenuIconBold as MenuIconBold } from './menu-bold';
import { MenuIconBoldDuotone as MenuIconBoldDuotone } from './menu-bold-duotone';
import { MenuIconFill as MenuIconFill } from './menu-fill';
import { MenuIconFillDuotone as MenuIconFillDuotone } from './menu-fill-duotone';

export interface MenuIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MenuIcon = memo(forwardRef<SVGSVGElement, MenuIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MenuIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MenuIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MenuIconFill ref={ref} {...props} />;
  if (duotone) return <MenuIconDuotone ref={ref} {...props} />;
  return <RegularMenuIcon ref={ref} {...props} />;
}));

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };
