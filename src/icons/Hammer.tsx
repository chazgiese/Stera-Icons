import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HammerRegular } from './HammerRegular.js';
import { HammerRegularDuotone } from './HammerRegularDuotone.js';
import { HammerBold } from './HammerBold.js';
import { HammerBoldDuotone } from './HammerBoldDuotone.js';
import { HammerFill } from './HammerFill.js';
import { HammerFillDuotone } from './HammerFillDuotone.js';

export interface HammerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hammer - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HammerRegular } from 'stera-icons/icons/HammerRegular';
 */
const Hammer = memo(forwardRef<SVGSVGElement, HammerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HammerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HammerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HammerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HammerFill ref={ref} {...rest} />;
  if (duotone) return <HammerRegularDuotone ref={ref} {...rest} />;
  return <HammerRegular ref={ref} {...rest} />;
}));

Hammer.displayName = 'Hammer';

// Triple export pattern (lucide-react style)
export { Hammer, Hammer as HammerIcon, Hammer as SiHammer };
export default Hammer;
