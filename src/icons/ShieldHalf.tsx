import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShieldHalfRegular } from './ShieldHalfRegular.js';
import { ShieldHalfRegularDuotone } from './ShieldHalfRegularDuotone.js';
import { ShieldHalfBold } from './ShieldHalfBold.js';
import { ShieldHalfBoldDuotone } from './ShieldHalfBoldDuotone.js';
import { ShieldHalfFill } from './ShieldHalfFill.js';
import { ShieldHalfFillDuotone } from './ShieldHalfFillDuotone.js';

export interface ShieldHalfProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldHalf - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldHalfRegular } from 'stera-icons/icons/ShieldHalfRegular';
 */
const ShieldHalf = memo(forwardRef<SVGSVGElement, ShieldHalfProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldHalfBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldHalfBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldHalfFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldHalfFill ref={ref} {...rest} />;
  if (duotone) return <ShieldHalfRegularDuotone ref={ref} {...rest} />;
  return <ShieldHalfRegular ref={ref} {...rest} />;
}));

ShieldHalf.displayName = 'ShieldHalf';

// Triple export pattern (lucide-react style)
export { ShieldHalf, ShieldHalf as ShieldHalfIcon, ShieldHalf as SiShieldHalf };
export default ShieldHalf;
