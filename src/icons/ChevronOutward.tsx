import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronOutwardRegular } from './ChevronOutwardRegular.js';
import { ChevronOutwardRegularDuotone } from './ChevronOutwardRegularDuotone.js';
import { ChevronOutwardBold } from './ChevronOutwardBold.js';
import { ChevronOutwardBoldDuotone } from './ChevronOutwardBoldDuotone.js';
import { ChevronOutwardFill } from './ChevronOutwardFill.js';
import { ChevronOutwardFillDuotone } from './ChevronOutwardFillDuotone.js';

export interface ChevronOutwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronOutward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronOutwardRegular } from 'stera-icons/icons/ChevronOutwardRegular';
 */
const ChevronOutward = memo(forwardRef<SVGSVGElement, ChevronOutwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronOutwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronOutwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronOutwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronOutwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronOutwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronOutwardRegular ref={ref} {...rest} />;
}));

ChevronOutward.displayName = 'ChevronOutward';

// Triple export pattern (lucide-react style)
export { ChevronOutward, ChevronOutward as ChevronOutwardIcon, ChevronOutward as SiChevronOutward };
export default ChevronOutward;
