import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BagRegular } from './BagRegular';
import { BagRegularDuotone } from './BagRegularDuotone';
import { BagBold } from './BagBold';
import { BagBoldDuotone } from './BagBoldDuotone';
import { BagFill } from './BagFill';
import { BagFillDuotone } from './BagFillDuotone';

export interface BagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BagRegular } from 'stera-icons/BagRegular';
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
