import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SortAscendingNarrowRegular } from './SortAscendingNarrowRegular.js';
import { SortAscendingNarrowRegularDuotone } from './SortAscendingNarrowRegularDuotone.js';
import { SortAscendingNarrowBold } from './SortAscendingNarrowBold.js';
import { SortAscendingNarrowBoldDuotone } from './SortAscendingNarrowBoldDuotone.js';
import { SortAscendingNarrowFill } from './SortAscendingNarrowFill.js';
import { SortAscendingNarrowFillDuotone } from './SortAscendingNarrowFillDuotone.js';

export interface SortAscendingNarrowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SortAscendingNarrow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SortAscendingNarrowRegular } from 'stera-icons/icons/SortAscendingNarrowRegular';
 */
const SortAscendingNarrow = memo(forwardRef<SVGSVGElement, SortAscendingNarrowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortAscendingNarrowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SortAscendingNarrowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SortAscendingNarrowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SortAscendingNarrowFill ref={ref} {...rest} />;
  if (duotone) return <SortAscendingNarrowRegularDuotone ref={ref} {...rest} />;
  return <SortAscendingNarrowRegular ref={ref} {...rest} />;
}));

SortAscendingNarrow.displayName = 'SortAscendingNarrow';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrow, SortAscendingNarrow as SortAscendingNarrowIcon, SortAscendingNarrow as SiSortAscendingNarrow };
export default SortAscendingNarrow;
