import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutGridCirclePlusRegular } from './LayoutGridCirclePlusRegular.js';
import { LayoutGridCirclePlusRegularDuotone } from './LayoutGridCirclePlusRegularDuotone.js';
import { LayoutGridCirclePlusBold } from './LayoutGridCirclePlusBold.js';
import { LayoutGridCirclePlusBoldDuotone } from './LayoutGridCirclePlusBoldDuotone.js';
import { LayoutGridCirclePlusFill } from './LayoutGridCirclePlusFill.js';
import { LayoutGridCirclePlusFillDuotone } from './LayoutGridCirclePlusFillDuotone.js';

export interface LayoutGridCirclePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutGridCirclePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutGridCirclePlusRegular } from 'stera-icons/icons/LayoutGridCirclePlusRegular';
 */
const LayoutGridCirclePlus = memo(forwardRef<SVGSVGElement, LayoutGridCirclePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridCirclePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutGridCirclePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutGridCirclePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutGridCirclePlusFill ref={ref} {...rest} />;
  if (duotone) return <LayoutGridCirclePlusRegularDuotone ref={ref} {...rest} />;
  return <LayoutGridCirclePlusRegular ref={ref} {...rest} />;
}));

LayoutGridCirclePlus.displayName = 'LayoutGridCirclePlus';

// Triple export pattern (lucide-react style)
export { LayoutGridCirclePlus, LayoutGridCirclePlus as LayoutGridCirclePlusIcon, LayoutGridCirclePlus as SiLayoutGridCirclePlus };
export default LayoutGridCirclePlus;
