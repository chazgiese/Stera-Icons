import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShieldCheckRegular } from './ShieldCheckRegular.js';
import { ShieldCheckRegularDuotone } from './ShieldCheckRegularDuotone.js';
import { ShieldCheckBold } from './ShieldCheckBold.js';
import { ShieldCheckBoldDuotone } from './ShieldCheckBoldDuotone.js';
import { ShieldCheckFill } from './ShieldCheckFill.js';
import { ShieldCheckFillDuotone } from './ShieldCheckFillDuotone.js';

export interface ShieldCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldCheckRegular } from 'stera-icons/icons/ShieldCheckRegular';
 */
const ShieldCheck = memo(forwardRef<SVGSVGElement, ShieldCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldCheckFill ref={ref} {...rest} />;
  if (duotone) return <ShieldCheckRegularDuotone ref={ref} {...rest} />;
  return <ShieldCheckRegular ref={ref} {...rest} />;
}));

ShieldCheck.displayName = 'ShieldCheck';

// Triple export pattern (lucide-react style)
export { ShieldCheck, ShieldCheck as ShieldCheckIcon, ShieldCheck as SiShieldCheck };
export default ShieldCheck;
