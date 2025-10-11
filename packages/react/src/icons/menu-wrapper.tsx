import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuIcon as MenuIconRegular } from './menu';
import { MenuIconBold } from './menu-bold';
import { MenuIconFilled } from './menu-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MenuIconProps extends IconProps {
  variant?: IconVariant;
}

const MenuIcon = memo(forwardRef<SVGSVGElement, MenuIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MenuIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MenuIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MenuIconRegular ref={ref} {...props} />;
  }
}));

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };
