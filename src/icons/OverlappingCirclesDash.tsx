import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { OverlappingCirclesDashRegular } from './OverlappingCirclesDashRegular.js';
import { OverlappingCirclesDashRegularDuotone } from './OverlappingCirclesDashRegularDuotone.js';
import { OverlappingCirclesDashBold } from './OverlappingCirclesDashBold.js';
import { OverlappingCirclesDashBoldDuotone } from './OverlappingCirclesDashBoldDuotone.js';
import { OverlappingCirclesDashFill } from './OverlappingCirclesDashFill.js';
import { OverlappingCirclesDashFillDuotone } from './OverlappingCirclesDashFillDuotone.js';

export interface OverlappingCirclesDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * OverlappingCirclesDash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { OverlappingCirclesDashRegular } from 'stera-icons/icons/OverlappingCirclesDashRegular';
 */
const OverlappingCirclesDash = memo(forwardRef<SVGSVGElement, OverlappingCirclesDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <OverlappingCirclesDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <OverlappingCirclesDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <OverlappingCirclesDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <OverlappingCirclesDashFill ref={ref} {...rest} />;
  if (duotone) return <OverlappingCirclesDashRegularDuotone ref={ref} {...rest} />;
  return <OverlappingCirclesDashRegular ref={ref} {...rest} />;
}));

OverlappingCirclesDash.displayName = 'OverlappingCirclesDash';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDash, OverlappingCirclesDash as OverlappingCirclesDashIcon, OverlappingCirclesDash as SiOverlappingCirclesDash };
export default OverlappingCirclesDash;
