import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuRegular } from './MenuRegular';
import { MenuRegularDuotone } from './MenuRegularDuotone';
import { MenuBold } from './MenuBold';
import { MenuBoldDuotone } from './MenuBoldDuotone';
import { MenuFill } from './MenuFill';
import { MenuFillDuotone } from './MenuFillDuotone';

export interface MenuProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Menu - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuRegular } from 'stera-icons/MenuRegular';
 */
const Menu = memo(forwardRef<SVGSVGElement, MenuProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuFill ref={ref} {...rest} />;
  if (duotone) return <MenuRegularDuotone ref={ref} {...rest} />;
  return <MenuRegular ref={ref} {...rest} />;
}));

Menu.displayName = 'Menu';

// Triple export pattern (lucide-react style)
export { Menu, Menu as MenuIcon, Menu as SiMenu };
