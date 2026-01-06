import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuAltIcon as RegularMenuAltIcon } from './menu-alt';
import { MenuAltIconDuotone as MenuAltIconDuotone } from './menu-alt-duotone';
import { MenuAltIconBold as MenuAltIconBold } from './menu-alt-bold';
import { MenuAltIconBoldDuotone as MenuAltIconBoldDuotone } from './menu-alt-bold-duotone';
import { MenuAltIconFill as MenuAltIconFill } from './menu-alt-fill';
import { MenuAltIconFillDuotone as MenuAltIconFillDuotone } from './menu-alt-fill-duotone';

export interface MenuAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MenuAltIcon = memo(forwardRef<SVGSVGElement, MenuAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MenuAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MenuAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MenuAltIconFill ref={ref} {...props} />;
  if (duotone) return <MenuAltIconDuotone ref={ref} {...props} />;
  return <RegularMenuAltIcon ref={ref} {...props} />;
}));

MenuAltIcon.displayName = 'MenuAltIcon';

export { MenuAltIcon };
