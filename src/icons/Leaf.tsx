import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LeafRegular } from './LeafRegular.js';
import { LeafRegularDuotone } from './LeafRegularDuotone.js';
import { LeafBold } from './LeafBold.js';
import { LeafBoldDuotone } from './LeafBoldDuotone.js';
import { LeafFill } from './LeafFill.js';
import { LeafFillDuotone } from './LeafFillDuotone.js';

export interface LeafProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Leaf - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LeafRegular } from 'stera-icons/icons/LeafRegular';
 */
const Leaf = memo(forwardRef<SVGSVGElement, LeafProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LeafBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LeafBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LeafFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LeafFill ref={ref} {...rest} />;
  if (duotone) return <LeafRegularDuotone ref={ref} {...rest} />;
  return <LeafRegular ref={ref} {...rest} />;
}));

Leaf.displayName = 'Leaf';

// Triple export pattern (lucide-react style)
export { Leaf, Leaf as LeafIcon, Leaf as SiLeaf };
export default Leaf;
