import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FortressRegular } from './FortressRegular';
import { FortressRegularDuotone } from './FortressRegularDuotone';
import { FortressBold } from './FortressBold';
import { FortressBoldDuotone } from './FortressBoldDuotone';
import { FortressFill } from './FortressFill';
import { FortressFillDuotone } from './FortressFillDuotone';

export interface FortressProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Fortress - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FortressRegular } from 'stera-icons/icons/FortressRegular';
 */
const Fortress = memo(forwardRef<SVGSVGElement, FortressProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FortressBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FortressBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FortressFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FortressFill ref={ref} {...rest} />;
  if (duotone) return <FortressRegularDuotone ref={ref} {...rest} />;
  return <FortressRegular ref={ref} {...rest} />;
}));

Fortress.displayName = 'Fortress';

// Triple export pattern (lucide-react style)
export { Fortress, Fortress as FortressIcon, Fortress as SiFortress };
export default Fortress;
