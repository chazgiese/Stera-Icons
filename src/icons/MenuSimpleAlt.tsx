import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MenuSimpleAltRegular } from './MenuSimpleAltRegular';
import { MenuSimpleAltRegularDuotone } from './MenuSimpleAltRegularDuotone';
import { MenuSimpleAltBold } from './MenuSimpleAltBold';
import { MenuSimpleAltBoldDuotone } from './MenuSimpleAltBoldDuotone';
import { MenuSimpleAltFill } from './MenuSimpleAltFill';
import { MenuSimpleAltFillDuotone } from './MenuSimpleAltFillDuotone';

export interface MenuSimpleAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MenuSimpleAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuSimpleAltRegular } from 'stera-icons/icons/MenuSimpleAltRegular';
 */
const MenuSimpleAlt = memo(forwardRef<SVGSVGElement, MenuSimpleAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuSimpleAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuSimpleAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuSimpleAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuSimpleAltFill ref={ref} {...rest} />;
  if (duotone) return <MenuSimpleAltRegularDuotone ref={ref} {...rest} />;
  return <MenuSimpleAltRegular ref={ref} {...rest} />;
}));

MenuSimpleAlt.displayName = 'MenuSimpleAlt';

// Triple export pattern (lucide-react style)
export { MenuSimpleAlt, MenuSimpleAlt as MenuSimpleAltIcon, MenuSimpleAlt as SiMenuSimpleAlt };
