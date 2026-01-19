import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridPlusRegular } from './LayoutGridPlusRegular';
import { LayoutGridPlusRegularDuotone } from './LayoutGridPlusRegularDuotone';
import { LayoutGridPlusBold } from './LayoutGridPlusBold';
import { LayoutGridPlusBoldDuotone } from './LayoutGridPlusBoldDuotone';
import { LayoutGridPlusFill } from './LayoutGridPlusFill';
import { LayoutGridPlusFillDuotone } from './LayoutGridPlusFillDuotone';

export interface LayoutGridPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutGridPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutGridPlusRegular } from 'stera-icons/icons/LayoutGridPlusRegular';
 */
const LayoutGridPlus = memo(forwardRef<SVGSVGElement, LayoutGridPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutGridPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutGridPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutGridPlusFill ref={ref} {...rest} />;
  if (duotone) return <LayoutGridPlusRegularDuotone ref={ref} {...rest} />;
  return <LayoutGridPlusRegular ref={ref} {...rest} />;
}));

LayoutGridPlus.displayName = 'LayoutGridPlus';

// Triple export pattern (lucide-react style)
export { LayoutGridPlus, LayoutGridPlus as LayoutGridPlusIcon, LayoutGridPlus as SiLayoutGridPlus };
export default LayoutGridPlus;
