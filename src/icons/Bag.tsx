import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BagRegular } from './BagRegular.js';
import { BagRegularDuotone } from './BagRegularDuotone.js';
import { BagBold } from './BagBold.js';
import { BagBoldDuotone } from './BagBoldDuotone.js';
import { BagFill } from './BagFill.js';
import { BagFillDuotone } from './BagFillDuotone.js';

export interface BagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BagRegular } from 'stera-icons/icons/BagRegular';
 */
const Bag = memo(forwardRef<SVGSVGElement, BagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BagFill ref={ref} {...rest} />;
  if (duotone) return <BagRegularDuotone ref={ref} {...rest} />;
  return <BagRegular ref={ref} {...rest} />;
}));

Bag.displayName = 'Bag';

// Triple export pattern (lucide-react style)
export { Bag, Bag as BagIcon, Bag as SiBag };
export default Bag;
