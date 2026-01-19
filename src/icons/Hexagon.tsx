import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HexagonRegular } from './HexagonRegular';
import { HexagonRegularDuotone } from './HexagonRegularDuotone';
import { HexagonBold } from './HexagonBold';
import { HexagonBoldDuotone } from './HexagonBoldDuotone';
import { HexagonFill } from './HexagonFill';
import { HexagonFillDuotone } from './HexagonFillDuotone';

export interface HexagonProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hexagon - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HexagonRegular } from 'stera-icons/icons/HexagonRegular';
 */
const Hexagon = memo(forwardRef<SVGSVGElement, HexagonProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HexagonBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HexagonBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HexagonFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HexagonFill ref={ref} {...rest} />;
  if (duotone) return <HexagonRegularDuotone ref={ref} {...rest} />;
  return <HexagonRegular ref={ref} {...rest} />;
}));

Hexagon.displayName = 'Hexagon';

// Triple export pattern (lucide-react style)
export { Hexagon, Hexagon as HexagonIcon, Hexagon as SiHexagon };
export default Hexagon;
