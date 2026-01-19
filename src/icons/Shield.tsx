import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldRegular } from './ShieldRegular';
import { ShieldRegularDuotone } from './ShieldRegularDuotone';
import { ShieldBold } from './ShieldBold';
import { ShieldBoldDuotone } from './ShieldBoldDuotone';
import { ShieldFill } from './ShieldFill';
import { ShieldFillDuotone } from './ShieldFillDuotone';

export interface ShieldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Shield - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldRegular } from 'stera-icons/icons/ShieldRegular';
 */
const Shield = memo(forwardRef<SVGSVGElement, ShieldProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldFill ref={ref} {...rest} />;
  if (duotone) return <ShieldRegularDuotone ref={ref} {...rest} />;
  return <ShieldRegular ref={ref} {...rest} />;
}));

Shield.displayName = 'Shield';

// Triple export pattern (lucide-react style)
export { Shield, Shield as ShieldIcon, Shield as SiShield };
export default Shield;
