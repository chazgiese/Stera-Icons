import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullLeftRegular } from './ChevronFullLeftRegular.js';
import { ChevronFullLeftRegularDuotone } from './ChevronFullLeftRegularDuotone.js';
import { ChevronFullLeftBold } from './ChevronFullLeftBold.js';
import { ChevronFullLeftBoldDuotone } from './ChevronFullLeftBoldDuotone.js';
import { ChevronFullLeftFill } from './ChevronFullLeftFill.js';
import { ChevronFullLeftFillDuotone } from './ChevronFullLeftFillDuotone.js';

export interface ChevronFullLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullLeftRegular } from 'stera-icons/icons/ChevronFullLeftRegular';
 */
const ChevronFullLeft = memo(forwardRef<SVGSVGElement, ChevronFullLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullLeftRegular ref={ref} {...rest} />;
}));

ChevronFullLeft.displayName = 'ChevronFullLeft';

// Triple export pattern (lucide-react style)
export { ChevronFullLeft, ChevronFullLeft as ChevronFullLeftIcon, ChevronFullLeft as SiChevronFullLeft };
export default ChevronFullLeft;
