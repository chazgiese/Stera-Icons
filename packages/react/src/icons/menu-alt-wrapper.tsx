import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MenuAltIcon as RegularMenuAltIcon } from './menu-alt';
import { MenuAltIconBold } from './menu-alt-bold';
import { MenuAltIconFilled } from './menu-alt-filled';
import { MenuAltIconFilltone } from './menu-alt-filltone';
import { MenuAltIconLinetone } from './menu-alt-linetone';

export interface MenuAltIconProps extends IconProps {
  variant?: IconVariant;
}

const MenuAltIcon = memo(forwardRef<SVGSVGElement, MenuAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MenuAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MenuAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MenuAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MenuAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMenuAltIcon ref={ref} {...props} />;
  }
}));

MenuAltIcon.displayName = 'MenuAltIcon';

export { MenuAltIcon };
