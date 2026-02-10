import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MenuSimpleRegular } from './MenuSimpleRegular.js';
import { MenuSimpleRegularDuotone } from './MenuSimpleRegularDuotone.js';
import { MenuSimpleBold } from './MenuSimpleBold.js';
import { MenuSimpleBoldDuotone } from './MenuSimpleBoldDuotone.js';
import { MenuSimpleFill } from './MenuSimpleFill.js';
import { MenuSimpleFillDuotone } from './MenuSimpleFillDuotone.js';

export interface MenuSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MenuSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuSimpleRegular } from 'stera-icons/icons/MenuSimpleRegular';
 */
const MenuSimple = memo(forwardRef<SVGSVGElement, MenuSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuSimpleFill ref={ref} {...rest} />;
  if (duotone) return <MenuSimpleRegularDuotone ref={ref} {...rest} />;
  return <MenuSimpleRegular ref={ref} {...rest} />;
}));

MenuSimple.displayName = 'MenuSimple';

// Triple export pattern (lucide-react style)
export { MenuSimple, MenuSimple as MenuSimpleIcon, MenuSimple as SiMenuSimple };
export default MenuSimple;
