import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LeafRegular } from './LeafRegular';
import { LeafRegularDuotone } from './LeafRegularDuotone';
import { LeafBold } from './LeafBold';
import { LeafBoldDuotone } from './LeafBoldDuotone';
import { LeafFill } from './LeafFill';
import { LeafFillDuotone } from './LeafFillDuotone';

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
