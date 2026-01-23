import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PenNibRegular } from './PenNibRegular.js';
import { PenNibRegularDuotone } from './PenNibRegularDuotone.js';
import { PenNibBold } from './PenNibBold.js';
import { PenNibBoldDuotone } from './PenNibBoldDuotone.js';
import { PenNibFill } from './PenNibFill.js';
import { PenNibFillDuotone } from './PenNibFillDuotone.js';

export interface PenNibProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PenNib - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PenNibRegular } from 'stera-icons/icons/PenNibRegular';
 */
const PenNib = memo(forwardRef<SVGSVGElement, PenNibProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PenNibBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PenNibBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PenNibFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PenNibFill ref={ref} {...rest} />;
  if (duotone) return <PenNibRegularDuotone ref={ref} {...rest} />;
  return <PenNibRegular ref={ref} {...rest} />;
}));

PenNib.displayName = 'PenNib';

// Triple export pattern (lucide-react style)
export { PenNib, PenNib as PenNibIcon, PenNib as SiPenNib };
export default PenNib;
