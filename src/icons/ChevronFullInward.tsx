import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullInwardRegular } from './ChevronFullInwardRegular.js';
import { ChevronFullInwardRegularDuotone } from './ChevronFullInwardRegularDuotone.js';
import { ChevronFullInwardBold } from './ChevronFullInwardBold.js';
import { ChevronFullInwardBoldDuotone } from './ChevronFullInwardBoldDuotone.js';
import { ChevronFullInwardFill } from './ChevronFullInwardFill.js';
import { ChevronFullInwardFillDuotone } from './ChevronFullInwardFillDuotone.js';

export interface ChevronFullInwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullInward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullInwardRegular } from 'stera-icons/icons/ChevronFullInwardRegular';
 */
const ChevronFullInward = memo(forwardRef<SVGSVGElement, ChevronFullInwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullInwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullInwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullInwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullInwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullInwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullInwardRegular ref={ref} {...rest} />;
}));

ChevronFullInward.displayName = 'ChevronFullInward';

// Triple export pattern (lucide-react style)
export { ChevronFullInward, ChevronFullInward as ChevronFullInwardIcon, ChevronFullInward as SiChevronFullInward };
export default ChevronFullInward;
