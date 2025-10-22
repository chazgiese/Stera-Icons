import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MenuIcon as MenuIconRegular } from './menu';
import { MenuIconBold } from './menu-bold';
import { MenuIconFilled } from './menu-filled';
import { MenuIconFilltone } from './menu-filltone';
import { MenuIconLinetone } from './menu-linetone';

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
    case 'filltone':
      return <MenuIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MenuIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MenuIconRegular ref={ref} {...props} />;
  }
}));

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };
