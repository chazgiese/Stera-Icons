import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { StairsRegular } from './StairsRegular.js';
import { StairsRegularDuotone } from './StairsRegularDuotone.js';
import { StairsBold } from './StairsBold.js';
import { StairsBoldDuotone } from './StairsBoldDuotone.js';
import { StairsFill } from './StairsFill.js';
import { StairsFillDuotone } from './StairsFillDuotone.js';

export interface StairsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Stairs - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StairsRegular } from 'stera-icons/icons/StairsRegular';
 */
const Stairs = memo(forwardRef<SVGSVGElement, StairsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StairsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StairsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StairsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StairsFill ref={ref} {...rest} />;
  if (duotone) return <StairsRegularDuotone ref={ref} {...rest} />;
  return <StairsRegular ref={ref} {...rest} />;
}));

Stairs.displayName = 'Stairs';

// Triple export pattern (lucide-react style)
export { Stairs, Stairs as StairsIcon, Stairs as SiStairs };
export default Stairs;
