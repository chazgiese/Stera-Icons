import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CubeDashRegular } from './CubeDashRegular.js';
import { CubeDashRegularDuotone } from './CubeDashRegularDuotone.js';
import { CubeDashBold } from './CubeDashBold.js';
import { CubeDashBoldDuotone } from './CubeDashBoldDuotone.js';
import { CubeDashFill } from './CubeDashFill.js';
import { CubeDashFillDuotone } from './CubeDashFillDuotone.js';

export interface CubeDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CubeDash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CubeDashRegular } from 'stera-icons/icons/CubeDashRegular';
 */
const CubeDash = memo(forwardRef<SVGSVGElement, CubeDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubeDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CubeDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CubeDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CubeDashFill ref={ref} {...rest} />;
  if (duotone) return <CubeDashRegularDuotone ref={ref} {...rest} />;
  return <CubeDashRegular ref={ref} {...rest} />;
}));

CubeDash.displayName = 'CubeDash';

// Triple export pattern (lucide-react style)
export { CubeDash, CubeDash as CubeDashIcon, CubeDash as SiCubeDash };
export default CubeDash;
