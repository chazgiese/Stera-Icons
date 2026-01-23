import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SortAscendingRegular } from './SortAscendingRegular.js';
import { SortAscendingRegularDuotone } from './SortAscendingRegularDuotone.js';
import { SortAscendingBold } from './SortAscendingBold.js';
import { SortAscendingBoldDuotone } from './SortAscendingBoldDuotone.js';
import { SortAscendingFill } from './SortAscendingFill.js';
import { SortAscendingFillDuotone } from './SortAscendingFillDuotone.js';

export interface SortAscendingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SortAscending - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SortAscendingRegular } from 'stera-icons/icons/SortAscendingRegular';
 */
const SortAscending = memo(forwardRef<SVGSVGElement, SortAscendingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SortAscendingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SortAscendingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SortAscendingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SortAscendingFill ref={ref} {...rest} />;
  if (duotone) return <SortAscendingRegularDuotone ref={ref} {...rest} />;
  return <SortAscendingRegular ref={ref} {...rest} />;
}));

SortAscending.displayName = 'SortAscending';

// Triple export pattern (lucide-react style)
export { SortAscending, SortAscending as SortAscendingIcon, SortAscending as SiSortAscending };
export default SortAscending;
