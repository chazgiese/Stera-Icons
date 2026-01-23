import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SortNarrowRegular } from './SortNarrowRegular.js';
import { SortNarrowRegularDuotone } from './SortNarrowRegularDuotone.js';
import { SortNarrowBold } from './SortNarrowBold.js';
import { SortNarrowBoldDuotone } from './SortNarrowBoldDuotone.js';
import { SortNarrowFill } from './SortNarrowFill.js';
import { SortNarrowFillDuotone } from './SortNarrowFillDuotone.js';

export interface SortNarrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SortNarrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SortNarrowRegular } from 'stera-icons/icons/SortNarrowRegular';
 */
const SortNarrow = memo(forwardRef<SVGSVGElement, SortNarrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortNarrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SortNarrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SortNarrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SortNarrowFill ref={ref} {...rest} />;
  if (duotone) return <SortNarrowRegularDuotone ref={ref} {...rest} />;
  return <SortNarrowRegular ref={ref} {...rest} />;
}));

SortNarrow.displayName = 'SortNarrow';

// Triple export pattern (lucide-react style)
export { SortNarrow, SortNarrow as SortNarrowIcon, SortNarrow as SiSortNarrow };
export default SortNarrow;
