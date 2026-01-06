import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuSimpleAltIcon as RegularMenuSimpleAltIcon } from './menu-simple-alt';
import { MenuSimpleAltIconDuotone as MenuSimpleAltIconDuotone } from './menu-simple-alt-duotone';
import { MenuSimpleAltIconBold as MenuSimpleAltIconBold } from './menu-simple-alt-bold';
import { MenuSimpleAltIconBoldDuotone as MenuSimpleAltIconBoldDuotone } from './menu-simple-alt-bold-duotone';
import { MenuSimpleAltIconFill as MenuSimpleAltIconFill } from './menu-simple-alt-fill';
import { MenuSimpleAltIconFillDuotone as MenuSimpleAltIconFillDuotone } from './menu-simple-alt-fill-duotone';

export interface MenuSimpleAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MenuSimpleAltIcon = memo(forwardRef<SVGSVGElement, MenuSimpleAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuSimpleAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MenuSimpleAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MenuSimpleAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MenuSimpleAltIconFill ref={ref} {...props} />;
  if (duotone) return <MenuSimpleAltIconDuotone ref={ref} {...props} />;
  return <RegularMenuSimpleAltIcon ref={ref} {...props} />;
}));

MenuSimpleAltIcon.displayName = 'MenuSimpleAltIcon';

export { MenuSimpleAltIcon };
