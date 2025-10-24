import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MenuSimpleAltIcon as RegularMenuSimpleAltIcon } from './menu-simple-alt';
import { MenuSimpleAltIconBold } from './menu-simple-alt-bold';
import { MenuSimpleAltIconFilled } from './menu-simple-alt-filled';
import { MenuSimpleAltIconFilltone } from './menu-simple-alt-filltone';
import { MenuSimpleAltIconLinetone } from './menu-simple-alt-linetone';

export interface MenuSimpleAltIconProps extends IconProps {
  variant?: IconVariant;
}

const MenuSimpleAltIcon = memo(forwardRef<SVGSVGElement, MenuSimpleAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MenuSimpleAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MenuSimpleAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MenuSimpleAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MenuSimpleAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMenuSimpleAltIcon ref={ref} {...props} />;
  }
}));

MenuSimpleAltIcon.displayName = 'MenuSimpleAltIcon';

export { MenuSimpleAltIcon };
