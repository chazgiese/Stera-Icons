import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShieldBanRegular } from './ShieldBanRegular.js';
import { ShieldBanRegularDuotone } from './ShieldBanRegularDuotone.js';
import { ShieldBanBold } from './ShieldBanBold.js';
import { ShieldBanBoldDuotone } from './ShieldBanBoldDuotone.js';
import { ShieldBanFill } from './ShieldBanFill.js';
import { ShieldBanFillDuotone } from './ShieldBanFillDuotone.js';

export interface ShieldBanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldBan - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldBanRegular } from 'stera-icons/icons/ShieldBanRegular';
 */
const ShieldBan = memo(forwardRef<SVGSVGElement, ShieldBanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldBanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldBanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldBanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldBanFill ref={ref} {...rest} />;
  if (duotone) return <ShieldBanRegularDuotone ref={ref} {...rest} />;
  return <ShieldBanRegular ref={ref} {...rest} />;
}));

ShieldBan.displayName = 'ShieldBan';

// Triple export pattern (lucide-react style)
export { ShieldBan, ShieldBan as ShieldBanIcon, ShieldBan as SiShieldBan };
export default ShieldBan;
