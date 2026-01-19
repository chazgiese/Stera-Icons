import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuAltRegular } from './MenuAltRegular';
import { MenuAltRegularDuotone } from './MenuAltRegularDuotone';
import { MenuAltBold } from './MenuAltBold';
import { MenuAltBoldDuotone } from './MenuAltBoldDuotone';
import { MenuAltFill } from './MenuAltFill';
import { MenuAltFillDuotone } from './MenuAltFillDuotone';

export interface MenuAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MenuAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuAltRegular } from 'stera-icons/icons/MenuAltRegular';
 */
const MenuAlt = memo(forwardRef<SVGSVGElement, MenuAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuAltFill ref={ref} {...rest} />;
  if (duotone) return <MenuAltRegularDuotone ref={ref} {...rest} />;
  return <MenuAltRegular ref={ref} {...rest} />;
}));

MenuAlt.displayName = 'MenuAlt';

// Triple export pattern (lucide-react style)
export { MenuAlt, MenuAlt as MenuAltIcon, MenuAlt as SiMenuAlt };
export default MenuAlt;
