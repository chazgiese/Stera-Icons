import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BoltRegular } from './BoltRegular.js';
import { BoltRegularDuotone } from './BoltRegularDuotone.js';
import { BoltBold } from './BoltBold.js';
import { BoltBoldDuotone } from './BoltBoldDuotone.js';
import { BoltFill } from './BoltFill.js';
import { BoltFillDuotone } from './BoltFillDuotone.js';

export interface BoltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bolt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BoltRegular } from 'stera-icons/icons/BoltRegular';
 */
const Bolt = memo(forwardRef<SVGSVGElement, BoltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoltFill ref={ref} {...rest} />;
  if (duotone) return <BoltRegularDuotone ref={ref} {...rest} />;
  return <BoltRegular ref={ref} {...rest} />;
}));

Bolt.displayName = 'Bolt';

// Triple export pattern (lucide-react style)
export { Bolt, Bolt as BoltIcon, Bolt as SiBolt };
export default Bolt;
