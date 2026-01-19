import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OverlappingCirclesDashRegular } from './OverlappingCirclesDashRegular';
import { OverlappingCirclesDashRegularDuotone } from './OverlappingCirclesDashRegularDuotone';
import { OverlappingCirclesDashBold } from './OverlappingCirclesDashBold';
import { OverlappingCirclesDashBoldDuotone } from './OverlappingCirclesDashBoldDuotone';
import { OverlappingCirclesDashFill } from './OverlappingCirclesDashFill';
import { OverlappingCirclesDashFillDuotone } from './OverlappingCirclesDashFillDuotone';

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
