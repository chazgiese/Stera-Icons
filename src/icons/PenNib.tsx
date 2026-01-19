import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenNibRegular } from './PenNibRegular';
import { PenNibRegularDuotone } from './PenNibRegularDuotone';
import { PenNibBold } from './PenNibBold';
import { PenNibBoldDuotone } from './PenNibBoldDuotone';
import { PenNibFill } from './PenNibFill';
import { PenNibFillDuotone } from './PenNibFillDuotone';

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
